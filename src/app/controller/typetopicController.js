const TypeTopic = require('../models/typetopic.model');

const typeTopicController = {
    // GET ALL TYPETOPIC
    async getAllTypeTopics (req, res) {
        try {
            const types = await TypeTopic.find()
            res.status(200).json(types)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET A TYPETOPIC
    async getATypeTopic (req, res) {
        try {
            const type = await TypeTopic.findOne({slug: req.params.id})
            res.status(200).json(type)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // ADD TYPETOPIC
    async addTypeTopic(req, res) {
        try{
            const formData = req.body
            const newTypeTopic = new TypeTopic(formData)
            const saveCate = await newTypeTopic.save()
            res.status(200).json(saveCate)
        } catch(err) {
            res.status(500).json(err)
        }
    },

    // DELETE TYPE TOPIC 
    async deleteTypeTopic (req, res) {
        try {
            await TypeTopic.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete success...")
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // UPDATE TYPE TOPIC 
    async updateTypeTopic (req, res) {
        try {
            const formData = req.body
            await TypeTopic.updateOne({ _id: req.params.id }, formData) 
            res.status(200).json("Update success...")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = typeTopicController