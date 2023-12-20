import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './product'
import { useState,useEffect } from 'react'
import axios from 'axios'

const Container=styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
//   gap:.2rem;
//   justify-content:space-between;
//   align-item:center
`
export default function Products({cat,sort,filter}){
   
    console.log(sort+' ' + filter + ' ' +cat)

    const [products,setProducts]=useState([])
    const [filteredProducts,setFilteredProducts]=useState([])
  
    const getData=async ()=>{
      try{
  
      const res=  await axios.get(`http://localhost:2000/api/products`);
        console.log(res)
    }
  
      catch(err){
        console.log("errr " + err);
      }
  
    }
    useEffect( ()=>{
     getData();
    }, [cat])
    
    return <Container>
   
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id }></Product>
        ))}
     
    </Container>

}