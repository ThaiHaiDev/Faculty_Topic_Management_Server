const ErrorCode = {
    // 404
    EMAIL_INVALID : {
        code: "40400001", 
        message: "Email đăng nhập không tồn tại"
    },
    INVALID_CHANGE_PASSWORD : {
        code: "40400002", 
        message: "Mật khẩu không chính xác"
    },
    USERNAME_EXIST : {
        code: "40400003", 
        message: "Tài khoản đã tồn tại"
    },
    USER_NOT_FOUND : {
        code: "40400004", 
        message: "Không tìm thấy user"
    },

    // 401
    NOT_AUTHENTICATED : {
        code: "40100001", 
        message: "You're not authenticated"
    },

    // 400
    USER_NOT_REGISTER_TOPIC: {
        code: "40000001", 
        message: "User chưa đăng ký đề tài"
    },
    USER_NOT_TEAM: {
        code: "40000002", 
        message: "User không có nhóm"
    },
    USER_NOT_TEAM: {
        code: "40000003", 
        message: "User không có nhóm"
    },
    USER_IS_TEAM: {
        code: "40000004", 
        message: "User đã có nhóm"
    },
    USERGV_NOT_TOPIC_APPROVAL: {
        code: "40000005", 
        message: "Giảng viên chưa có đề tài nào cần duyệt"
    },
    LIMITED_USER_REGISTER_TOPIC: {
        code: "40000006", 
        message: "Số lượng sinh viên quá giới hạn"
    },
    USERGV_FULL_SLOT_REGISTER: {
        code: "40000007", 
        message: "Giáo viên đã đủ nhóm đăng kí"
    },
    TOPIC_APPROVED: {
        code: "40000008", 
        message: "Đề tài đã được duyệt trước đó"
    },
    TOPIC_NOT_APPROVAL: {
        code: "40000009", 
        message: "Đề tài cần được thông qua bởi giảng viên"
    },


    // Success
    LOGOUT : {
        message: 'Logout thành công'
    },
    APPROVAL1ST : {
        message: 'Phê duyệt lần 1 thành công'
    },
    APPROVAL2ND : {
        message: 'Đề tài được thông qua'
    }
    

}

module.exports = ErrorCode