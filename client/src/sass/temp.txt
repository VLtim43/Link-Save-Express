const [links, setlinks] = useState([]);


//fetch the links from the api
const getLinks = () => {
  axios.get("http://localhost:3000/links")
    .then((res) => {
      console.log("data fetched")
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
