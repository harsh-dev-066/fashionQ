import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { SelectCurrentUser } from "../../redux/user/user-selector";

const StripeCheckoutButton = ({ price, currentUser }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_XIri3Og1WxHrDyerZkovLw5d00jDPsTs02";

  // const onToken = async (token) => {
  //   axios({
  //     url: "payment",
  //     method: "post",
  //     data: {
  //       amount: priceForStripe,
  //       token: token,
  //     },
  //   })
  //     .then((response) => {
  //       alert("succesful payment");
  //     })
  //     .catch((error) => {
  //       console.log("Payment Error: ", error.response);
  //       alert(
  //         "There was an issue with your payment! Please make sure you use the provided credit card."
  //       );
  //     });
  // };

  const onToken = () => {
    alert("succesful payment");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name=""
      billingAddress
      shippingAddress
      currency="INR"
      description={`Your total is Rs.${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      disabled={!currentUser}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
});

export default connect(mapStateToProps)(StripeCheckoutButton);
