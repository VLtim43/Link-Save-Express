# Link-Save-Express

# Backend

##Stack
- Node.js(Javascript)
- Express.js
- MongoDB
- Mongoose

#Setup
- ``git clone`` clonar o projeto
- ``cd api`` e ``npm i`` para o build inicial
- criar um arquivo ``.env`` com a variável **MONGO_URL** apontando para o link de conexão com o seu cluster no mongoDB atlas 
- ``MONGO_URL = <sua url de conexão>`` (Para mais informações: https://www.mongodb.com/docs/atlas/tutorial/connect-to-your-cluster/)



Usando o mongoose para fazer a conexão entre o mongoDB e o node.js
```
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL, () => {
console.log("Mongo connected");
});
```
É criado uma schema e depois um model da entidade "link"

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
Api feita com Express.js, com as seguintes rotas:
- ``app.get("/links")`` para obter todos os registros
- ``app.post("/link/new")`` para criar um novo Link no banco de dados
- ``app.get("/link/delete/:id")`` para deleter dado Link 
- ``app.get("/link/edit/:id")`` para editar dado Link
- ``app.get("/link/deleteAll/")`` para deletar TODOS os registros de uma vez





