import { categories } from "../data"
import styled from 'styled-components'
import CategoriesItem from "./categoriesItem"

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    gap:.6rem
`

const Image=styled.img`

`
const Title =styled.h1``
const Info=styled.div``
const Button=styled.button``


export default function Categories(){
    return  <Container>
        {
            categories.map(item=>(
                
                <CategoriesItem item={item} key={item.id} />
            ))
        }

    </Container>
       
           
    
}