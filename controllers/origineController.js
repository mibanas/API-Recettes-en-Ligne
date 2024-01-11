const mongoose = require('mongoose')
const origine = require('../models/origineModel')


exports.getOgirines = async (req, res, next) => {

    try {
        const orgines = await origine.find()
        res.status(200).json(
            {
                success : true,
                data : orgines
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success : false,
                error : error
            }
        )
    }
}

exports.storeOrigine = async (req, res, next) => {

    const { name } = req.body
  
    try {
        const existingOrigine = await origine.findOne({ name });

        if (existingOrigine) {
            return res.status(400).json({
                success: true,
                message: 'Origine with the same name already exists'
            });
        }

        const addOrigone = await origine.create(
            {
                name
            })
        return res.status(201).json({
            success : true,
            message : 'Orgine added successfully',
            data : addOrigone
        })
    } catch (error) {
        res.status(500).json(
            {
                success : false,
                error : error.message
            }
        )
    }
}

exports.updateOrigine = async (req, res, next) => {
    const { name } = req.body
    const { id } = req.params

    if(!mongoose.isValidObjectId(id)) {
        return res.status(400).json({
            success: true,
            message: "id is not valid ! "
        })
    }

    try {
        const UpdateOrgines = await origine.findOneAndReplace({ _id : id }, {
            name : name
        })
        res.status(200).json(
            {
                success : true,
                data : UpdateOrgines
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success : false,
                error : error
            }
        )
    }
} 

exports.deleteOrigine = async (req, res, next) => {
    const { name } = req.body
    const { id } = req.params

    if(!mongoose.isValidObjectId(id)) {
        return res.status(400).json({
            success: true,
            message: "id is not valid ! "
        })
    }

    try {
        const UpdateOrgines = await origine.deleteOne({_id : id}, {
            name : name
        })
        if (UpdateOrgines.deletedCount === 0) {
            return res.status(404).json({
                success: true,
                message: 'Origine not found or already deleted'
            });
        }

        res.status(200).json(
            {
                success : true,
                data : UpdateOrgines,
                message : 'Origine deleted successfully'
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success : false,
                error : error
            }
        )
    }
}