import styled from "styled-components"
import StripeCheckout from "react-stripe-checkout"


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
    const KEY=import.meta.env.VITE_API_KEY

    return(
        <Container>
            {/* enclose the pay button with stripe component */}
            <StripeCheckout
                name="AwsomeShop"
                billingAddress
                shippingAddress
                description="Your Total is 27,000 Ngn"
                amount={270000}
                // token={onToken}
                stripeKey={KEY}
            >

            <Button>Pay</Button>
            
            </StripeCheckout>
            

        </Container>

    )
}