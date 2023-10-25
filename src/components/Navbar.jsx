import styled from "styled-components";
import {useState} from 'react'
import { FaSistrix } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsHeartFill, BsHeart, BsSearch,BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: teal;

`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
//   flex: 1;
  display: flex;
  align-items: center;
`;
const Logo=styled.h1`
font-size:18px;
font-family: 'Urbanist', sans-serif;
cursor:pointer;
`



const Center = styled.div`
//   flex: 1; 
  display:flex;
    align-items:center;
    gap:.8rem;
`

const Links=styled.li`
   font-size:1.4rem;
   list-style:none
`

const Right = styled.div`
//   flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-left: 25px;
  width:5rem;

`

export default function Navbar() {
  
  return (
   
    <> <Link to="products"><li>Products</li></Link>
      <Container>
        <Wrapper>
          <Left>
            <Logo>
               
            </Logo>
          </Left>

          <Center>
            <Links>Login</Links>
            <Links>Sign Up</Links>
            <BsFillCartCheckFill style={{fontSize:'1.4rem'}} />
            
                
          </Center>

          <Right>
           
            <Language>En</Language>
            <SearchContainer>
              
              <BsSearch style={{color:'gray'}} />
            </SearchContainer>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}
