const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
// const { USER } = require('../../config/constants')

const SpecializedSchema = new Schema({
    name: { type: String },
    desc: { type: String},
    deleted: { type: String }
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Specialized', SpecializedSchema);