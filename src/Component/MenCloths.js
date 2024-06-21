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


// this is the Element which were is used to put on the "BACKEND" 
// there are 2 way to used the data in the web page 
function MenCloths() {
    const [apidata, SetData] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/men's clothing").then((result) => {
            result.json().then((data) => {
                SetData(data)
                console.log(data)
            })
        })
    }, [])
    // async function getData()
    // {
    //     const data=await fetch("https://fakestoreapi.com/products")
    //     const data1=await data.json
    //     console.log(data1)
    // }

    return (
        <div>







    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>


      {
        apidata.map((item,i)=>
            <MDBCol key={i}>
      <MDBCard>
         <center>
         <MDBCardImage
            src={item.image}
            alt='...'
            position='top' style={{width:"100px" ,height:"100px"}}
          />
         </center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"red"}}>{item.price*80} Rs</MDBCardTitle>
            <MDBCardTitle style={{color:"green"}}>{item.categary}</MDBCardTitle>

            <MDBCardText>
            <MDBCardTitle>{item.description.slice(0,200)}</MDBCardTitle>

            </MDBCardText>
            <MDBBtn>View Details</MDBBtn>
          </MDBCardBody>
        </MDBCard>


      </MDBCol>
        )
      }
    </MDBRow>


        </div>
    )
}
export default MenCloths
