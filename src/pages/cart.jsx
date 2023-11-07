import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Annoucements from "../components/Annoucements";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  text-transform: uppercase;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
`;

const TopButton = styled.button`
  padding: 0.8rem;
  font-weight: 600;
  border: ${(props) => props.type == "filled" && "none"};
  background-color: ${(props) =>
    props.type == "filled" ? "rgb(23, 12, 12,.7)" : "transparent "};
  color: ${(props) => (props.type == "filled" ? "white" : "")};
  cursor: pointer;
  ${(mobile({padding:".8rem .2rem"}))}
`;

const TopTexts = styled.div`
   
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
  margin: 0 0.6rem; ${mobile({display:"none"})};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${(mobile({flexDirection:"column"}))}
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection:"column"})}
`;

const Hr = styled.hr`
  background-color: #eeee;
  height: 1px;
  border: none;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const ImageHolder = styled.div`
  border-right: 1px solid teal;
  border-top: 1px solid teal;
  border-right: 1px solid teal;
  position: relative;
  margin-top: 0.9rem;
`;
const Image = styled.img`
  width: 12.5rem;
  height: 10rem;
  margin-right: 1rem;
  margin-top: 1rem;
  /* position:absolute; */
`;
const Details = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${mobile({flexDirection:"column"})}
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.div``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;
const ProductAmount = styled.div`
  font-size: 1.3rem;
  /* margin:1rem; */
`;
const ProductPrice = styled.div``;

const Summary = styled.span`
  border: 0.3px solid lightblue;
  flex: 1;
  border-radius: 0.8rem;
  padding: 1.2rem;
  height: 50vh;
  margin-top: 1rem;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 1.4rem 0px; 
  display: flex;
  justify-content: space-between;

  /* gap:.1rem */
`;
const SummaryItemText = styled.span`
  font-weight: ${(props) => props.type == "total" && "200"};
  font-size: ${(props) => props.type === "total" && "1.4rem"};
`;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
  width: 100%;
  border: 0;
  background-color: teal;
  padding: 1.5rem 0.5rem;
  border-radius: 3px;
  color: white;
  font-weight: 700;
`;

export default function Cart() {
  return (
    <Container>
      <Navbar />
      <Annoucements />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>

          <TopText>
            <TopText>Shooping Bag(2)</TopText>
            <TopText>WishList (0)</TopText>
          </TopText>

          <TopButton type="filled">CHECHKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <ImageHolder>
                  <Image src="https://images.unsplash.com/photo-1577543584588-da8f359a32aa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGZhc2hpb24lMjBnaXJsfGVufDB8fDB8fHww" />
                </ImageHolder>
                <Details>
                  <ProductName>
                    <b>Product:</b> Split-Jean
                  </ProductName>
                  <ProductId>
                    <b>ID :</b> 23457778
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size :</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                  <ProductPrice>$ 30</ProductPrice>
                </ProductAmountContainer>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <ImageHolder>
                  <Image src="https://images.unsplash.com/photo-1672909777646-fc4b41387927?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D" />
                </ImageHolder>
                <Details>
                  <ProductName>
                    <b>Product:</b> Split-Jean
                  </ProductName>
                  <ProductId>
                    <b>ID :</b> 23457778
                  </ProductId>
                  <ProductColor color="lightblue" />
                  <ProductSize>
                    <b>Size :</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                  <ProductPrice>$ 30</ProductPrice>
                </ProductAmountContainer>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>

            <SummaryItem>
              <SummaryItemText>Sub Total </SummaryItemText>
              <SummaryItemPrice>$ 70 </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping </SummaryItemText>
              <SummaryItemPrice>$ 6.80 </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount </SummaryItemText>
              <SummaryItemPrice>$ 6.80 </SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText type="total">Total </SummaryItemText>
              <SummaryItemPrice>$ 82.16 </SummaryItemPrice>
            </SummaryItem>
            <SummaryButton>CheckOut</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}
