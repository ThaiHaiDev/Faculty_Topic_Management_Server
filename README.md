# XÂY DỰNG TRANG WEB QUẢN LÝ ĐỀ TÀI KHOA CNTT

# Setup 

<details>
<summary><b>English</b></summary><br />

- Prepare the environment variables as follows
	|Variable name              |Obligatory |Description                                                                                     |Default        |
	|----------------------|---------|------------------------------------------------------------------------------------------|----------------|
	|PORT                  |❌       |Port to listen to (listen) server api                                                    |3001            |
	|MONGO_URI             |✔       |Connection string to connect to MongoDb                                              |                |
	|JWT_ACCESS_KEY            |✔       |Secret key, used in Json Web token (accessToken)                                     |                |
	|JWT_REFRESH_KEY       |✔       |Secret key, used in Json Web token (refreshToken)                             |                |
</details>

<details>
<summary><b>Vietnamese</b></summary><br />

- Chuẩn bị các biến môi trường như sau
	|Tên biến              |Bắt buộc |Mô tả                                                                                     |Mặc định        |
	|----------------------|---------|------------------------------------------------------------------------------------------|----------------|
	|PORT                  |❌       |Port để listen (lắng nghe) server api                                                     |3001            |
	|MONGO_URI             |✔       |Connection string để kết nối tới MongoDb                                                  |                |
	|JWT_ACCESS_KEY            |✔       |Khóa bí mật (secret key), dùng trong Json Web token (accessToken)                                     |                |
	|JWT_REFRESH_KEY       |✔       |Khóa bí mật (secret key), dùng trong Json Web token (refreshToken)                             |                |
</details>
<br />

# Description
<details>
<summary><b>English</b></summary><br />

Using technologies: NodeJS, Express, MongoDb, Mongoose, jwt-authentication, jwt-authorization

The website includes 3 rights, helping students register a topic name and choose a guide, the topic will be approved by the teacher for the first time and transferred to the dean for final approval.
3 rights:
-	Dean:
    + The person who reviews the title of the topic.
    + CRUD has full rights to teacher, student, and topic accounts.
    + Dean will review the final topic.
    + Statistics

- Instructor guides:
    + Each lecturer has a maximum of 8 student groups (per term),
    + Each group has a maximum of 3 students, lecturers have CRUD rights on each registered group.
    + The lecturer reviews the topic and will send it to the Dean for final approval. Once approved, the topic can still be deleted, but once the dean has approved it, the topic cannot be deleted.
    + The lecturer has the right to CRUD with the topic of the student group.

-	Student:
    + Each student can choose 1 instructor, students can only be in a group with 3 members, students who already have a group mean that they have already registered the topic, they cannot register the topic themselves.
    + When registering, students fill in the information of group members.
    + Students can manipulate to register the topic name. Students have the right to delete the registered topic name.

Constraint:
* When the topic has not been approved, only the group leader has the right to update and delete the topic.
* When the topic is approved for the first time (approved by the lecturer), students are no longer allowed to update and delete the topic (even as the group leader). But now only lecturers (lecturers who are not of that topic also have no rights) or deans have the right.
* When the topic is approved (approved by the Dean), neither the student nor the lecturer has the right to update and delete.

Updating...

***Currently the server is still being updated with the necessary functions, the update will be regularly updated here. Thank you!***
</details>

<details>
<summary><b>Vietnamese</b></summary><br />

Sử dụng các công nghệ: NodeJS, Express, MongoDb, Mongoose, jwt-authentication, jwt-authorization

Trang web bao gồm 3 quyền, giúp sinh viên đăng ký tên đề tài và chọn giáo viên hướng dẫn, đề tài sẽ được giáo viên chấp thuận phê duyệt lần 1 và chuyển đến trưởng khoa để chốt tên đề tài qua việc phê duyệt cuối. 
3 quyền:
-	Trưởng khoa: 
    + Người xét duyệt tên đề tài. 
    + CRUD toàn quyền với tài khoản giáo viên, sinh viên, đề tài. 
    + Trưởng khoa sẽ xét duyệt đề tài cuối cùng. 
    + Thống kê

