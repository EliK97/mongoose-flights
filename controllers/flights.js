const Flights = require('../models/flights')
const Ticket = require('../models/ticket')
module.exports = {
    index,
    show,
    new: newFlight,
    create

};




async function index(req, res) {
    const flights = await Flights.find({});
    res.render('flights/index',{title:'' , flights})
}


async function show(req, res) {
    const flight = await Flights.findById(req.params.id);
    const ticket = await Ticket.find({});
    res.render('flights/show',{title:'' , flight,ticket})
}



function newFlight(req,res){
    res.render('flights/new',{title:'' , errorMsg: ''})
}

async function create(req,res) {
   
try {
    await Flights.create(req.body);

    res.redirect('/flights'); 
} catch(err) {
    console.log(err);
    res.render('flights/new',{ errorMsg: err.message })
}
}
    



