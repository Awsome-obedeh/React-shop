import styled from 'styled-components'
import {BsFullscreenExit } from "react-icons/bs";
import {tablet} from "../responsive"

const Wrapper=styled.div`
    background-color:lightgray;
    padding:.1rem 1.25rem;
    text-align:center 
    ${tablet({height:"3rem"})}; 
    ${tablet({padding:".2rem 0"})}
`

const Title=styled.h1`
    text-transform:capitalize;
    color:#BF4F74;
      text-align:center;
    ${tablet({fontSize:"1.5rem"})};
`
const Frame=styled.i`
    ${tablet({display:"none"})}
`


export default function Annoucements(){
    return<>
        <Wrapper>
            <Title>
                New Arrivals coming 
                <Frame>
                    <BsFullscreenExit style={{float:'right'}}/>
                </Frame>
                
            </Title>
        </Wrapper>
    </>
}