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
  gap: 0.8rem;
`;

const Cart = styled.div`
  ${tablet({ display: "none" })}
`;

const Links = styled.li`
  font-size: 1.4rem;
  list-style: none;
  ${mobile({ display: "none" })}
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

export default function Navbar() {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Logo>
              <Link to="/">AwesomeShop</Link>
            </Logo>
          </Left>

          <Center>
            <Links>
              <Link to="/login">Login</Link>{" "}
            </Links>
            <Links>
              {" "}
              <Link to="/register">Sign Up</Link>
            </Links>
            <Cart>
              <Link to="/cart">
                <BsFillCartCheckFill style={{ fontSize: "1.4rem" }} />
              </Link>
            </Cart>
          </Center>

          <Right>
            <Language>En</Language>
            <SearchContainer>
              <BsSearch style={{ color: "gray" }} />
            </SearchContainer>

            <Hamburger>
              <FaHamburger
                style={{ background: "white", color: "teal", padding: ".3rem" }}
              />
            </Hamburger>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}
