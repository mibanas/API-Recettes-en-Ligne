const mongoose = require('mongoose')

const plats = require('../models/platModel')
const origines = require('../models/origineModel')

exports.getPlats = async (req, res, next) => {
    try {
        const allPlats = await plats.find().populate('origine')
        res.status(200).json({
            success : true,
            data : allPlats
        })
        
    } catch (error) {
        res.status(500).json(
            { 
                success : false,
                error : error
            })
    }   
}

exports.storePlat = async (req, res, next) => {

    const { nom, origine , ingredients, popularite, image} = req.body
    try {

        const existingPlat = await plats.findOne({ nom });

        if (existingPlat) {
            return res.status(400).json({
                success: false,
                message: 'Plate with the same name already exists'
            });
        }

        try {
            const originePlat = await origines.find({name : origine})
            const storePlat = await plats.create({
                nom : nom,
                origine: originePlat[0]._id,
                ingredients : ingredients,
                popularite : popularite,
                image : image
            })
            res.status(201).json({
                success : true,
                data : storePlat 
            })
        } catch (error) {
            res.status(500).json(
                {
                    success : false,
                    error : error,
                    message: 'Origine not exists'
                }
            )
        }
        
    } catch (error) {
        res.status(500).json(
            {
                success : false,
                error : error.message
            }
        )
    }
}

exports.deletePlat = async (req, res, next) => {
    const id  = req.params.id
    
    if(!mongoose.isValidObjectId(id)) {
        return res.status(400).json({
            success: false,
            message: "id is not valid ! "
        })
    }

    try {
        const deleteOgirine = await plats.deleteOne({_id: id})
        if (deleteOgirine.deletedCount === 0) {
            return res.status(404).json(
                {
                    success : true,
                    message: 'Plate not found or already deleted'
                }
            )
        }
        res.status(200).json(
            {
                success : true,
                data : deleteOgirine,
                message: 'Plate deleted successfully'
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success : false,
                error : error.message
            }
        )
    }
}

exports.updateplat = async (req, res, next) => {
    const { nom, origine , ingredients, popularite, image} = req.body
    const id = req.params.id 

    if(!mongoose.isValidObjectId(id)) {
        return res.status(404).json({
            success : true,
            message : 'Id is not valide'
        })
    }

    const updateData = {};
        
    if (nom) updateData.nom = nom;
    if (origine) updateData.origine = origine;
    if (ingredients) updateData.ingredients = ingredients;
    if (popularite) updateData.popularite = popularite;
    if (image) updateData.image = image;

    try {
        try {
            const checkPlat = await plats.findById({_id : id})
            if(!checkPlat) {
                return res.status(404).json({
                    success : true,
                    message : 'Id not found !'
                })
            }
            const updatePlat = await plats.findByIdAndUpdate(id, updateData, { new: true })

            return res.status(200).json({
                success : true,
                message : 'Plat is updated successfully',
                data : updatePlat
            })

        } catch (error) {
            return res.status(500).json({
                success : false,
                message : error.message
            })
        }
    } catch (error) {
        return res.status(500).json({
            success : false,
            message : error.message
        })
    }
}

exports.getOnePlat = async (req, res, next) => {
    const id = req.params.id;

    if (!mongoose.isValidObjectId(id)) {
        return res.status(404).json({
            success: false,
            message: 'Id is not valid'
        });
    }

    try {
        const plat = await plats.findById({ _id : id});

        if (!plat) {
            return res.status(404).json({
                success: false,
                message: 'Plat not found!'
            });
        }

        return res.status(200).json({
            success: true,
            data: plat
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.platByOrigine = async (req, res, next) => {
    const { origineName } = req.params

    try {
        const idOrigine = await origines.find({ name : origineName})

        if (idOrigine.length === 0) {
            return res.status(404).json({
                success: true,
                message: `Origine Not Found !`
            })
        }

        const platByOrigine = await plats.find({origine : idOrigine[0]._id })

        if (platByOrigine.length === 0) {
            return res.status(404).json({
                success: true,
                message: `Any plat with these origine`
            })
        }   

        return res.status(200).json({
            success : true,
            data : platByOrigine  
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            error : error.message
        })
    }
}