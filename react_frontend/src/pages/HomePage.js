import React,{ useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import photo1 from "../assets/interior_restaurant1.jpg"
import photo2 from "../assets/interior_restuarant2.jpeg"
import './HomePage.css'

function HomePage(){

   const [backendData, setBackendData] = useState(null)

   useEffect(() => {
      fetch("/api").then(
         res => res.json()
      ).then(
         data => {
            setBackendData(data)
            console.log(data)
         }
      )
   }, [])
    
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

export default HomePage;