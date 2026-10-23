const movies = [
  {
    "id": 1,
    "title": "The Last Horizon",
    "year": 2024,
    "genres": [
      "Hành động",
      "Khoa học viễn tưởng"
    ],
    "rating": 8.4,
    "director": "Minh Trần",
    "cast": [
      "An Nguyễn",
      "Linh Phạm",
      "Quốc Bảo"
    ],
    "duration": "128 phút",
    "description": "Một phi hành đoàn nhỏ phải vượt qua vùng không gian chưa được khám phá để mang hy vọng trở về Trái Đất. Khi những bí mật dần hé lộ, họ phải lựa chọn giữa nhiệm vụ và tình bạn.",
    "poster": "poster-horizon.jpg"
  },
  {
    "id": 2,
    "title": "Thành Phố Mưa",
    "year": 2023,
    "genres": [
      "Tâm lý",
      "Lãng mạn"
    ],
    "rating": 7.8,
    "director": "Thu Hà",
    "cast": [
      "Mai Anh",
      "Tuấn Kiệt"
    ],
    "duration": "112 phút",
    "description": "Giữa thành phố luôn phủ mưa, hai người xa lạ gặp nhau và học cách đối diện với những điều chưa từng nói thành lời.",
    "poster": "poster-rain.jpg"
  },
  {
    "id": 3,
    "title": "Titan Protocol",
    "year": 2025,
    "genres": [
      "Hành động",
      "Khoa học viễn tưởng",
      "Giật gân"
    ],
    "rating": 8.1,
    "director": "David Lê",
    "cast": [
      "Huy Hoàng",
      "Bảo Trân",
      "Nam Phan"
    ],
    "duration": "136 phút",
    "description": "Một chuyên gia an ninh phát hiện giao thức bí mật có thể kiểm soát toàn bộ hệ thống thành phố. Cuộc chạy đua với thời gian bắt đầu.",
    "poster": "poster-titan.jpg"
  },
  {
    "id": 4,
    "title": "Bếp Nhà Mình",
    "year": 2022,
    "genres": [
      "Hài",
      "Gia đình"
    ],
    "rating": 7.5,
    "director": "Hoàng Vũ",
    "cast": [
      "Thanh Vy",
      "Đức Anh",
      "Bé Na"
    ],
    "duration": "98 phút",
    "description": "Một gia đình nhiều thế hệ cùng mở lại quán ăn cũ, nơi những món ăn quen thuộc giúp họ hàn gắn khoảng cách và tìm lại tiếng cười.",
    "poster": "poster-kitchen.jpg"
  },
  {
    "id": 5,
    "title": "Tàn Tích Bí Ẩn",
    "year": 2024,
    "genres": [
      "Phiêu lưu",
      "Giật gân"
    ],
    "rating": 7.9,
    "director": "Khánh Dương",
    "cast": [
      "Phúc Lâm",
      "Yến Nhi",
      "Gia Hân"
    ],
    "duration": "121 phút",
    "description": "Nhóm khảo cổ khám phá một thành phố bị chôn vùi dưới sa mạc. Mỗi manh mối lại dẫn đến một câu hỏi nguy hiểm hơn về lịch sử nơi đây.",
    "poster": "poster-ruins.jpg"
  },
  {
    "id": 6,
    "title": "Trạm Cuối Mùa Hè",
    "year": 2021,
    "genres": [
      "Lãng mạn",
      "Tâm lý"
    ],
    "rating": 7.6,
    "director": "Ngọc Mai",
    "cast": [
      "Minh Châu",
      "Hoài Nam"
    ],
    "duration": "105 phút",
    "description": "Một cuộc gặp tình cờ ở ga tàu khiến hai người bạn cũ nhìn lại ước mơ, những lựa chọn và mùa hè đã thay đổi cuộc đời họ.",
    "poster": "poster-summer.jpg"
  },
  {
    "id": 7,
    "title": "Vệ Binh Ngân Hà",
    "year": 2025,
    "genres": [
      "Hành động",
      "Phiêu lưu",
      "Khoa học viễn tưởng"
    ],
    "rating": 8.6,
    "director": "Lâm Nguyễn",
    "cast": [
      "Khôi Vũ",
      "Diệp Chi",
      "Trọng Tín"
    ],
    "duration": "142 phút",
    "description": "Đội vệ binh liên hành tinh phải hợp sức để ngăn một nguồn năng lượng cổ đại rơi vào tay kẻ xấu.",
    "poster": "poster-galaxy.jpg"
  },
  {
    "id": 8,
    "title": "Tiếng Cười Cuối Tuần",
    "year": 2020,
    "genres": [
      "Hài"
    ],
    "rating": 7.1,
    "director": "Bình An",
    "cast": [
      "Tấn Phát",
      "Mỹ Duyên"
    ],
    "duration": "94 phút",
    "description": "Một nhóm bạn lên kế hoạch cho chuyến đi cuối tuần hoàn hảo, nhưng mọi thứ liên tục đi chệch hướng theo cách không ai ngờ tới.",
    "poster": "poster-comedy.jpg"
  },
  {
    "id": 9,
    "title": "Hồ Sơ Số 09",
    "year": 2023,
    "genres": [
      "Giật gân",
      "Tâm lý"
    ],
    "rating": 8.0,
    "director": "Quang Minh",
    "cast": [
      "Thái Sơn",
      "Hà My",
      "Đình Khang"
    ],
    "duration": "117 phút",
    "description": "Một phóng viên lần theo hồ sơ thất lạc và nhận ra các nhân chứng đều có liên hệ với một vụ án chưa từng được giải quyết.",
    "poster": "poster-file.jpg"
  },
  {
    "id": 10,
    "title": "Vườn Sao Nhỏ",
    "year": 2022,
    "genres": [
      "Gia đình",
      "Phiêu lưu"
    ],
    "rating": 7.7,
    "director": "Lan Phương",
    "cast": [
      "Bảo Ngọc",
      "Duy Khánh"
    ],
    "duration": "101 phút",
    "description": "Hai chị em bắt đầu hành trình tìm khu vườn huyền thoại, khám phá lòng can đảm, sự sẻ chia và phép màu từ thiên nhiên.",
    "poster": "poster-garden.jpg"
  },
  {
    "id": 11,
    "title": "Đường Đua Rực Lửa",
    "year": 2024,
    "genres": [
      "Hành động",
      "Thể thao"
    ],
    "rating": 7.9,
    "director": "Vĩnh Phúc",
    "cast": [
      "Hoàng Long",
      "Trúc Lam"
    ],
    "duration": "119 phút",
    "description": "Một tay đua trẻ trở lại đường đua để chứng minh rằng bản lĩnh không chỉ nằm ở tốc độ mà còn ở tinh thần đồng đội.",
    "poster": "poster-race.jpg"
  },
  {
    "id": 12,
    "title": "Mật Mã Đại Dương",
    "year": 2025,
    "genres": [
      "Phiêu lưu",
      "Giật gân"
    ],
    "rating": 8.2,
    "director": "Hải Đăng",
    "cast": [
      "Đăng Khoa",
      "Khánh Linh",
      "Thiên Phúc"
    ],
    "duration": "130 phút",
    "description": "Một nhóm nhà hải dương học phát hiện tín hiệu lạ từ đáy biển và bị cuốn vào bí ẩn có thể thay đổi cách con người hiểu về đại dương.",
    "poster": "poster-ocean.jpg"
  }
];
