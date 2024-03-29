import styled from "styled-components";
import Annoucements from "../components/Annoucements";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useState, useEffect } from "react"
import axios from "axios";
import { useLocation } from "react-router";
import { publicRequest } from "../../requestMethods";
// import { Button } from "@mui/material";

const Container = styled.div`
`

const Wrapper = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 0.8rem;
  ${mobile({ flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: contain;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 0.3rem;
`;
const Title = styled.p`
  font-weight: 200;
  font-size: 2rem;
`;
const Desc = styled.p``;
const Price = styled.span`
  font-size: 2rem;
  font-weight: 50;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  ${mobile({ width: "100%", justifyContent: "space-between" })}
  /* gap: 2rem; */
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.p`
  padding-right: 0.5rem;
  font-size: 1rem;
  font-weight: 200;
`;

const FilterColor = styled.div`
  border-radius: 50%;
  margin: 0.1rem;
  padding: 0.1rem;
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;
const FilterSizeWrap = styled.div`
display: flex;`

const FilterSize = styled.select`
  padding: 0 .5rem;

`;

const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  ${mobile({ width: "100%", justifyContent: "space-between" })}
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center; 
    gap:.5rem;   
`;
const Amount = styled.span`
    font-weight:400;
    width: 1.5rem;
    height:1.5rem;
    border-radius: .5rem;
    border:1px solid teal;
    text-align:center;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Button = styled.button`
    padding:.8rem;
    border:1px solid teal;
    background-color: white;
    border-radius: .2rem;
    /* margin-left:.5rem; */
    cursor:pointer;
    transition: all 1s ease-in;
    /* font-weight: 400; */

    &:hover{
        background-color:teal;
    }
`;

export default function Products() {
  // use useLocation hook to get the id from the url
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  console.log(id)
  const [product, setProduct] = useState({})
  const [productQty, setProductQty] = useState(1)

  const incrementHandler = () => {
    setProductQty(prevProductQty => prevProductQty + 1)
  }
  const decreamentHandler = () => {
    if(productQty<2){
      product=1
    }
    setProductQty(prevProductQty => prevProductQty - 1)
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`)
        setProduct(res.data)
        console.log(res)

        console.log(product);

      }
      catch (err) {
        console.log("error with fecthing productsv" + err)
      }

    }
    getProducts()
  }, [id])

  return (
    <Container>
      <Annoucements />
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>$ {product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Color</FilterTitle>
              {
                product.color ? product.color.map(c => (

                  <FilterColor color={c} key={c} />
                )) :" "
                }

            </Filter>

            <FilterSizeWrap>
              <FilterTitle> Size</FilterTitle>
              <FilterSize>
                {
                  product.color ? product.size.map(size => (
                    <FilterSizeOption key={size}>{size}</FilterSizeOption>

                  )) : ''
                }
                
              </FilterSize>
            </FilterSizeWrap>

          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={decreamentHandler}/>
              <Amount>{productQty}</Amount>
              <Add onClick={incrementHandler} />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
}
