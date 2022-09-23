const Specialized = require('../models/specialized.model');

const specializedController = {
    // GET ALL Specialized
    async getAllSpecializeds (req, res) {
        try {
            const spec= await Specialized.find()
            res.status(200).json(spec)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET A Specialized
    async getASpecialized (req, res) {
        try {
            const spec = await Specialized.findOne({slug: req.params.id})
            res.status(200).json(spec)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // ADD Specialized
    async addSpecialized(req, res) {
        try{
            const formData = req.body
            const newspec = new Specialized(formData)
            const saveCate = await newspec.save()
            res.status(200).json(saveCate)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    // DELETE Specialized
    async deleteSpecialized (req, res) {
        try {
            await Specialized.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete success...")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // UPDATE Specialized
    async updateSpecialized (req, res) {
        try {
            const formData = req.body
            await Specialized.updateOne({ _id: req.params.id }, formData) 
            res.status(200).json("Update success...")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = specializedController