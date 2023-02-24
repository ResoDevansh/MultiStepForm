import React from "react";
import styled from "styled-components";
import pic from "../assets/images/icon-thank-you.svg";

const End = () => {
  return (
    <Container>
      <Logo imgUrl={pic} />
      <Content>
        <h1>Thank you!</h1>
        <p>
          {/* {" "} */}
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  // border: 2px solid red;
  position: relative;
  top: -93%;
  left: 35%;
  width: 60%;
  text-indent: 20%;
  h1 {
    margin-left: -18%;
  }
`;
const Logo = styled.div`
  background-image: url(${(props) => props.imgUrl});
  height: 20vh;
  width: 10vw;
  text-align: center;
  margin: auto;
  margin-top: 12vh;
//   border: 2px solid red;
  background-repeat: no-repeat;
  background-position: center;
`;
const Content = styled.div`
//   border: 2px solid brown;
  position: relative;
  left: 10%;
  top: 3vh;
  text-align: center;
  margin-top: -4vh;
  width: 26vw;
  text-indent: 0;
  color: hsl(231, 11%, 63%);
  h1{
    color: initial; 
    margin: auto;
    font-weight: 900;   
  }
`;
export default End;
