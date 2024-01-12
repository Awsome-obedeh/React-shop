import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucements from "../components/Annoucements";
import Products from "../components/products";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import { tablet, mobile } from "./../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
// import { Select } from "@mui/material";

const Container = styled.div``;

const Title = styled.h1``;
const FilterContainer = styled.h1`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 1.2rem;
  ${mobile({fontSize:"1rem"})}
`;
const Select = styled.select`
  padding: 0.6rem;
  margin-right: 0.5rem;
  ${mobile({width:"85%"})}
`;
const Option = styled.option``;
export default function ProductList() {
  const location=useLocation()

 
  console.log(location)
 const cat= location.pathname.split('/')[2]

  const [filter,setFilters]=useState({});
  const [sort, setSort]=useState('newest');

  function filterHandler(e){
    const value=e.target.value
    setFilters({
      ...filter,
      [e.target.name]:value
    }
    )
  }

    console.log(filter)

   
  
  return (
    <Container>
      <Annoucements />
      <Navbar />
      <Title></Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select name="color" onChange={filterHandler}>
            <Option  disabled>
              Color
            </Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>yellow</Option>
            <Option>green</Option>
            <Option>grey</Option>
          </Select>

          <Select name="size" onChange={filterHandler}>
            <Option defaultValue disabled>
              {" "}
              Size
            </Option>
            <Option>Xs</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXl</Option>
          </Select>
        </Filter>

        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select onChange={(e)=> setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="dsc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filter={filter} sort={sort} />
      <Newsletter />
      <Footer />
   
    </Container>
  );
}
