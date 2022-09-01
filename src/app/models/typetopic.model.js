const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TypeTopicSchema = new Schema({
    name: { type: String },
    desc: { type: String},
    deleted: { type: String },
  }, {
    timestamps: true
  });

module.exports = mongoose.model('TypeTopic', TypeTopicSchema);