-	Giảng viên hướng dẫn: 
    + Mỗi giảng viên có tối đa 8 nhóm sinh viên (mỗi kì), 
    + Mỗi nhóm tối đa 3 sinh viên, giảng viên có quyền CRUD trên mỗi nhóm đăng kí. 
    + Giảng viên xét duyệt đề tài và sẽ gửi lên trưởng khoa xuyết duyệt cuối. Khi đã duyệt thì vẫn được xóa đề tài, nhưng khi trưởng khoa đã duyệt thì không được xóa đề tài. 
    + Giảng viên có quyền CRUD với đề tài của nhóm sinh viên.

-	Sinh viên: 
    + Mỗi sinh viên được chọn 1 giảng viên hướng dẫn, sinh viên chỉ được nằm trong 1 nhóm có 3 thành viên, sinh viên đã có nhóm là đồng nghĩa đã đăng ký đề tài, không thể tự đăng ký đề tài tiếp. 
    + Khi đăng kí, sinh viên điền thông tin các thành viên trong nhóm. 
    + Sinh viên có thể thao tác đăng kí tên đề tài. Sinh viên có quyền xóa tên đề tài đăng kí.


Ràng buộc: 
* Khi đề tài chưa được phê duyệt thì chỉ có trưởng nhóm có quyền cập nhật và xóa đề tài.
* Khi đề tài được duyệt lần 1 (do giảng viên duyệt) thì sinh viên không còn được quyền cập nhật và xóa đề tài (cho dù là trưởng nhóm). Mà giờ chỉ có giảng viên (giảng viên không phải của đề tài đó cũng không có quyền) hoặc trưởng khoa có quyền.
* khi đề tài được thông qua (do trưởng khoa duyệt) thì cả sinh viên và giảng viên đều không có quyền cập nhật và xóa. 

Updating...

***Hiện tại server vẫn đang được tiếp tục update các chức năng cần thiết, phần cập nhật sẽ thường xuyên được update tại đây. Xin cảm ơn!***
</details>
<br />


# List API (updating...)

<details>
<summary><b>Register Account &nbsp; &nbsp; ( &nbsp;Đăng ký tài khoản &nbsp;)</b></summary><br />

- *POST: **api/v1/register*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | firstName  | string | true    |
    | lastName  | string | true    |
    | email  | string | true    |
    | mssv  | string | true    |
    | password  | string | true    | 
    | avatar  | string | false    |
    | phone  | string | true    |
    | address  | string | false    |
    | active  | boolean | false    |
    | role  | string | default student    |
    | isTeam  | boolean | false    |

- Response:
```json
{
    "_id": "62ff067d2a6f2d35b72be673",
    "firstName": "Hai",
    "lastName": "Nguyen",
    "email": "admin@gmail.com",
    "mssv": "19110356",
    "role": "student",
    "createdAt": "2022-08-19T03:41:49.494Z",
    "updatedAt": "2022-08-19T03:41:49.494Z",
    "__v": 0,
}
```
</details>

<details>
<summary><b>Login Account &nbsp; &nbsp; ( &nbsp;Đăng nhập tài khoản &nbsp;)</b></summary><br />

- *POST: **api/v1/login*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | email  | string | true    |
    | password  | string | true    | 

- Response:
```json
{
    "_id": "62ff067d2a6f2d35b72be673",
    "firstName": "Hai",
    "lastName": "Nguyen",
    "email": "admin@gmail.com",
    "mssv": "19110356",
    "role": "student",
    "createdAt": "2022-08-19T03:41:49.494Z",
    "updatedAt": "2022-08-19T03:41:49.494Z",
    "__v": 0,
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmYwNjdkMmE2ZjJkMzViNzJiZTY3MyIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjYwOTAwNDEyLCJleHAiOjE2NjA5MDA0NDJ9.eL8hG06zfvY_aIWfb6uMFtPccNcjj-NYfFpxYoE5v-k",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmYwNjdkMmE2ZjJkMzViNzJiZTY3MyIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjYwOTAwNDEyLCJleHAiOjE2NjA5MDE0MTJ9.Llr9MuSPvRRWhWON1AJnRMSFz457H1ucjWv-_zwWGwc"
}
```
   ==> `refreshToken is saved in the returned cookie with the key refreshToken`
