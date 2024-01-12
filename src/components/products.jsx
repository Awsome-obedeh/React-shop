import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './product'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { publicRequest } from '../../requestMethods'

const Container=styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
//   gap:.2rem;
//   justify-content:space-between;
//   align-item:center
`
export default function Products({cat,sort,filter}){
   
    console.log(filter)

    const [products,setProducts]=useState([])
    const [filteredProducts,setFilteredProducts]=useState([])
  
    const getData=async ()=>{
      try{
        
        // fetch products from the database if there is category and if there is not
      const res=  await publicRequest.get(cat ? `/products?category=${cat}`:"http://localhost:2000/api/products" );
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

    useEffect(()=>{
      if(sort=="newest"){
        setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>a.createdAt - b.createdAt))
      }

      else if(sort==="asc"){
        setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>a.price - b.price))
      }

      else{
        setFilteredProducts((prev)=>
        [...prev].sort((a,b)=>b.createdAt-a.createdAt))
      }
    }, [sort])

    console.log("filtered products", filteredProducts)
    return <Container>
   
        {cat ? filteredProducts.map((item)=>(
            <Product item={item} key={item._id }></Product>
        )) : popularProducts.slice(0,8).map((item)=> <Product item={item} key={item._id }/>)}
     
    </Container>

}