import React from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
function CheckoutForm() {
  const [isPaymentLoading, setPaymentLoading] = React.useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const payMoney = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setPaymentLoading(true);
    const clientSecret = 'pi_1FpUmEKZaRsxp2y4c9OPoTjM_secret_tv9tsgAQbAlNRYqm8MAzmYPuE';
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "Faruq Yusuff",
        },
      },
    });
    setPaymentLoading(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success!");
      }
    }
  };
  return (
    <div
      style={{
        padding: "3rem",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <form
          style={{
            display: "block",
            width: "100%",
          }}
          onSubmit = {payMoney}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardElement
              className="card"
              options={{
                style: {
                  base: {
                    backgroundColor: "white"
                  } 
                },
              }}
            />
            <button
              className="pay-button"
              disabled={isPaymentLoading}
            >
              {isPaymentLoading ? "Loading..." : "Pay"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
function Payment() {
  const stripe = loadStripe("pk_test_*****");
  return (
    <div>
      <Elements stripe={stripe}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}

export default Payment;
