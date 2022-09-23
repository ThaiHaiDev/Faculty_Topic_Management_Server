const Notication = require('../models/noti.model');

const notiController = {
    // GET ALL NOTIS
    async getAllNotis (req, res) {
        try {
            const noti = await Notication.find()
            res.status(200).json(noti)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET A NOTI
    async getANoti (req, res) {
        try {
            const noti = await Notication.findOne({slug: req.params.id})
            res.status(200).json(noti)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // ADD NOTI
    async addNoti(req, res) {
        try{
            const formData = req.body
            const newNoti = new Notication(formData)
            const saveCate = await newNoti.save()
            res.status(200).json(saveCate)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    // DELETE NOTI
    async deleteNoti (req, res) {
        try {
            await Notication.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete success...")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // UPDATE TYPE TOPIC 
    async updateNoti (req, res) {
        try {
            const formData = req.body
            await Notication.updateOne({ _id: req.params.id }, formData) 
            res.status(200).json("Update success...")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = notiController