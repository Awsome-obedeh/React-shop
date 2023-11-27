import styled from "styled-components"
import StripeCheckout from "react-stripe-checkout"
import { useNavigate } from "react-router"
import axios from  'axios'
import { useEffect,useState } from "react"


const Container=styled.div`
width:100%;
    height:100vh;
    display: flex;  
     align-items:center;
    justify-content: center;
 
`
const Button=styled.button`
    padding: .5rem 1.5rem;
    border:none;
    color:white;
    background-color:green;
    border-radius: 3px;
    width:max-content;
    /* margin:auto ;
    display: block; */
`

export default function Pay(){
    const navigate=useNavigate()
    const [stripeData, setStripeData]=useState(null)
    const KEY=import.meta.env.VITE_API_KEY
    const onToken=(token)=>{
        setStripeData(token)
        console.log(token);
        // got to success page
        navigate('/success')

    }

    // post stripe details function
    const postPayment=async ()=>{
        try{

            let res=await  axios.post('http://localhost:2000/api/checkout/payment/',{
                 tokenId:stripeData.id,
                 amount:270000
             })
             if(res){
                 console.log('payment successfull');
             }
           res=await res.json
           console.log(res);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        // call the postPayment when stripeData is set
        stripeData && postPayment()
    },[stripeData])

    return(
        <Container>
            {/* enclose the pay button with stripe component */}
            <StripeCheckout
                name="AwsomeShop"
                billingAddress
                shippingAddress 
                currency="NGN"
                amount={270000}
                description="total Amount"
                token={onToken}
                stripeKey={KEY}
            
            >

            <Button>Pay</Button>
            
            </StripeCheckout>
            

        </Container>

    )
}