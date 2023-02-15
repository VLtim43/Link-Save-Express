
//imports;
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
//express
const app = express();
app.use(express.json());
app.use(cors());

//mongoose connection
mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://admin:dW2PKXQkutyF9YZ@mongodb.kkilvks.mongodb.net/?retryWrites=true&w=majority", () => {
    console.log("Mongo connected");
});


//app setup
app.listen(3000, () =>
  console.log(
    `Server running on port 3000 - http://localhost:3000`
  )
);

//get todos from DB
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  tags: {
    type: Array,
    required: false,
  },
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Link = mongoose.model("Link", LinkSchema);

//get all links
app.get("/links", async (req, res) => {
  const links = await Link.find();

  res.json(links);
});

//create a new link
app.post("/link/new", (req, res) => {
  const link = new Link({
    text: req.body.text,
    label: req.body.label,
    tags: req.body.tags
  });

  link.save();
  res.json(link);
});


//delete Link
app.delete("/link/delete/:id", async (req, res) => {
  const result = await Link.findByIdAndDelete(req.params.id);
  res.json(result);
});

//edit link
app.put("/link/edit/:id", async (req, res) => {
  const link = await Link.findByIdAndUpdate(req.params.id, {
    text: req.body.text,
    label: req.body.label
  }, {new: true});

  if (!link) return res.status(404).send("Link not found.");

  res.json(link);
})


//delete All links
app.delete("/link/deleteAll/", async (req, res) => {
  const link = await Link.deleteMany({}); 
  res.json(link);
});