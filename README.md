# Realtime-chat app dùng trong môi trường nội bộ UTH có chức năng dịch thuật - UTH Realtime-app chat
------------

<img src="https://www.pace.edu.vn/uploads/news/2024/04/1-cong-nghe-thong-tin-hoc-gi.jpg" alt="Back ground for Readme" title="Back ground for Readme">

## Giới thiệu đồ án
------------


## Mục tiêu 

Xây dựng một hệ thống ứng dụng trò chuyện trực tuyến hoàn thiện, cho phép người dùng trong môi trường nội bộ UTH giao tiếp một cách an toàn, thuận tiện và hiệu quả như sau :
* Quản lý thông tin người dùng, tài khoản người dùng và xác thực và bảo mật cho tài khoản người dùng.
* Chức năng trò chuyện, gửi tin nhắn trục tiếp (One-on-One Messaging), nhận tin nhắn và hiển thị lịch sử chat theo thời gian thực.
* Chức năng nhắn tin nhóm , gửi tin nhắn nhóm (Group Messaging), nhận tin nhắn và hiển thị lịch sử chat theo thời gian thực.
* Các chức năng bổ sung (thông báo, tìm kiếm,..).
* Hệ thống hỗ trợ  phân quyền người dùng, đảm bảo tính bảo mật, an toàn của hệ thống.
* Chức năng dịch thuật cho đoạn chat hỗ trợ nhiều loại ngôn ngữ.

## Nhóm 2 gồm có :
------------
| MSSV | Họ tên | SĐT | Facebook| Đánh giá %|
|--------------|-------|------|-------|------|
| 22H1120011 | Nguyễn Hoàng Gia Huy  | 0909560466 | [Nguyễn Huy ](https://www.facebook.com/nguyen.huy.63855)  | 50 |
| 2235622362 | Nguyễn Kim Loan  | 0775639689 | [Loan Nguyễn ]()  | 50 |

## Mô hình ERD

## Các chức năng chính trong ứng dụng
------------
### Chức năng chính cho người dùng
>* Đăng nhập
>* Đăng ký
>* Xác thực cho người dùng
### Chức năng người quản trị 
>* Đăng nhập
>* Quản lí người dùng
>* Tạo nhóm và các phòng ban
>* tra cứu người đang sử dụng
>* Xem được lịch sử chat của mọi người
### Các chức năng, công nghệ mới (ngoài phạm vi môn học)
>* Sử dụng mongoDB để lưu dữ liệu trên đám mây và quản lí dữ liệu một các chặt chẽ hơn
>* Sử dụng Cloundinary để có thể lưu trữ hình ảnh và tệp file trên đám mây giúp người dùng có thể coi lại hay gửi các file được

## Các ngôn ngữ, công nghệ sử dụng
> * Ngôn ngữ sử dụng: `JavaScrypt`
> * IDE sử dụng: `Visual Studio Code`
> * Công cụ lập trình giao diện: `ReactJS`
> * Cơ sở dữ liệu: `MongoDB`
> * Phần mềm quản lý dự án: `Git`, `Github`
> * Công cụ xây dựng và phát triển: `Vite`
## Yêu cầu hệ thống
> * Sử dụng `JDK 17` hoặc mới hơn
> * Sử dụng node.js phiên bản 14.x hoặc mới hơn
> * Sử dụng npm phiên bản 6.x hoặc mới hơn
> * Sử dụng và có tài khoản MongoDB
> * Sử dụng và có tài khoản cloundinary
> * Sử dụng Api dịch thuật của google
## Hướng dẫn cài đặt chương trình
> * **Bước 1:** Clone project [Real-Time-Chat-App](https://github.com/huynguyen12536/Real-Time-Chat-App.git)
> * **Bước 2:** Vào VScode chọn Open Folder và mở Folder vừa clone về.
> * **Bước 3:** Mở terminal và nhập các lệnh như sau :
> * **cd Server**
> * npm install
> * **Bước 4:** Mở terminal và nhập các lệnh như sau :
> * **cd  client**
> * npm install
> * **Bước 5:** Mở terminal và nhập các lệnh như sau :
> * **cd  socket**
> * npm install
> * **Bước 6:** Trong Folder Server có file .env hãy điền các biến môi trường vào đó để chạy chương trình. Tiến hành vào MongoDB trên web đăng nhập và vào một cum cluster và  tạo một DataBase với tên là WebCuoiKi, Tạo các Collection với tên tương ứng với các bảng ở trong file Real-Time-Chat-App/bd.txt và nhập link connect của MongoDB vào file .env trong folder server.Làm tương tự với cloundinary.
> * **Bước 5:** Tiến hành chạy chương trình bằng cách nhập các lệnh sau vào các termenal tương ứng với folder đó:
> * **cd ../Socket**
> * npm install
> * npm start
> * **cd ../client**
> * npm run dev
> * **cd ../Socket**
> * npm install
> * npm start
>* ***Note:** Xem file hướng dẫn dưới đây để hiểu rõ thêm: [File hướng dẫn chi tiết]()*
