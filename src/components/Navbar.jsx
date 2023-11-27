import styled from "styled-components";
import { useState } from "react";
import { FaHamburger, FaSistrix } from "react-icons/fa";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  BsHeartFill,
  BsHeart,
  BsSearch,
  BsFillCartCheckFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { mobile, tablet } from "../responsive";


const Container = styled.div`
  height: 60px;
  background-color: teal;
  width:100%;
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
const Logo = styled.h1`
  font-size: 18px;
  font-family: "Urbanist", sans-serif;
  cursor: pointer;
`;

const Center = styled.div`
  //   flex: 1;
  display: flex;
  align-items: center;
  justify-content:space-between;
  gap: 0.8rem;
  text-decoration: none;
  font-size: 1.4rem;
`;

const Cart = styled.div`
  
`;

const Links = styled.li`
  font-size: inherit;
  list-style: none;
  text-decoration: none;
  ${tablet({ display: "none" })}
`;

const Right = styled.div`
  /* flex: 1;  */
  display: flex;
  align-items: center;
  ${tablet({ justifyContent: "space-between" })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${tablet({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  padding: 15px;
  margin-left: 25px;
  width: 5rem;
  ${mobile({ display: "none" })}
  ${tablet({ display: "none" })}
`;
const Hamburger = styled.div`
  display: none;
  ${tablet({ display: "block" })}
`;

const MobileNav = styled.div`
display:none;
 
  display: ${(props) => props.mobile == false ? "none" : "block"};
`
const MobileItems = styled.div`
 min-width:90vw;
  min-height:400px;
  background-color:teal;
  box-shadow: 10px 14px 14px 2px rgba(0,0,0,0.5) ; display: flex;
  flex-direction:column;
  gap:35px;
  align-items:center;
  font-size:20px;
  justify-content: center;
  align-self: flex-end;

 
  `
  const MLinks = styled.li`
  font-size: inherit;
  list-style: none;
  text-decoration: none;
 
`;



export default function Navbar() {
  const [mobile, setMobile] = useState(false);

  function mobileHandler() {
    setMobile(prevMobile => !prevMobile)
    // if (mobile == false) {
    //   display='none'

    // }
    // else {
    //   display='block'
    // }

  }
  return (

    <>
      {console.log(mobile)}
      <Container>
        <Wrapper>
          <Left>
            <Logo>
              <Link to="/" style={{ textDecoration: "none", color: 'black' }}>AwesomeShop</Link>
            </Logo>
          </Left>

          <Center>
            <Links>
              <Link to="/login" style={{ textDecoration: "none", color: 'black' }}>Login</Link>{" "}
            </Links>
            <Links>
              {" "}
              <Link to="/register" style={{ textDecoration: "none", color: 'black' }}>Sign Up</Link>
            </Links>
            <Links>
              <Cart>
                <Link to="/cart" style={{ textDecoration: "none", color: 'black' }}>
                  <BsFillCartCheckFill style={{ fontSize: "1.4rem" }} />
                </Link>
              </Cart>
            </Links>
            
            <Links>
            <Link to="/product" style={{ textDecoration: "none", color: 'black' }}>
              p
            </Link>
            
            </Links>
          </Center>

          <Right>
            <Language>En</Language>
            <SearchContainer>
              <BsSearch style={{ color: "gray" }} />
            </SearchContainer>

            <Hamburger onClick={() => mobileHandler()}>
              <FaHamburger
                style={{ background: "white", color: "teal", padding: ".3rem" }}
              />
            </Hamburger>
          </Right>
        </Wrapper>
      </Container>
      <MobileNav mobile={mobile}>
        <MobileItems>

          <MLinks>
            <Link to="/login" style={{ textDecoration: "none", color: 'black' }}>Login</Link>{" "}
          </MLinks>
          <MLinks>
            {" "}
            <Link to="/register" style={{ textDecoration: "none", color: 'black' }}>Sign Up</Link>
          </MLinks>

          <MLinks>
            <Cart>
            <Link to="/cart" style={{ textDecoration: "none", color: 'black' }}>
              <BsFillCartCheckFill style={{ fontSize: "1.4rem" }} />
            </Link>
          </Cart>
          </MLinks>
          
          <Link to="/product" style={{ textDecoration: "none", color: 'black' }}>
            p
          </Link>
        </MobileItems>

      </MobileNav >
    </>
  );
}
