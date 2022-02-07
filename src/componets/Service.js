import React, { useState, useEffect } from "react";
import "./Service.css";
import Button from "@mui/material/Button";
import wash from "../image/home-cleaning.png";
import { Link } from "react-router-dom";


const Service = () => {

  const [state, setState] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/viewmenu')
    .then((res)=>res.json())
    .then((resdata)=>setState(resdata))
    .catch(err=>console.log(err))
    }, [])


  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-5xl font-sm title-font text-center text-gray-900 mb-20">
            WHAT CAN WE DO FOR YOU
            <p className="text-lg mt-4 text-red-500">
              Clean & Green Is Our Perfect Dream
            </p>
          </h1>
          {state.map((ele) => {
            return (
              <div className="flex justify-around flex-wrap px-24">
                <div className="flex-grow pl-6 my-10">
                  <h1 className="text-3xl text-purple-600 font-medium">
                    {ele.top_name}
                  </h1>
                  <p className="p_tag text-2xl mt-2">Professional Service</p>
                  <p className="mt-2">
                    You will get professional service at affordable prices and
                    according to you.
                  </p>
                  <Link value={state} to={`/viewmenu/${ele._id}`}>
                    <Button
                      style={{
                        marginTop: "1rem",
                        color: "black",
                        background: "#5cfdfd",
                        width: "8rem",
                        height: "3rem",
                        marginRight: "1rem",
                      }}
                    >
                      CHECK NOW
                    </Button>
                  </Link>
                </div>
                <div className="flex-grow pl-6">
                  <img className="image" src={wash} alt="wash" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Service;
