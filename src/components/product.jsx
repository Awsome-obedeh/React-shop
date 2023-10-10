import styled from 'styled-components'
import {BsCartFill,BsSearch,BsFillHeartFill} from 'react-icons/bs'

const Container=styled.div`
    flex:1;
    margin:5px;
`
const Circle=styled.div`

`
const Image=styled.img``

const Icon= styled.div``

const Info= styled.div``





export default function Product({item}){
    return(
        <Container>
          
            <Circle>
                <Image src={item.img} />
                <Info>
                    <Icon>
                        <BsCartFill></BsCartFill>
                    </Icon>
                    <Icon>
                        <BsSearch></BsSearch>
                    </Icon>
                    <Icon>
                        <BsFillHeartFill></BsFillHeartFill>
                    </Icon>
                     
                </Info>
        
            </Circle>
        </Container>
    )
}