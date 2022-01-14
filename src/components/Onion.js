import {Link} from "react-router-dom";
import React from 'react';
import { Formik } from 'formik';
import Onion from '../assets/img/onion.jpg';
import Puerro from '../assets/img/puerro.jpg';


let lista = [
    
    {
      "id" : 1,
      "title": "Galletita de Cebolla",
      "image" : "../assets/img/onion.jpg"
    },
    {
      "id" : 2,
      "title": "Galletita de Puerro",
      "image" : "../assets/img/puerro.jpg"
    },
   
]



function Cebolla () {

    return (
      

<div>


<div>
   <img src={Onion} alt="no funca" />

</div>


</div>
   
    )}


export default Cebolla
