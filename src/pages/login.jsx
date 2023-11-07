import styled from "styled-components";
import { Link } from "react-router-dom";
import { tablet, mobile } from "./../responsive";
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 50%;
  padding: 1.2rem;
  background-color: teal;
  ${mobile({width:"90%",margin:"0 1rem"})}
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 400;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 1rem 0.5rem 0 0;
  padding: 0.6rem;

  &:focus {
    outline: none;
  }
`;

const Agreement = styled.p`
  font-size: 1rem;
  margin: 1rem 0;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  width: 50%;
  padding: 1rem 1.3rem;
  background-color: rgb(254, 254, 254);
  color: teal;
  border-radius: 0.3rem;
  cursor: pointer;
  display: block;
  margin: 1rem auto;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgb(128, 209, 209);
    color: black;
  }
`;
//

export default function () {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>LOGIN INTO ACCOUNT</Title>
          <Form>
            <Input placeholder="email"></Input>
            <Input placeholder="password"></Input>

            <Button>login</Button>
          </Form>
          <Agreement>forgot password</Agreement>
          <Link to="/register">
            <p style={{textAlign:"center", color:"white"}}>Don't have an Account ?</p>
          </Link>
        </Wrapper>
      </Container>
    </>
  );
}
