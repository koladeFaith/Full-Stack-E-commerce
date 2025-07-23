import React from 'react'
import axios from "axios";

const Connect = async() => {

  axios.get("http://localhost:6300/")
    .then((data) => {
    console.log(data);
    })
    .catch((err) => {
    console.log(err);
    
  })
  return (
    <>
      
    </>
  )
}

export default Connect