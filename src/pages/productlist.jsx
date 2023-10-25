import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Annoucements from '../components/Annoucements'
import Products from '../components/products'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'

const Container =styled.div`
    
`

const Title=styled.h1``
const FilterContainer=styled.h1`
    display: flex;
    justify-content: space-between;
`
const Filter=styled.div``

export default function ProductList(){
    return(
        <Container>
            <Annoucements/>
            <Navbar/>
            <FilterContainer>
                <Filter>filter 1</Filter>
                <Filter>filter 2</Filter>
                
            </FilterContainer>
            <Products/>
                <Newsletter/>
                <Footer/>

            
        </Container>
    )
}