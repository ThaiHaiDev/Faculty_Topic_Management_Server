const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
const { USER } = require('../../config/constants')

const UserSchema = new Schema({
    firstName: { type: String, trim: true, required: true, minLength: 3, maxLength: 30 },
    lastName: { type: String, trim: true, required: true, minLength: 3, maxLength: 50 },
    email: { type: String, maxlength: 255, required: true, unique: true, trim: true },
    mssv: { type: String, maxLength: 9, required: true, unique: true },
    password: { type: String, maxlength: 255, required: true, trim: true },
    role: {
      type: String,
      enum: Object.values(USER.ROLE),
      default: USER.ROLE.STUDENT,
      required: true
    },
    phone: { type: String, trim: true},
    address: { type: String, trim: true},
    active: { type: Boolean, default: true },
    avatar: { type: String }
  }, {
    timestamps: true
  });



module.exports = mongoose.model('User', UserSchema);