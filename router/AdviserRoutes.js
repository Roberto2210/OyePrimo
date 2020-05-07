const express = require('express');
const router = express.Router();

const AdvisersController = require('../controller/AdvisersController');



// CREATE
router.post('/advisers', AdvisersController.create);

// GET (ALL)
router.get('/advisers', AdvisersController.find);

// GET (ONE)
router.get('/advisers/:id', AdvisersController.findById);

// UPDATE
router.patch('/advisers/:id', AdvisersController.findByIdAndUpdate);

// DELETE
router.delete('/advisers/:id', AdvisersController.findByIdAndDelete);

module.exports = router;