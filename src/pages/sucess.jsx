import styled from "styled-components"
import { FaCheckCircle } from "react-icons/fa";

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    gap:.1rem;
    width:100; 
     height:100vh;



 
`
const Wrapper = styled.div`
   width:inherit;
    display: flex;
    flex-direction: column;
    padding:.5rem 1.3rem;
    box-shadow:0px 5px 5px 5px rgba(234, 218, 218, 0.5);
    align-items: center;
    justify-content: center;


 `
const Button = styled.div`
    padding: .5rem 1.5rem;
    border:none;
    color:white;
    background-color:green;
    border-radius: 3px;
    width:max-content;
    /* margin:auto ;
    display: block; */
`
const Text = styled.p`
  font-size:1.2rem;
  /* line-height:1.3rem; */
`
const Bold = styled.h1`
font-weight:200;

`

export default function Sucess() {
    return (
        <Container>
            <Wrapper>
                <FaCheckCircle style={{ fontSize: "3rem", color: "lightgreen" }} />
                <Text>Hello, </Text>
                <Bold>Your Payment is Being processed</Bold>

                <Text>You'll receive a notification once successfull</Text>
                <Button>successful</Button>
            </Wrapper>

        </Container>

    )
}