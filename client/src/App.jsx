import { SideBar } from "./components/SideBar/SideBar"
import { useState, useEffect } from "react";
import axios from "axios";


function App() {

  const [links, setlinks] = useState([]);


  //fetch the links from the api
  const getLinks = () => {
    axios.get("http://localhost:3000/links")
      .then((res) => {
        console.log(links)
        setlinks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //useEffect
  useEffect(() => {
    getLinks();
    console.log(links);
  }, []);



  return (
    <div className="App">
      <SideBar title="Project" />
      <div className="main">
         {links.map((link) => (
          <p key={link._id}>{link.timestamp}</p>
        ))}

        
      </div>
    </div>
  )
}

export default App
