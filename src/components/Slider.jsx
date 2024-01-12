import styled from 'styled-components'
import {useState} from'react'
import {BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill } from "react-icons/bs";
import { ArrowBack, ArrowCircleLeft, ArrowLeftOutlined, ArrowRightAltOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { mobile, tablet } from '../responsive';

const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    // background:coral;
    position:relative;
    ${tablet({display:"none"})};
    
    overflow:hidden;
`;

const Arrow =styled.div`
    width:3.2rem;
    height:3.2rem;
    background-color:#8C8C8C;
    border-radius:50%;
    color:black;
    display:flex;
    justify-content:center;
    align-items:center;
    top:0;
    bottom:0;
    margin:auto;
    position:absolute;
    left:${(props)=> props.direction=='left' && '10px'};
    right:${(props)=> props.direction=='right' && '10px'};
    opacity:.5;
    z-index:2;
`;
const Wrapper=styled.div`
    height:100%;
    width:fit-content;

    display:flex;  
      /*remember to undo  */
 /* transform:translateX(${props=> props.slideindex * -100}vw); */
 transition:all 2s ease;
`;

const Slide=styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color:${props=>props.bg};
    // justify-content:space-between;
    // gap:1 rem;


   
  
`;

const ImgContainer=styled.div`
    height:400px;
    width:400px;
    flex:1;
    
`

const Image=styled.img`
width:100%;
height:100%;
  object-position: center;
  


`
const ImgBg=styled.div`
//    background:url(https://res.cloudinary.com/dvl2juial/image/upload/v1695827345/AwsomeShop/slide-01_mztfft.jpg)
    height: calc(100vh - 40px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
`
const InfoContainer=styled.div`
    flex:1;
    padding:3rem;
    
`
const Title=styled.h1`
    font-size:4.2rem;
    text-transform:Uppercase;
    font-family:urbanist ;   

`
const Desc=styled.p`
    font-size:2rem;
    font-weight:300;
    font-family:Urbanist;
    letter-spacing:.05rem;
    margin:3rem 0px;

`
const Button=styled.button`
    border:0;
    border-radius:.3rem;
    padding:1.25rem 2.5rem;
    cursor:pointer;


`

export default function Slider(){
    const [slideIndex, setSlideIndex]=useState(0);
  const clickHandler= (direction)=>{
      if(direction ==='left'){
        setSlideIndex(slideIndex>0 ? slideIndex-1 : 3)
      }

      else{
        setSlideIndex(slideIndex < 3 ? slideIndex +1: 0 )
      }
  }
    return<>
    <Container>

         
        <Arrow direction='left' >
            <ArrowLeftOutlined onClick={()=>clickHandler('left')} stye={{color:'white'}} />
               
        </Arrow>
        <Wrapper slideindex={slideIndex}>
            <Slide bg='#f5fafd'>
                <ImgContainer>
                {/* <ImgBg style={{background:'url(https://res.cloudinary.com/dvl2juial/image/upload/v1695827345/AwsomeShop/slide-01_mztfft.jpg)'}} /> */}
                    <Image src='https://img.freepik.com/free-photo/woman-with-shopping-bags-studio-yellow-background-isolated_1303-14294.jpg?size=626&ext=jpg&ga=GA1.1.343012164.1674420372&semt=ais'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Winter Sale is Here</Title>
                    <Desc>Get the best Wears for the best Prices
                    Don't play!! </Desc>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>

            <Slide  bg='#fcf1ed'>
                <ImgContainer> 
                    <Image src='https://res.cloudinary.com/dvl2juial/image/upload/v1695827369/AwsomeShop/slide-05_pxowle.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Best Selling</Title>
                    <Desc>Get the best Wears for the best Prices
                    Don't play!! </Desc>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>


            <Slide  bg='#f1d7cb'>
                <ImgContainer>
                    <Image src='https://res.cloudinary.com/dvl2juial/image/upload/v1695827345/AwsomeShop/slide-01_mztfft.jpg'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>BEST WEARS</Title>
                    <Desc>Get the best Wears for the best Prices
                    Don't play!! </Desc>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
            <Slide  bg='#f3f3f3'>
                <ImgContainer>
                    <Image src='https://img.freepik.com/free-photo/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated_231208-5946.jpg?size=626&ext=jpg&ga=GA1.1.343012164.1674420372&semt=ais'/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Thrift Sales</Title>
                    <Desc>Get the best Wears for the best Prices
                    Don't play!! </Desc>
                    <Button>Shop Now</Button>
                </InfoContainer>
            </Slide>
            
        </Wrapper>
       

        <Arrow direction='right'>
   
               <ArrowRightOutlined onClick={()=>clickHandler('right')} />
        </Arrow>
            
          
     

       
    </Container>

    </>




    /* image url's

    https://img.freepik.com/free-photo/full-length-portrait-happy-excited-girl-bright-colorful-clothes-holding-shopping-bags-while-standing-showing-peace-gesture-isolated_231208-5946.jpg?size=626&ext=jpg&ga=GA1.1.343012164.1674420372&semt=ais
    https://img.freepik.com/free-photo/woman-with-shopping-bags-studio-yellow-background-isolated_1303-14294.jpg?size=626&ext=jpg&ga=GA1.1.343012164.1674420372&semt=ais
    https://img.freepik.com/free-photo/medium-shot-woman-posing-with-hat_23-2149157714.jpg?size=626&ext=jpg&ga=GA1.1.343012164.1674420372&semt=ais
    https://img.freepik.com/free-photo/attractive-african-american-female-posing-near-wall_181624-36486.jpg?size=626&ext=jpg&ga=GA1.1.343012164.1674420372&semt=ais
    https://img.freepik.com/free-photo/portrait-young-handsome-male_23-2148884401.jpg?size=626&ext=jpg&ga=GA1.2.343012164.1674420372&semt=ais
    https://img.freepik.com/free-photo/luxury-black-woman-with-beautiful-wavy-hairs-golden-shiny-dress-posing-party-mood_273443-4009.jpg?size=626&ext=jpg&ga=GA1.1.343012164.1674420372&semt=ais
    https://img.freepik.com/premium-photo/young-woman-wearing-orange-dress-with-turban-ethnic-jewelry_273443-4389.jpg?size=626&ext=jpg&ga=GA1.2.343012164.1674420372&semt=ais
    https://img.freepik.com/free-photo/medium-shot-cool-woman-posing_23-2149068957.jpg?size=626&ext=jpg&ga=GA1.2.343012164.1674420372&semt=ais
    https://img.freepik.com/premium-photo/young-woman-wearing-orange-dress-with-turban-ethnic-jewelry_273443-4389.jpg?size=626&ext=jpg&ga=GA1.2.343012164.1674420372&semt=ais
*/
}