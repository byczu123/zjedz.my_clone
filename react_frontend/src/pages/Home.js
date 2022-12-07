import React,{ useState } from "react";
import Navbar from "../components/Navbar";
import photo1 from "./interior restaurant1.jpg"
import photo2 from "./interior restuarant2.jpeg"
import './Home.css'

function Home(){
     const [name, setName] = useState('juzek');
    
     function changeName(){
        setName('Maciek')
     }
     function backName(){
        setName('dupa')
     }
     

    return(
         <div>
            <Navbar/>
            <div className="content">
                  <img className="gallery-photo" src={photo1}></img>               
                  <img className="gallery-photo" src={photo2}></img>
            </div>
         </div>
         
    )
}

export default Home;