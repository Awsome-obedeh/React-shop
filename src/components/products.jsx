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
        
        // fetch products from the database if there is category and if there is not
      const res=  await axios.get(cat ? `http://localhost:2000/api/products?category=${cat}`:"http://localhost:2000/api/products" );
        console.log('data from db ', res)
    
         setProducts(res.data)
          console.log('PRODUCTS: ', products);
    }
  
      catch(err){
        console.log("errr " + err);
      }
  
    }
    useEffect( ()=>{
     getData();
    
    
    }, [cat])
    
    useEffect(()=>{
      cat && setFilteredProducts(products.filter((item)=>Object.entries(filter).every(([key,value])=>
      item[key].includes(value))))
    },[cat,filter,products])

    console.log("filtered products", filteredProducts)
    return <Container>
   
        {filteredProducts.map((item)=>(
            <Product item={item} key={item.id }></Product>
        ))}
     
    </Container>

}