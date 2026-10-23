(() => {
  const grid = document.getElementById('movieGrid');
  const genreList = document.getElementById('genreList');
  const searchInput = document.getElementById('searchInput');
  const resultCount = document.getElementById('resultCount');
  const activeFilters = document.getElementById('activeFilters');
  const emptyState = document.getElementById('emptyState');
  const modal = document.getElementById('movieModal');
  const modalContent = document.getElementById('modalContent');
  const selectedGenres = new Set();
  let searchTerm = '';
  let debounceTimer;

  const allGenres = [...new Set(movies.flatMap(movie => movie.genres))].sort((a,b) => a.localeCompare(b,'vi'));
  const genreCounts = Object.fromEntries(allGenres.map(genre => [genre, movies.filter(movie => movie.genres.includes(genre)).length]));

  function renderGenres() {
    genreList.innerHTML = allGenres.map(genre => `
      <label class="genre-option">
        <input type="checkbox" value="${escapeHTML(genre)}" ${selectedGenres.has(genre) ? 'checked' : ''}>
        <span>${escapeHTML(genre)}</span><span class="genre-count">${genreCounts[genre]}</span>
      </label>`).join('');
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  }

  function getFilteredMovies() {
    const normalized = searchTerm.trim().toLocaleLowerCase('vi');
    return movies.filter(movie => {
      const matchesGenre = selectedGenres.size === 0 || [...selectedGenres].every(genre => movie.genres.includes(genre));
      const matchesSearch = movie.title.toLocaleLowerCase('vi').includes(normalized);
      return matchesGenre && matchesSearch;
    });
  }

  function renderMovies() {
    const filtered = getFilteredMovies();
    resultCount.textContent = filtered.length;
    grid.innerHTML = filtered.map(movie => `
      <article class="movie-card" tabindex="0" role="button" data-movie-id="${movie.id}" aria-label="Xem chi tiết ${escapeHTML(movie.title)}">
        <div class="poster-wrap">
          <img src="images/${movie.poster}" alt="Poster ${escapeHTML(movie.title)}" loading="lazy">
          <span class="rating">★ ${movie.rating.toFixed(1)}</span>
          <button class="quick-view" type="button" data-movie-id="${movie.id}">Chi tiết ↗</button>
        </div>
        <div class="movie-info"><h3 class="movie-title" title="${escapeHTML(movie.title)}">${escapeHTML(movie.title)}</h3>
        <div class="movie-meta"><span>${movie.year}</span><span>${movie.duration}</span></div>
        <span class="movie-genre">${escapeHTML(movie.genres[0])}</span></div>
      </article>`).join('');
    emptyState.hidden = filtered.length !== 0;
    grid.hidden = filtered.length === 0;
    activeFilters.innerHTML = [
      ...[...selectedGenres].map(g => `<span class="filter-chip">Thể loại: ${escapeHTML(g)}</span>`),
      ...(searchTerm.trim() ? [`<span class="filter-chip">Từ khóa: “${escapeHTML(searchTerm.trim())}”</span>`] : [])
    ].join('');
  }

  function applyFilters() { renderMovies(); }

  genreList.addEventListener('change', event => {
    if (!event.target.matches('input[type="checkbox"]')) return;
    event.target.checked ? selectedGenres.add(event.target.value) : selectedGenres.delete(event.target.value);
    applyFilters();
  });

  searchInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => { searchTerm = searchInput.value; applyFilters(); }, 400);
  });

  document.getElementById('clearFilters').addEventListener('click', () => {
    selectedGenres.clear(); searchTerm = ''; searchInput.value = '';
    renderGenres(); applyFilters();
  });
  document.getElementById('resetEmpty').addEventListener('click', () => {
    selectedGenres.clear(); searchTerm = ''; searchInput.value = '';
    renderGenres(); applyFilters();
  });

  function openModal(id) {
    const movie = movies.find(item => item.id === Number(id));
    if (!movie) return;
    modalContent.innerHTML = `<div class="modal-layout">
      <img class="modal-poster" src="images/${movie.poster}" alt="Poster ${escapeHTML(movie.title)}">
      <div class="modal-details"><span class="eyebrow">MOVIE DETAILS · ${movie.year}</span>
      <h2 id="modalTitle">${escapeHTML(movie.title)}</h2><div class="modal-rating">★ ${movie.rating.toFixed(1)} <span style="color:var(--muted);font-weight:500">/ 10</span></div>
      <p class="modal-description">${escapeHTML(movie.description)}</p>
      <p class="detail-line"><strong>Đạo diễn:</strong> ${escapeHTML(movie.director)}<br><strong>Diễn viên:</strong> ${movie.cast.map(escapeHTML).join(', ')}<br><strong>Thời lượng:</strong> ${escapeHTML(movie.duration)}</p>
      <div class="modal-tags">${movie.genres.map(g => `<span>${escapeHTML(g)}</span>`).join('')}</div></div></div>`;
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    document.getElementById('modalClose').focus();
  }
  function closeModal() { modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow = ''; }

  grid.addEventListener('click', event => {
    const card = event.target.closest('[data-movie-id]');
    if (card) openModal(card.dataset.movieId);
  });
  grid.addEventListener('keydown', event => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.movie-card')) {
      event.preventDefault(); openModal(event.target.dataset.movieId);
    }
  });
  document.getElementById('modalClose').addEventListener('click', closeModal);
  modal.addEventListener('click', event => { if (event.target.dataset.close === 'true') closeModal(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && modal.classList.contains('open')) closeModal(); });

  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  function setTheme(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    themeIcon.textContent = isDark ? '☀' : '☾';
    localStorage.setItem('cinescope-theme', isDark ? 'dark' : 'light');
    themeToggle.setAttribute('aria-label', isDark ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối');
  }
  const savedTheme = localStorage.getItem('cinescope-theme');
  setTheme(savedTheme === 'dark');
  themeToggle.addEventListener('click', () => setTheme(!document.body.classList.contains('dark-mode')));

  renderGenres();
  renderMovies();
})();