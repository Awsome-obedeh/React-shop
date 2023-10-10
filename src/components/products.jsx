import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './product'

const Container=styled.div`
  display:flex;
  flex-direction:row
`
export default function Products(){
    return <Container>
   
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id }></Product>
        ))}
     
    </Container>

}