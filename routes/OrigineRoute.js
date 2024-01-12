const express = require('express')
const routes = express.Router()
const { getOgirines, storeOrigine, updateOrigine, deleteOrigine } = require('../controllers/origineController')


routes.get('/', getOgirines)

/**
 * @swagger
 * tags:
 *   name: Origines
 *   description: Endpoints pour la gestion des origines
 */

/**
 * @swagger
 * /origines:
 *   get:
 *     summary: Récupérer toutes les origines
 *     description: Retourne la liste complète des origines enregistrées.
 *     responses:
 *       '200':
 *         description: Opération réussie
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 - _id: 1
 *                   name: Origine 1
 *                 - _id: 2
 *                   name: Origine 2
 *       '404':
 *         description: Aucune origine trouvée
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Aucune origine trouvée
 *       '500':
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               error: Erreur interne du serveur
*/

routes.post('/', storeOrigine)

/**
 * @swagger
 * /origines:
 *   post:
 *     summary: Ajouter une nouvelle origine
 *     description: Crée une nouvelle origine avec le nom fourni.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Nouvelle Origine
 *     responses:
 *       '201':
 *         description: Origine ajoutée avec succès
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Origine ajoutée avec succès
 *               data:
 *                 _id: 3
 *                 name: Nouvelle Origine
 *       '400':
 *         description: Origine avec le même nom existe déjà
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Origine avec le même nom existe déjà
 *       '500':
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               error: Erreur interne du serveur
 */



routes.put('/:id', updateOrigine)

/**
 * @swagger
 * /origines/{id}:
 *   put:
 *     summary: Mettre à jour une origine existante
 *     description: Met à jour le nom d'une origine existante en utilisant l'ID fourni.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'origine à mettre à jour
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Nouveau Nom Origine
 *     responses:
 *       '200':
 *         description: Origine mise à jour avec succès
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 _id: 1
 *                 name: Nouveau Nom Origine
 *       '400':
 *         description: ID non valide
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: ID non valide
 *       '500':
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               error: Erreur interne du serveur
 */


routes.delete('/:id', deleteOrigine)

/**
 * @swagger
 * /origines/{id}:
 *   delete:
 *     summary: Supprimer une origine existante
 *     description: Supprime une origine existante en utilisant l'ID fourni.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'origine à supprimer
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Origine supprimée avec succès
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               data:
 *                 n: 1
 *                 ok: 1
 *                 deletedCount: 1
 *               message: Origine supprimée avec succès
 *       '404':
 *         description: Origine introuvable ou déjà supprimée
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: Origine introuvable ou déjà supprimée
 *       '400':
 *         description: ID non valide
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: ID non valide
 *       '500':
 *         description: Erreur interne du serveur
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               error: Erreur interne du serveur
 */


module.exports = routes