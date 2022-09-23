const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const mongooseLeanVirtuals = require('mongoose-lean-virtuals');
// const { USER } = require('../../config/constants')

const TopicSchema = new Schema({
    name: { type: String, required: true },
    desc: { type: String},
    target: { type: String },
    product: { type: String }, // App or web, ...
    technology: { type: String },
    requirement: { type: String },
    idSpecialized: { type: mongoose.Schema.Types.ObjectId, ref: 'Specialized' },  // Chuyen nganh
    typeTopic:  { type: mongoose.Schema.Types.ObjectId, ref: 'TypeTopic' }, // TLCN or KLTN
    status: { type: String, default: 'duyet0' }, //Enum duyet 1, duyet 2
    sesmeter: { type: String },
    slsv: { type: Number }, // Truong nhom nhap sl sv cua nhom
    leader: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    gvhd: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    gvpb: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    score: { type: String },
    team: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        }
    ],
    deleted: { type: Boolean }
  }, {
    timestamps: true
  });



module.exports = mongoose.model('Topic', TopicSchema);