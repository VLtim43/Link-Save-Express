import { SideBar } from "./components/SideBar/SideBar"
import { useState, useEffect } from "react";
import axios from "axios";
import { LinkComponent } from "./components/LinkComponent/LinkComponent";


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
          <LinkComponent text={link.text} label={link.label}/>
        ))}

      </div>
    </div>
  )
}

export default App
