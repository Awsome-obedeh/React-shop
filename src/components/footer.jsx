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
    
`
const Desc=styled.div``
const Center =styled.div`
    flex:1;
`
const SocialContainer=styled.div`

`

const SocialIcon=styled.div`
    
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
                <SocialIcon>
                    <Facebook/>
                </SocialIcon>

                <SocialIcon>
                    <Twitter/>
                </SocialIcon>

                <SocialIcon>
                    <WhatsApp/>
                </SocialIcon>

                <SocialIcon>
                    <LinkedIn/>
                </SocialIcon>
            </SocialContainer>
            
        
        </Left>
       
        <Center></Center>


        </Container>
    )
}