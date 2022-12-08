import React,{ useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import photo1 from "./interior restaurant1.jpg"
import photo2 from "./interior restuarant2.jpeg"
import './Home.css'

function Home(){
   const [name, setName] = useState('juzek');
   const [backendData, setBackendData] = useState(null)

   useEffect(() => {
      fetch("http://localhost:5000/api").then(
         res => res.json()
      ).then(
         data => setBackendData(data)
      )
      console.log(backendData)
   }, [])
    
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