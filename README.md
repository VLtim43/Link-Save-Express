# Link-Save-Express

## Backend

### Stack
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- Mongoose

## Setup
- ``git clone`` 
- ``cd api`` and ``npm i`` for the initial build
- create a  ``.env`` file with **MONGO_URL** pointing to your mongoDB atlas cluster connection link
- ``MONGO_URL = <my mongo url>`` (for more info: https://www.mongodb.com/docs/atlas/tutorial/connect-to-your-cluster/)
- ``node src/server.js`` to start the server


Using mongoose to create a connection between MongoDB and the Node.js JavaScript runtime 
```
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => {
console.log("Mongo connected");
});
```
Creating a mongoose Schema and model for the entity "link"
```
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
```
Express.js API with the following routes:
- ``app.get("/links")`` get all links
- ``app.post("/link/new")`` creates a new link 
- ``app.get("/link/delete/:id")`` delete a specific link 
- ``app.get("/link/edit/:id")`` edit a specific link
- ``app.get("/link/deleteAll/")`` delete ALL links





