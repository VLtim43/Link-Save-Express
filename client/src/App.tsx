import "./App.css";
import axios from "axios";

function App() {

  axios.get('http://localhost:3000/links')
  .then((response) => {
    console.log(response.data)
  })
  .catch(() => {
    console.log("error fetching data");
  })

  
}

export default App;
