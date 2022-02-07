import React,{useEffect, useState} from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import "./ViewMenu.css";
import wash from "../image/home-cleaning.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";


const ViewMenu = () => {

  const [state, setState] = useState({})

  
  const Params = useParams();
  console.log(Params);

  useEffect(() => {
    fetch(`http://localhost:3001/viewmenu/:${Params.id}`)
    .then((res)=>res.json())
    .then((resdata)=>console.log(resdata))
    .catch(err=>console.log(err))
    }, [])

  return (                     
    <>
      <Header />
      <Navbar />
        
          <div className="box flex justify-around flex-wrap">
        <div className="1/3">
          <img style={{ width: 90 }} src={wash} alt="" />
        </div>
        <div className="bad">
          <h1 style={{ fontWeight: 600, fontSize: 24, color: "white" }}>

          </h1>
        </div>
        <div className="price">
          <h1 style={{ fontWeight: 600, fontSize: 24, color: "white" }}>
            price
          </h1>
        </div>
        <div className="bookn">
          <Link to="/Form">
            <h1>Book Now</h1>
          </Link>
        </div>
      </div>
    
      
    </>
  );
};

export  default ViewMenu;
