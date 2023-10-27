import styled from "styled-components";
import Annoucements from "../components/Annoucements";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 0.8rem;
`;

const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
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
  width: 50%;
  gap: 1rem;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.p`
  padding-right: 0.5rem;
  font-size: 1rem;
  font-weight:200;

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

const FilterSize = styled.select``;

const FilterSizeOption = styled.option``;

export default function Products() {
  return (
    <Container>
      <Annoucements />
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image src=" https://img.freepik.com/free-photo/medium-shot-cool-woman-posing_23-2149068957.jpg?size=626&ext=jpg&ga=GA1.2.343012164.1674420372&semt=ais" />
        </ImgContainer>
        <InfoContainer>
          <Title>Two Piece</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            voluptatum aspernatur? Aperiam eaque culpa mollitia laudantium
            exercitationem. Minus labore, nostrum officia maiores eligendi
            facere. Porro architecto expedita eius eveniet dolore.
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle> Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>

            <FilterSize>
              <FilterTitle> Sizeffg</FilterTitle>
              ghghghh
              <FilterSizeOption>XS</FilterSizeOption>
              <FilterSizeOption>S</FilterSizeOption>
              <FilterSizeOption>M</FilterSizeOption>
              <FilterSizeOption>L</FilterSizeOption>
              <FilterSizeOption>XS</FilterSizeOption>
            </FilterSize>
          </FilterContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
}
