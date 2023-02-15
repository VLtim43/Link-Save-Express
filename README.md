# Link-Save-Express

## Backend

### Stack
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
- ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Mongoose](https://img.shields.io/badge/Mongoose-860000?style=for-the-badge&logo=mongodb&logoColor=white)
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)


## Setup
- ``git clone`` 
- ``cd api`` and ``npm i`` for the initial build
- create a  ``.env`` file with **MONGO_URL** pointing to your mongoDB atlas cluster connection link
- ``MONGO_URL = <my mongo url>`` (for more info: https://www.mongodb.com/docs/atlas/tutorial/connect-to-your-cluster/)
- ``node src/server.js`` to start the server


## Content

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

## FrontEnd


### Stack
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
- ![Axios](https://img.shields.io/badge/axios-864196?style=for-the-badge&logo=expo&logoColor=white)
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Notable libraries
- Radix.UI for displaying alert and dialog boxes
- Phospor-Icons for general icons


## Setup
- ``cd client`` and ``npm i`` for the initial build
- ``npm run dev`` for test dev
- ``npm run build`` for final building

## Content

``App.jsx`` main file, importing all components

```
return (
    <div className="App">
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
```


- All component's scss stylesheets are imported to the main ``global.scss`` file, then compiled into the ``globa.css`` file
- Are used SCSS variables to share the same colors and media queries between all stylesheets
- The "linkEffect" useState hook is shared to all components using the useContext hook. This value triggers the useEffect hook to re-render all links whenever a link is created, edited or deleted
- `` <AppContext.Provider value={[linkEffect, setLinkEffect]}> ``
- The **sidebar** component displays the sidebar, and the "trash" button that delete ALL links. When clicked, a alert pop-up appears aksing the user if he is SURE he wants to delete ALL links(this action cannot be undone). If yes, then all links are erased
- The **header** component displays 2 text inputs(for the link itself and the label) and a button to submit and create a new link.
- The "Link" is required, but the "Label" is optional. The button will not be clickable if the "Link" input is empty.
- The **scroll area** component is the main area, where the links are displayed. After a certain quantity of links, it enables a scroll bar to view all links.
- The "links" are fetched from the API as an array. The array is mapped and for each link a "Linkwrapper" component is created inside the scroll area
- The **LinkWrapper** component can return the 2 ways a "link" can be displayed, and shares the useState responsible for choosing which one displays. It also contains a function to truncate given link if it is too long, adding "..." at the end.
```
function TruncateLink(link ) {
        const [truncatedLink, setTruncatedLink] = useState(link);
      
        useEffect(() => {
          const handleResize = () => {
            const maxLength = window.innerWidth < 1800 ? 105 : 150;
            setTruncatedLink(link.length > maxLength
              ? link.substr(0, maxLength) + '...'
              : link
            );
          };
          handleResize();
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
        }, [link]);

        return truncatedLink
    }


 return (
        <LinkContext.Provider value={[editing, setEditing]}>
            {editing ?
             <LinkComponent text={TruncateLink(link.text)} label={link.label} key={link._id} id={link._id} editing={setEditing}
            /> : 
             <FakeInput text={TruncateLink(link.text)} label={link.label} key={link._id} id={link._id} editing={setEditing}
            />}
        </LinkContext.Provider>
    )
```
- The **LinkComponent** displays both "link" url and the label as <p> tags. It also displays one icon for editing and deleting the component, the former changing the "setEditing" useState, who triggers the LinkWrapper to display the "fakeInput" link istead.
- ``<Pencil size={20} onClick={() => setEditing(!editing)} />``
- The **fakeInput** component displays both "link" url and label as a editable text input, where user can edit the present string, then submit the edited versions. 
- Only one link can be editable at the same time. using the useState and useRef hooks, if - while editing a link - the user clicks outiside the component boundaries, it changes the "setEditing" useState again.
```
useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
        setEditing(!editing)
    }
  }
```

  
