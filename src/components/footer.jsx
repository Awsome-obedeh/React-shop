import { Facebook, LinkedIn, WhatsApp,Twitter } from '@mui/icons-material'
import styled from 'styled-components'
const Container=styled.div`
    display:flex;
`
const Left=styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
`

const Logo=styled.div`
font-size:2.3rem;
font-weight: bolder;
margin-top:.5rem;

    
`
const Desc=styled.div`
line-height:2.5rem;

`
const Center =styled.div`
    flex:1;
`
const SocialContainer=styled.div`
    display:flex;
    flex-direction:row;
    gap:1rem;
   

`

const SocialIcon=styled.div`
    width:3rem;
    height:3.2rem;
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 50%;
    color:white;
     background-color:#${props=>props.color};  /* justify-content:center; */
`

const Right=styled.div`
    flex:1;
`

export default function Footer(){
    return(
        <Container>
        <Left> 
            <Logo>Awesome Shop</Logo>
            <Desc>
                For quality,be rest assured, Awesome shop is 
            </Desc>
            <SocialContainer>
                <SocialIcon color='385999'>
                    <Facebook/>
                </SocialIcon>

                <SocialIcon color='80c0ff'>
                    <Twitter/>
                </SocialIcon>

                <SocialIcon color='005a00'>
                    <WhatsApp/>
                </SocialIcon>

                <SocialIcon color='002db3'>
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
            
        
        </Left>
       
        <Center></Center>


        </Container>
    )
}