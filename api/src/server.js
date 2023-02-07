/* require("dotenv").config();
const express = require("express");
const cors = require("cors");

//express
const app = express();
app.use(cors());

//mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(console.error);


app.listen(process.env.PORT, () =>
  console.log(
    `Server running on port ${process.env.PORT} - http://localhost:${process.env.PORT}`
  )
);




//get todos from DB
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: String,
        default: Date.now()
    }
})


const Link = mongoose.model("Link", LinkSchema);

app.get("/links", async (req, res) => {
  const links = await Link.find();

  res.json(links);
});

//create a new link
app.post("/link/new", (req, res) => {
  const link = new Link({
    text: req.body.text,
  });

  link.save();
  res.json(link);
});

 */

//imports;
require("dotenv").config();
const express = require("express");
const cors = require("cors");

//express
const app = express();
app.use(express.json());
app.use(cors());

//mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

//app setup
app.listen(process.env.PORT, () =>
  console.log(
    `Server running on port ${process.env.PORT} - http://localhost:${process.env.PORT}`
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
  timestamp: {
    type: String,
    default: Date.now(),
  },
});

const Link = mongoose.model("Link", LinkSchema);

app.get("/links", async (req, res) => {
  const links = await Link.find();

  res.json(links);
});

//create a new Todo
app.post("/link/new", (req, res) => {
  const link = new Link({
    text: req.body.text,
    label: req.body.label
  });

  link.save();
  res.json(link);
});



