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
import {tablet,mobile} from "./../responsive"

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${mobile({flexDirection:"column",gap:"1.5rem", marginTop:"1rem", padding:"1rem"})}
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
  ${mobile({fontSize:"1.2rem"})}
  ${tablet({fontSize:"1.2rem"})}
`;
const Desc = styled.div`
  line-height: 2.5rem;
  ${mobile({fontSize:".8rem", margin:".2rem 0"})}
  ${tablet({fontSize:".8rem", margin:".2rem 0"})}
`;
const Center = styled.div`
  /* ${tablet({display:"none"})} */
  flex: 1;
`;
const Title = styled.h3`
  font-size: 2rem;
  ${mobile({fontSize:"1.2rem"})}
  ${tablet({fontSize:"1.2rem"})}
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
  ${mobile({fontSize:".5rem"})}
  ${tablet({fontSize:".5rem"})}
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
  ${mobile({width:"1rem", height:"1rem", padding:".5rem" })}
  ${tablet({width:"1rem", height:"1rem", padding:".5rem" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column;
  align-self:"end";
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
 cursor:pointer;
  margin-bottom: 1rem;
  ${mobile({fontSize:".5rem"})};
  ${tablet({fontSize:".5rem"})};
  
`;
const ContactText=styled.p`
  cursor: pointer;


`

const PaymentMethod=styled.div`
display: flex;
/* justify-content: center; */
align-items:"center";
/* ${mobile({alignItems:"center"})}
${tablet({alignItems:"center"})} */
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
