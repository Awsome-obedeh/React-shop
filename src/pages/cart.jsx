import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Annoucements from "../components/Annoucements";
import Product from "../components/product";

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
  background-color: ${(props) => props.type == "filled" ? "rgb(23, 12, 12,.7)" : "transparent "};
  color: ${(props) => props.type == "filled" ? "white" : ""};

  cursor: pointer;
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  font-weight: 500;
  margin: 0 0.6rem;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Info = styled.div`
    flex:3;
    background-color:green;
`

const
const Summary = styled.div`
    flex:1;
    background: #000;
`

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
                                <Image src="https://images.unsplash.com/photo-1672909777646-fc4b41387927?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMGdpcmx8ZW58MHx8MHx8fDA%3D" />
                                <Details>
                                    <ProducName><b>Product :</b> SPLIT JEANS</ProducName>
                                    <ProductId><b>Product :</b> 23457778</ProductId>
                                    <ProducColor />
                                    <ProductSize><b>Size :</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                        </Product>
                        <PriceDetail>
                            price
                        </PriceDetail>


                    </Info>
                    <Summary>Summary</Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    );
}
