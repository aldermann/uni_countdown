# Cách sử dụng.
## Yêu cầu
- Cài đặt node.js 8 trở lên.
- Có một tài khoản và một app trên firebase
## Cách làm 
- Chạy `npm install`
- Chạy `firebase login`. Sẽ có một cửa sổ đăng nhập mở ra cho các bạn
- Login xong thì chạy `firebase list`. Sẽ hiện ra một bảng các app của bạn trên firebase. Nhìn vào dòng của app bạn vừa tạo trên firebase.
- Sửa mục `default` trong file [.firebaserc](.firebaserc) thành tên (cột thứ nhất trong bảng vừa rồi) của app
- Chạy `firebase use (id_của_app)`, id ở đây là cột thứ hai trong bảng vừa rồi
- Sửa code trong [src](./src) tùy ý. Để thử xem code có chạy được hay không, hay xem nó xấu đẹp như thế nào trước khi tung lên mạng, chạy `npm run start`
- Chạy `firebase deploy` để tung app lên mạng.
 