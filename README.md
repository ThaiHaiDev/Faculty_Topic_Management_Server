# XÂY DỰNG TRANG WEB QUẢN LÝ ĐỀ TÀI KHOA CNTT

# Setup (updating...)

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

# Description (updating...)
<details>
<summary><b>English</b></summary><br />

Using technologies: NodeJS, Express, MongoDb, Mongoose, jwt-authentication, jwt-authorization

Updating...

***Currently the server is still being updated with the necessary functions, the update will be regularly updated here. Thank you!***
</details>

<details>
<summary><b>Vietnamese</b></summary><br />

Sử dụng các công nghệ: NodeJS, Express, MongoDb, Mongoose, jwt-authentication, jwt-authorization

Updating...

***Hiện tại server vẫn đang được tiếp tục update các chức năng cần thiết, phần cập nhật sẽ thường xuyên được update tại đây. Xin cảm ơn!***
</details>
<br />


# List API (updating...)

<details>
<summary><b>Register Account</b></summary><br />

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
<summary><b>Login Account</b></summary><br />

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
<summary><b>Logout Account</b></summary><br />

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
<summary><b>Get All Users</b></summary><br />

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
<summary><b>Get A User</b></summary><br />

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
<summary><b>Add User</b></summary><br />

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
<summary><b>Update User</b></summary><br />

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
<summary><b>Delete User</b></summary><br />

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
<summary><b>Get A User By Role Dean</b></summary><br />

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
<summary><b>Get A User By Role Lecturers</b></summary><br />

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
<summary><b>Get A User By Role Student</b></summary><br />

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
<summary><b>Get All Notications</b></summary><br />

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
<summary><b>Get A Notication</b></summary><br />

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
<summary><b>Add A Notication</b></summary><br />

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
<summary><b>Update A Notication</b></summary><br />

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
<summary><b>Delete A Notication</b></summary><br />

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
<summary><b>Get All TypeTopics</b></summary><br />

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
<summary><b>Get A TypeTopic</b></summary><br />

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
<summary><b>Add A TypeTopic</b></summary><br />

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
<summary><b>Update A TypeTopic</b></summary><br />

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
<summary><b>Delete A TypeTopic</b></summary><br />

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
<summary><b>Get All Specialized</b></summary><br />

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
<summary><b>Get A Specialized</b></summary><br />

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
<summary><b>Add A Specialized</b></summary><br />

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
<summary><b>Update A Specialized</b></summary><br />

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
<summary><b>Delete A Specialized</b></summary><br />

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
<summary><b>Get All Topics</b></summary><br />

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
<summary><b>Get A Topic</b></summary><br />

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
<summary><b>Add A Topic</b></summary><br />

- *POST: **api/v1/typetopic*** &nbsp; &nbsp; -- &nbsp; &nbsp;  **[content-type: application/json]** <br />
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
<summary><b>Update A Topic</b></summary><br />

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
<summary><b>Delete A Topic</b></summary><br />

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
<summary><b>1st Approval A Topic</b></summary><br />

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
<summary><b>2nd Approval A Topic</b></summary><br />

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
<summary><b>Get A Topic With Id User</b></summary><br />

</details>

# Message (updating...)

## Error
- Số lượng sinh viên quá giới hạn....
- User đã có nhóm...
- Approval 1st success...
- Approval 2nd success...

## Success
- Update success... &nbsp;(200)
- Delete success... &nbsp;(200)

## Auth
- Token is not valid &nbsp;(403)
- You're not authenticated &nbsp;(401)
- You're not allowed to delete orther... &nbsp;(403)
- User not found &nbsp;(404)
- Email already exists &nbsp;(500)
- Wrong Email... &nbsp;(404)
- Wrong Password... &nbsp;(404)
- Logged out success (200)