</details>

<details>
<summary><b>Refresh Token</b></summary><br />

- *POST: **api/v1/refresh*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[Cookie] : refreshToken**
- Request: null

- Response:
```json
{
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmYwNjdkMmE2ZjJkMzViNzJiZTY3MyIsImFkbWluIjp0cnVlLCJpYXQiOjE2NjEyMjY1NzQsImV4cCI6MTY2MTIyNjg3NH0.MbnNR9XEA9UKiDbniZK8Uuoff4W7FlHNzTDowmYiETw"
}
```
</details>

<details>
<summary><b>Logout Account &nbsp; &nbsp; ( &nbsp;Đăng xuất tài khoản &nbsp;)</b></summary><br />

- *POST: **api/v1/logout*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: Null

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Get All Users &nbsp; &nbsp; ( &nbsp;Lấy thông tin tất cả user &nbsp;)</b></summary><br />

- *GET: **api/v1/user*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: Null

- Response:
```json
{
    {
        "Info user 1": ""
    },
    {
        "Info user 2": ""
    }
}
```
</details>

<details>
<summary><b>Get A User &nbsp; &nbsp; ( &nbsp;Lấy thông tin 1 user bất kỳ &nbsp;)</b></summary><br />

- *GET: **api/v1/user/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: Null

- Response:
```json
{
    "Info user": ""
}
```
</details>

<details>
<summary><b>Add User &nbsp; &nbsp; ( &nbsp;Thêm user mới &nbsp;)</b></summary><br />

- *POST: **api/v1/user*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | firstName  | string | true    |
    | lastName  | string | true    |
    | email  | string | true    |
    | mssv  | string | true    |
    | password  | string | true    | 
    | avatar  | string | false    |
    | phone  | string | true    |
    | address  | string | false    |
    | active  | boolean | false    |
    | role  | string | default student    |
    | isTeam  | boolean | false    |

- Response:
```json
{
    "firstName": "Hai Test",
    "lastName": "Nguyen",
    "email": "admin@gmail.com",
    "mssv": "19110356",
    "role": "student",
    "phone": "14522",
    "_id": "630494af24f33a4ee5cc2340",
    "createdAt": "2022-08-23T08:49:51.091Z",
    "updatedAt": "2022-08-23T08:49:51.091Z",
    "__v": 0
}
```
</details>

<details>
<summary><b>Update User &nbsp; &nbsp; ( &nbsp;Cập nhật thông tin user &nbsp;)</b></summary><br />

- *PUT: **api/v1/user/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | firstName  | string | true    |
    | lastName  | string | true    |
    | email  | string | true    |
    | mssv  | string | true    |
    | password  | string | true    | 
    | avatar  | string | false    |
    | phone  | string | true    |
    | address  | string | false    |
    | active  | boolean | false    |
    | role  | string | default student    |

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Delete User &nbsp; &nbsp; ( &nbsp;Xóa tài khoản user &nbsp;)</b></summary><br />

- *DELETE: **api/v1/user/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Get A User By Role Dean &nbsp; &nbsp; ( &nbsp;Lấy tất cả user có quyền là trưởng khoa &nbsp;)</b></summary><br />

- *GET: **api/v1/user/dean*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: Null

- Response:
```json
{
    {
        "Info user 1": ""
    },
    {
        "Info user 2": ""
    }
}
```
</details>

<details>
<summary><b>Get A User By Role Lecturers &nbsp; &nbsp; ( &nbsp;Lấy tất cả user có quyền là giảng viên &nbsp;)</b></summary><br />

- *GET: **api/v1/user/lecturers*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: Null

- Response:
```json
{
    {
        "Info user 1": ""
    },
    {
        "Info user 2": ""
    }
}
```
</details>

