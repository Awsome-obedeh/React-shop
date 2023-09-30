import styled from 'styled-components'
import {BsFullscreenExit } from "react-icons/bs";

const Wrapper=styled.div`
    background-color:lightgray;
    padding:.1rem 1.25rem;
    text-align:center
`

const Title=styled.h1`
    text-transform:capitalize;
    color:#BF4F74;
`


export default function Annoucements(){
    return<>
        <Wrapper>
            <Title>
                New Arrivals coming 
                <BsFullscreenExit style={{float:'right'}}/>
            </Title>
        </Wrapper>
    </>
}