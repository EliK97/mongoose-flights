const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const flightsCtrl = require('../controllers/flights');
const destinationCtrl = require('../controllers/destinations');

	
// GET /movies
router.get('/', flightsCtrl.index);
// GET /movies/new
router.get('/new', flightsCtrl.new);
// GET /movies/:id (show functionality) MUST be below new route
router.get('/:id', flightsCtrl.show);
// POST /movies
router.post('/', flightsCtrl.create);

router.post('/:id/destinations', destinationCtrl.create);
	
module.exports = router;
