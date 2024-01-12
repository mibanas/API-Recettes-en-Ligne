const mongoose = require('mongoose')
const origine = require('../models/origineModel')

exports.getOgirines = async (req, res, next) => {
    try {
        const orgines = await origine.find();

        if (orgines.length === 0) {
            // Aucune origine trouvée
            return res.status(404).json({
                success: true,
                message: 'Aucune origine trouvée'
            });
        }

        // Origines trouvées
        res.status(200).json({
            success: true,
            data: orgines
        });
    } catch (error) {
        // Erreur interne du serveur
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};


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
    const { name } = req.body;
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(400).json({
            success: false,
            message: "id is not valid!"
        });
    }

    try {
        const updatedOrigine = await origine.findOneAndUpdate(
            { _id: id },
            { name: name },
            { new: true } // Cette option renvoie le document mis à jour
        );

        if (!updatedOrigine) {
            return res.status(404).json({
                success: false,
                message: 'Origine not found'
            });
        }

        res.status(200).json({
            success: true,
            data: updatedOrigine
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};


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