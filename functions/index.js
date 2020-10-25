const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hg5e6E0yZApTkiE1Be2tu5Ie0MR8yPRnu4K3RkJ4Lk7wDnCUY0VxoOOnYQqRX8jpYdHilJmD9xurgPzxvBcvOzV00x7rJV4Ip"
);

//API

//App config
const app = express();

//middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});
app.post("/payment/create", async (req, res) => {
  const total = req.query.total; //get from client url
  console.log("payment req recieved ,", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //total is in subUnits of currency(cents)
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command

exports.api = functions.https.onRequest(app);
//http://localhost:5001/clone-c488e/us-central1/api
