const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NotiSchema = new Schema({
    header: { type: String },
    infomation: { type: String},
    deleted: { type: String },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Noti', NotiSchema);