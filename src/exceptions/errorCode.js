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

    // 401
    NOT_AUTHENTICATED : {
        code: "40100001", 
        message: "You're not authenticated"
    },

    // Success
    LOGOUT : {
        message: 'Logout thành công'
    },
    APPROVAL1ST : {
        message: 'Phê duyệt lần 1 thành công'
    }
    

}

module.exports = ErrorCode