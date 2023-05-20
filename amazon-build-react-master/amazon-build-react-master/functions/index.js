const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  // Enter your stripe api key
  "sk_test_51HRWD2Ak5diG4tD30PL5hzpq87UdgkRvEYW6yhbqoEElLHrMLqTUw8xUmljtL7zToOdQTyQBuM8oBxCxOfYbSL3200edGAhGOD"
);
// api endpoint
// http://localhost:5001/full-stack-dbef7/us-central1/api

//API

// app config
const app = express();

// middlerware
app.use(cors({ origin: true }));
app.use(express.json());

//api routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment request receiveid", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  // 201 OK create
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen command
exports.api = functions.https.onRequest(app);
