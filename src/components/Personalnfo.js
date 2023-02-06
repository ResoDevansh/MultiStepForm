import React from "react";
import styled from "styled-components";

const PersonalInfo = () => {
  return (
    <Container>
      <Heading>Personal info</Heading>
      <Subtitle>
        Please provide your name, email address, and phone number.
      </Subtitle>
      <form>
        <label for="name">Name</label>
        <input type="text" placeholder="e.g. Stephen King" id="name"></input>
        <label for="email">Email Address</label>
        <input type="email" placeholder="e.g. stephenking@lorem.com" id="email"></input>
        <label for="phone-no">Phone Number</label>
        <input type="number" placeholder="e.g. +1 234 567 890" id="phone-no"></input>
        <submit>Next Step</submit>
      </form>
    </Container>
  );
};

const Heading = styled.h2`
  position: relative;
  left: 20%;
  width: 55%;
  letter-spacing: 0.1em;
  font-weight: bolder;
  font-size: 1.7em;
`;
const Subtitle = styled.div`
  position: relative;
  left: 20%;
  top: -0.8em;
  color: hsl(231, 11%, 63%);
`;
const Container = styled.div`
  width: 69%;
  position: relative;
  top: -93%;
  left: 30%;

  label {
    margin-left: 20%;
    margin-top: 3%;
    display: block;
  }

  input {
    padding: 0.8em;
    margin-left: 20%;
    margin-top: 2%;
    display: inline-block;
    width: 65%;
  }

  submit {
    padding: 2.5%;
    display: inline-block;
    background-color: hsl(213, 96%, 18%);
    color: hsl(231, 100%, 99%);
    position: relative;
    top: 3em;
    left: 28em;
    border-radius: 0.6em;
    width: 15%;
    text-align: center;
    cursor: pointer;
  }
`;
export default PersonalInfo;
