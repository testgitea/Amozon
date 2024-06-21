
import { useEffect, useState } from "react"

import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
function Home()
{
    const [apidata,setData]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        getData()
    },[])
    function handleclick(pid)
    {
        //console.log(pid)
        const data={name:pid}
        navigate("/item",{state:data})
    }
    async function getData()
    {
        const data=await fetch("https://fakestoreapi.com/products")
       const data1=await data.json()
      // console.log(data1)
       setData(data1)
    }
    return(
        <div>

           <MDBRow className="row-cols-2 row-cols-md-3 g-4 ">
         {
            apidata.map((item,i)=>
                <MDBCol key={i}>
            <MDBCard>

             <MDBCardImage
                src={item.image} 
                alt='...'
                position='top' style={{width:"100px", height:"100px"}}
               />

              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardTitle style={{color:"red"}}>{item.price*80} Rs</MDBCardTitle>
                <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
                {/* <MDBCardText>
                  {item.description.slice(0,100)}
                </MDBCardText> */}
                <MDBBtn onClick={()=>handleclick(item.id)}>View Details {item.id}</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
            ) }
    </MDBRow>
        </div>
    )
}
export default Home