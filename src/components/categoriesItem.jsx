import  styled from 'styled-components'


const Container=styled.div`
    flex:1;
    margin:.1rem;
    height:70vh;
    position:relative;


`

const Image=styled.img`
width:100%;
height:100%;
object-fit:fill;


`

const Info=styled.div`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex; 
     flex-direction:column;
    justify-content:center;
    align-items:center;
  


`
const Title =styled.h1`
    color:white;
    margin-bottom:1.2rem;
    font-size:2.25rem;
`
const Button=styled.button`
    border:none;
    padding:.8rem;
    background-color:#f1d7cb;
    color:hotpink;
    font-size:.8rem;
    padding:1rem 2.7rem;
    border-radius:.3rem ;
`


export default function CategoriesItem({item}){
    return <>
        <Container>
           <Image src={item.img} />
           <Info >
                <Title>{item.title} </Title>
                <Button>SHOP NOW</Button>
           </Info>
        </Container>

    </>
}
