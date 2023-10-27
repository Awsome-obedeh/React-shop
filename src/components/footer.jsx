import {
  Facebook,
  LinkedIn,
  WhatsApp,
  Twitter,
  Room,
  Phone,
  Mail,
} from "@mui/icons-material";
import { FaCcMastercard, FaCcVisa, FaPaypal } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  font-size: 2.3rem;
  font-weight: bolder;
  margin-top: 0.5rem;
`;
const Desc = styled.div`
  line-height: 2.5rem;
`;
const Center = styled.div`
  flex: 1;
`;
const Title = styled.h3`
  font-size: 2rem;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 1rem;
  cursor:pointer;
`;
const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const SocialIcon = styled.div`
  width: 3rem;
  height: 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color}; /* justify-content:center; */
`;

const Right = styled.div`
  /* flex: 1; */
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
 cursor:pointer;
  margin-bottom: 1rem;
  
`
const ContactText=styled.p`
  cursor: pointer;


`

const PaymentMethod=styled.div`
display: flex;
justify-content: center;
gap:1.5rem;
    

`

export default function Footer() {
  return (
    <Container>
      <Left>
        <Logo>Awesome Shop</Logo>
        <Desc>For quality,be rest assured, Awesome shop is</Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="80c0ff">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="005a00">
            <WhatsApp />
          </SocialIcon>

          <SocialIcon color="002db3">
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Cart </ListItem>
          <ListItem>Men Wears </ListItem>
          <ListItem>Women Wears </ListItem>
          <ListItem>Accessories </ListItem>
          <ListItem>My Account </ListItem>
          <ListItem>Terms </ListItem>
          <ListItem>Wishlist </ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ paddingBottom: ".5rem" }} />
          <ContactText> everywhere</ContactText>
        </ContactItem>
        <ContactItem>
          <Phone style={{ paddingBottom: ".5rem" }} /> 
          <ContactText>+234-7010471769</ContactText>
        </ContactItem>
        <ContactItem>
          <Mail style={{ paddingBottom: ".5rem" }} />
          <ContactText> obedchidera1010@gmail.com</ContactText>
         
        </ContactItem>
        <PaymentMethod>
          <FaCcMastercard style={{color:'gold', fontSize:"2rem"}}/>
          <FaCcVisa  style={{color:'blue', fontSize:"2rem"}}/>
          <FaPaypal style={{color:'blue', fontSize:"2rem"}} />
        </PaymentMethod>
      </Right>
    </Container>
  );
}
