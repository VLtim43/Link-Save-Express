import "./App.css";
import axios from "axios";

function App() {

  axios.get('http://localhost:3000/posts')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

 

  return <div>a</div>;
}

export default App;