<details>
<summary><b>Get A User By Role Student &nbsp; &nbsp; ( &nbsp;Lấy tất cả user có quyền là sinh viên &nbsp;)</b></summary><br />

- *GET: **api/v1/user/student*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: Null

- Response:
```json
{
    {
        "Info user 1": ""
    },
    {
        "Info user 2": ""
    }
}
```
</details>

<details>
<summary><b>Get All Notications &nbsp; &nbsp; ( &nbsp;Lấy tất cả thông tin của thông báo &nbsp;)</b></summary><br />

- *GET: **api/v1/noti*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    {
        "Info noti 1": ""
    },
    {
        "Info noti 2": ""
    }
}
```
</details>

<details>
<summary><b>Get A Notication &nbsp; &nbsp; ( &nbsp;Lấy thông tin 1 thông báo bất kỳ &nbsp;)</b></summary><br />

- *GET: **api/v1/noti/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "Info noti": ""
}
```
</details>

<details>
<summary><b>Add A Notication &nbsp; &nbsp; ( &nbsp;Thêm thông báo mới &nbsp;)</b></summary><br />

- *POST: **api/v1/noti*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | header  | string | true    |
    | infomation  | string | true    |
    | deleted  | string | false    |

- Response:
```json
{
    "infoCateNoti": {}
}
```
</details>

<details>
<summary><b>Update A Notication &nbsp; &nbsp; ( &nbsp;Cập nhật thông báo &nbsp;)</b></summary><br />

- *PUT: **api/v1/noti/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | header  | string | true    |
    | infomation  | string | true    |
    | deleted  | string | false    |

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Delete A Notication &nbsp; &nbsp; ( &nbsp;Xóa thông báo &nbsp;)</b></summary><br />

- *DELETE: **api/v1/noti/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "message": ""
}
```
</details>


<details>
<summary><b>Get All TypeTopics &nbsp; &nbsp; ( &nbsp;Lấy tất cả thông tin các loại đề tài &nbsp;)</b></summary><br />

- *GET: **api/v1/typetopic*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
[
     {
        "Info typetopic 1": ""
    },
    {
        "Info typetopic 2": ""
    }
]
```
</details>

<details>
<summary><b>Get A TypeTopic &nbsp; &nbsp; ( &nbsp;Lấy thông tin 1 loại đề tài bất kỳ &nbsp;)</b></summary><br />

- *GET: **api/v1/typetopic/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "Info typetopic": {}
}
```
</details>

<details>
<summary><b>Add A TypeTopic &nbsp; &nbsp; ( &nbsp;Thêm mới loại đề tài &nbsp;)</b></summary><br />

- *POST: **api/v1/typetopic*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | name  | string | true    |
    | desc  | string | false    |
    | deleted  | string | false    |

- Response:
```json
{
    "infoTypeTopicNew": {}
}
```
</details>

<details>
<summary><b>Update A TypeTopic &nbsp; &nbsp; ( &nbsp;Cập nhật loại đề tài &nbsp;)</b></summary><br />

- *PUT: **api/v1/typetopic/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | name  | string | true    |
    | desc  | string | false    |
    | deleted  | string | false    |

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Delete A TypeTopic &nbsp; &nbsp; ( &nbsp;Xóa loại đề tài &nbsp;)</b></summary><br />

- *DELETE: **api/v1/typetopic/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Get All Specialized &nbsp; &nbsp; ( &nbsp;Lấy tất cả thông tin chuyên ngành của khoa &nbsp;)</b></summary><br />

- *GET: **api/v1/specialized*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
[
     {
        "Info specialized 1": ""
    },
    {
        "Info specialized 2": ""
    }
]
```
</details>

<details>
<summary><b>Get A Specialized &nbsp; &nbsp; ( &nbsp;Lấy thông tin 1 chuyên ngành bất kỳ &nbsp;)</b></summary><br />

