import { SideBar } from "./components/SideBar/SideBar"
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { ScrollAreaComp } from "./components/ScrollArea/ScrollArea";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";

export const AppContext = createContext()



function App() {

  if (localStorage.getItem("firstTime") == null) {
    alert(`The backend of this project is hosted as a free web service at render.com. It is automatically spun down after 15 minutes of inactivity. When a new request comes in, Render spins it up again, and it can take up to ~30 seconds for the intial boot, so you may have to wait a little 😔`);
    localStorage.setItem("firstTime", true);
  }


  const [linkEffect, setLinkEffect] = useState(true);
  const [links, setlinks] = useState([]);


  //fetch the links from the api
  const getLinks = () => {
    axios.get("https://link-api-gqiv.onrender.com/links")
      .then((res) => {
        setlinks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //useEffect
  useEffect(() => {
    getLinks();
  }, [linkEffect]);

  //create
  const createLink = async (text, label, tags) => {
    try {
      const response = await axios.post('https://link-api-gqiv.onrender.com/link/new', {
        text: text,
        label: label,
        tags: tags
      });
      setLinkEffect(!linkEffect)
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="App">´
      <AppContext.Provider value={[linkEffect, setLinkEffect]}>
      <SideBar title="Project" />

      <div className="main">
          <HeaderComponent createLink={createLink} />
          <div className="scrollabe-area">
            <ScrollAreaComp linkArray={links} />
          </div>
      </div>
      </AppContext.Provider>
    </div>
  )
}

export default App
