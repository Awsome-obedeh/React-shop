import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
      center;
      background-position: fixed;
      background-size: cover;
      ;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Wrapper = styled.div`
    width:50%;
    padding:1.2rem;
    background-color: teal;

`;


const Title = styled.h1`
    font-size:1.3rem;
   font-weight:400;
    
`;
const Form = styled.form`
    display: flex;
    flex-wrap:wrap;
`;
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:1rem .5rem 0 0;
    padding:.6rem;

    &:focus{
        outline:none;
    }

`;

const Agreement = styled.p`
    font-size:1rem; 
    margin:1rem 0;
  
`;

const Button = styled.button`
    border:none;
    width:50%;
    padding:1rem 1.3rem;
    background-color:rgb(254, 254, 254);
    color:teal;
    border-radius: .3rem;
    cursor:pointer;
    display:block;
    margin:1rem auto;
    text-align:center;
    transition:all .2s ease;
    
    &:hover{
        background-color:rgb(128, 209, 209);
        color:black;
    };
   
`;
// 

export default function () {
  return (
    <>
      <Container>
     
        <Wrapper> 
              <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="name"></Input>
            <Input placeholder="last name"></Input>
            <Input placeholder="username"></Input>
            <Input placeholder="email"></Input>
            <Input placeholder="password"></Input>
            <Input placeholder="confirm password"></Input>
           
            
            <Button>Register</Button>
          
          
          </Form> 
          <Agreement>
              I concent to the processing of my personal data
            </Agreement>
            <Link to="/login">Alredy have an Account?</Link>
        </Wrapper>
      </Container>
    </>
  );
}