- *GET: **api/v1/specialized/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "Info specialized": {}
}
```
</details>

<details>
<summary><b>Add A Specialized &nbsp; &nbsp; ( &nbsp;Thêm mới chuyên ngành &nbsp;)</b></summary><br />

- *POST: **api/v1/specialized*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | name  | string | true    |
    | desc  | string | false    |
    | deleted  | string | false    |

- Response:
```json
{
    "infoTypeTopicNew": {}
}
```
</details>

<details>
<summary><b>Update A Specialized &nbsp; &nbsp; ( &nbsp;Cập nhật thông tin chuyên ngành &nbsp;)</b></summary><br />

- *PUT: **api/v1/specialized/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | name  | string | true    |
    | desc  | string | false    |
    | deleted  | string | false    |

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Delete A Specialized &nbsp; &nbsp; ( &nbsp;Xóa chuyên ngành &nbsp;)</b></summary><br />

- *DELETE: **api/v1/specialized/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Get All Topics &nbsp; &nbsp; ( &nbsp;Lấy tất cả thông tin của các đề tài &nbsp;)</b></summary><br />

- *GET: **api/v1/topic*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
[
     {
        "Info topic 1": ""
    },
    {
        "Info topic 2": ""
    }
]
```
</details>

<details>
<summary><b>Get A Topic &nbsp; &nbsp; ( &nbsp;Lấy thông tin 1 đề tài bất kỳ &nbsp;)</b></summary><br />

- *GET: **api/v1/topic/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "Info topic": {}
}
```
</details>

<details>
<summary><b>Add A Topic &nbsp; &nbsp; ( &nbsp;Thêm mới đề tài &nbsp;)</b></summary><br />

- *POST: **api/v1/topic*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | name  | string | true    |
    | desc  | string | false    |
    | target  | string | false    |
    | product  | string | false    |
    | technology  | string | false    |
    | requirement  | string | false    |
    | idSpecialized  | string | false    |
    | typeTopic  | string | false    |
    | status  | string | false    |
    | sesmeter  | number | false    |
    | slsv  | string | false    |
    | leader  | string | false    |
    | gvhd  | string | false    |
    | gvpb  | string | false    |
    | score  | string | false    |
    | team  | array | false    |
    | deleted  | boolean | false    |

- Response:
```json
{
    "name": "Xây dựng Website UTEX",
    "desc": "Trang web giúp cho sinh viên học tập và lấy tài liệu từ giáo viên bộ môn.",
    "target": "Tìm hiểu về .Net và Anguler",
    "product": "Web",
    "technology": "Anguler, .Net",
    "idSpecialized": "632d6f527669a9e960db1b8a",
    "typeTopic": "632d246c4284ba88ff521e21",
    "status": "duyet0",
    "sesmeter": "1",
    "slsv": 3,
    "leader": "632034182674568e23832f4b",
    "gvhd": "6320380c735c7749d1ea7349",
    "team": [
        "632034182674568e23832f4b",
        "63203c858eddcf04700e33ed"
    ],
    "_id": "632db676bb21c7e76fe1f738",
    "createdAt": "2022-09-23T13:36:54.327Z",
    "updatedAt": "2022-09-23T13:36:54.327Z",
    "__v": 0
}
```
</details>

<details>
<summary><b>Update A Topic &nbsp; &nbsp; ( &nbsp;Cập nhật thông tin đề tài &nbsp;)</b></summary><br />

- *PUT: **api/v1/topic/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request:
    | params    | type   | require |
    | ---       | ---    | ---     |
    | name  | string | true    |
    | desc  | string | false    |
    | target  | string | false    |
    | product  | string | false    |
    | technology  | string | false    |
    | requirement  | string | false    |
    | idSpecialized  | string | false    |
    | typeTopic  | string | false    |
    | status  | string | false    |
    | sesmeter  | number | false    |
    | slsv  | string | false    |
    | leader  | string | false    |
    | gvhd  | string | false    |
    | gvpb  | string | false    |
    | score  | string | false    |
    | team  | array | false    |
    | deleted  | boolean | false    |

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Delete A Topic &nbsp; &nbsp; ( &nbsp;Xóa đề tài &nbsp;)</b></summary><br />

- *DELETE: **api/v1/topic/:id*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>1st Approval A Topic &nbsp; &nbsp; ( &nbsp;Phê duyệt đề tài lần 1 dành cho giảng viên &nbsp;)</b></summary><br />

- *PATCH: **api/v1/topic/:id/1st*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>2nd Approval A Topic &nbsp; &nbsp; ( &nbsp;Phê duyệt đề tài lần 2 dành cho trưởng khoa &nbsp;)</b></summary><br />

- *PATCH: **api/v1/topic/:id/2nd*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "message": ""
}
```
</details>

