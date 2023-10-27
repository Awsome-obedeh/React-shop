import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annoucements from "../components/Annoucements";
import Products from "../components/products";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
// import { Select } from "@mui/material";

const Container = styled.div``;

const Title = styled.h1``;
const FilterContainer = styled.h1`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 1.2rem;
`;
const Select = styled.select`
padding:.6rem;
margin-right: .5rem;

`;
const Option = styled.option``;

export default function ProductList() {
  return (
    <Container>
      <Annoucements />
      <Navbar />
      <Title></Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option selected disabled>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
            <Option>Grey</Option>
          </Select>

          <Select>
            <Option selected disabled>
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
          <FilterText>
            Sort Products
          </FilterText>
          <Select>
            <Option selected >Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
}
