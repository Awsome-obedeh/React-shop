import {styled} from 'styled-components'
import { BsSendCheckFill } from "react-icons/bs";

const Container =styled.div`
    height:60vh;
    background-color:rgba(240, 192, 192,.3);
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
 
`
const Title=styled.h1`   
    text-transform:uppercase;
    font-size: 3rem;
    line-height: 1rem;
    

`
const Description=styled.p`
    font-style: 1rem;
    font-weight:.03rem;

`
const InputContainer=styled.div`
    width:50%;
    height:2.3rem;
    background-color:white;
    display:flex;
    justify-content:space-between

`
const Input=styled.input`
    flex:8;
    border:none
`
const Button=styled.button`
    flex:1;
    background-color:rgb(240, 192, 192);
    border:none;
    border-radius:.3rem
` 

export default function Newsletter(){
    return(
        <Container>
            {/* send news letter to Emails that registered  */}
           <Title>NewsLetter    </Title> 
           <Description>Get timely Updates from your favourite Products</Description>
           <InputContainer>
                 <Input placeholder='Enter your email'/>
                 <Button><BsSendCheckFill style={{fontSize:'1rem'}}/></Button>
            </InputContainer>
        </Container>
    
    )
}