<details>
<summary><b>Get A Topic With Id User &nbsp; &nbsp; ( &nbsp;Lấy chi tiết đề tài đã đăng ký của user nào đó &nbsp;)</b></summary><br />

- *GET: **api/v1/user/topic/:idUser*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "Info topic": {}
}
```

</details>

<details>
<summary><b>GET USER IN TEAM WITH IDUSER &nbsp; &nbsp; ( &nbsp;Lấy các user trong cùng nhóm đề tài đã đăng ký &nbsp;)</b></summary><br />

- *GET: **api/v1/user/member/:idUser*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
[
    "Info user 1 in team": {},
    "Info user 2 in team": {}
]
```
</details>

<details>
<summary><b>GET ALL TOPIC NOT APPROVAL WITH IDGVHD &nbsp; &nbsp; ( &nbsp;Lấy các đề tài chưa phê duyệt tương ứng với id của từng giảng viên &nbsp;)</b></summary><br />

- *GET: **api/v1/topic/notapproval/:idGvhd*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "Info topic": {}
}
```
</details>

<details>
<summary><b>GET ALL TOPIC WITH IDGVHD &nbsp; &nbsp; ( &nbsp;Lấy tất cả các đề tài tương ứng với id của từng giảng viên &nbsp;)</b></summary><br />

- *GET: **api/v1/topic/alltopicofgvhd/:idGvhd*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "Info topic": {}
}
```
</details>

<details>
<summary><b>GET ALL TOPIC APPROVAL 1ST&nbsp; &nbsp; ( &nbsp;Lấy các đề tài đã được giảng viên thông qua nhưng chưa được trưởng khoa xem xét &nbsp;)</b></summary><br />

- *GET: **api/v1/topic/approval1st*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "Info topic": {}
}
```
</details>

<details>
<summary><b>GET ALL TOPIC APPROVED&nbsp; &nbsp; ( &nbsp;Lấy các đề tài đã thông qua do trưởng khoa phê duyệt &nbsp;)</b></summary><br />

- *GET: **api/v1/topic/approved*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "Info topic": {}
}
```
</details>

<details>
<summary><b>GET ALL TEAM OF GVHD&nbsp; &nbsp; ( &nbsp;Lấy thông tin các nhóm đã đăng ký của 1 giảng viên kèm leader của nhóm &nbsp;)</b></summary><br />

- *GET: **api/v1/user/team/:idGvhd*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
- Headers: &nbsp; **[token] : Bearer {accessToken}**
- Request: null

- Response:
```json
{
    "leader": {},
    "teams": []
}
```
</details>

# Message

## 400
- User chưa đăng ký đề tài
- User không có nhóm
- User đã có nhóm
- Giảng viên chưa có đề tài nào cần duyệt
- Số lượng sinh viên quá giới hạn
- Giảng viên đã đủ nhóm đăng kí
- Đề tài đã được duyệt trước đó
- Đề tài cần được thông qua bởi giảng viên
- Bạn không phải là gvhd của đề tài này
- Đề tài này đã được trưởng khoa thông qua
- Bạn không phải trưởng nhóm
- Đề tài này đã được gvhd thông qua

## 401
- You're not authenticated

## 403
- Token is not valid
- You're not allowed to delete orther
- You're not allowed to orther

## 404
- Email đăng nhập không tồn tại
- Mật khẩu không chính xác
- Tài khoản đã tồn tại
- Không tìm thấy user

## Success
- Logout thành công
- Phê duyệt lần 1 thành công
- Đề tài được thông qua
- Xóa thành công
- Cập nhật thành công

