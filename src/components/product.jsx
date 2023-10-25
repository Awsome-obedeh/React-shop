import styled from "styled-components";
import { BsCartFill, BsSearch, BsFillHeartFill } from "react-icons/bs";


const Info = styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,.3);
z-index:3;
display:flex;
align-items:center;
justify-content:center;
gap:1rem;
transition:all .5s ease-in;
cursor:pointer;


`;

const Container = styled.div`
  flex: 1;
  margin: 1rem;
  min-width: 280px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
  position:relative;
  // object-fit: center;
  // obeject-size: contain;
  &:hover ${Info}{
    opacity:1

  }
`;
const Circle = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color:white;
  position:absolute;
  
`;
const Image = styled.img`
  height: 75%;
  z-index:2;
`;




const Icon=styled.div`
  width:40px;
  height:40px;
  background-color:white;
  padding:.5rem;
  border-radius:100%;
  display:flex;
  justify-content:center;
  align-items:center; 
  transition:all .5s ease; 

    &:hover {
      filter: brightness(0.85);
      transform:scale(1.1);
    }




`

export default function Product({ item }) {
  return (
    <Container>
      <Circle/>
        <Image src={item.img} />
        <Info>
          <Icon>
            <BsCartFill></BsCartFill>
          </Icon>
          <Icon>
            <BsSearch></BsSearch>
          </Icon>
          <Icon>
            <BsFillHeartFill></BsFillHeartFill>
          </Icon>
        </Info>
    
    </Container>
  );
}
