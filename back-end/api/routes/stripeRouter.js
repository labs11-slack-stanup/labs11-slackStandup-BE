const express = require("express");
const router = express.Router();
const teamMembersDb = require("../database/helpers/teamMembersDb");
require('dotenv').config();

const stripe = require('stripe')(process.env.SECRETKEY);


const {
    postSuccess,
    serverErrorPost,
    getSuccess,
    serverErrorGet,
    serverErrorGetID,
    serverErrorDelete404,
    serverErrorDelete500,
    serverErrorUpdate404,
    serverErrorUpdate500
} = require("./routeHelpers/helpers.js");
//  creates a subscription to curie
router.post('/subscribe10', (req, res) => {
    const stripeToken = req.body.stripeToken;
    const email = req.body.email;

    stripe.customers.create({
        email: email,
        source: stripeToken
    }, function(err, customer) {
        if(err) {
            res.send(
                serverErrorPost(res)
            )
        } else {
            const { id } = customer

            stripe.subscriptions.create({
                customer: id,
                items: [{plan: 'plan_EotAwOluM0kiAT'}],

            }, function(err, subscription) {
                if(err) {
                    res.send(
                        serverErrorPost(res)
                    )
                } else {
                    // console.log(req.params)
                    // res.status(200).json({subscription})
                    if(subscription.status === 'active') {
                        teamMembersDb
                            .updateEmail(email, { status: true })
                            .then(status => {
                                res.status(200).json({status})
                            })
                            .catch(e => {
                                console.log(e)
                            })
                    }
                }
            })
        }
    })
})


//   router.post('/subscribe50', (req, res) => {
//     const stripeToken = req.body.stripeToken;
//     const email = req.body.email;

//     stripe.customers.create({
//         email: email,
//         source: stripeToken
//     }, function(err, customer) {
//         if(err) {
//             res.send(
//                 serverErrorPost(res)
//             )
//         } else {
//             const { id } = customer

//             stripe.subscriptions.create({
//                 customer: id,
//                 items: [{plan: 'plan_EoTZWg3g8rXaYL'}],

//             }, function(err, subscription) {
//                 if(err) {
//                     res.send(
//                         serverErrorPost(res)
//                     )
//                 } else {
//                     res.status(200).json({subscription})
//                 }
//             })
//         }
//     })
// })



// router.post('/subscribe75', (req, res) => {
//     const stripeToken = req.body.stripeToken;
//     const email = req.body.email;

//     stripe.customers.create({
//         email: email,
//         source: stripeToken
//     }, function(err, customer) {
//         if(err) {
//             res.send(
//                 serverErrorPost(res)
//             )
//         } else {
//             const { id } = customer

//             stripe.subscriptions.create({
                
//                 customer: id,
//                 items: [{plan: 'plan_EoT9REg5JfI6KN'}],

//             }, function(err, subscription) {
//                 if(err) {
//                     res.send(
//                         serverErrorPost(res)
//                     )
//                 } else {
//                     res.status(200).json({subscription})
//                 }
//             })
//         }
//     })
// })

// router.post('/subscribe15', (req, res) => {
//     const stripeToken = req.body.stripeToken;
//     const email = req.body.email;

//     stripe.customers.create({
//         email: email,
//         source: stripeToken
//     }, function(err, customer) {
//         if(err) {
//             res.send(
//                 serverErrorPost(res)
//             )
//         } else {
//             const { id } = customer

//             stripe.subscriptions.create({

//                 customer: id,
//                 items: [{plan: 'plan_EoT9diKu1uLPVM'}],

//             }, function(err, subscription) {
//                 if(err) {
//                     res.send(
//                         serverErrorPost(res)
//                     )
//                 } else {
//                     res.status(200).json({subscription})
//                 }
//             })
//         }
//     })
// })

module.exports = router;
