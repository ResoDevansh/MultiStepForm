import React from "react";
import styled from "styled-components";

const MonthlyAddons = () => {
  return (
    <Container>
      <Title>
        <h1>Pick add-ons</h1>
      </Title>
      <Subtitle>Add-ons help enhance your gaming experience.</Subtitle>
      <Flex>
        <FlexItem>
          <input type="checkbox" id="online-service"></input>
          <div id="label">
            <div id="title">Online service</div>
            <div id="subtitle">Access to multiplayer games</div>
            <div id="price">+$1/mo</div>
          </div>
        </FlexItem>
        <FlexItem>
          <input type="checkbox" id="larger-storage"></input>
          <div id="label">
            <div id="title">Larger storage</div>
            <div id="subtitle">Extra 1TB of cloud save</div>
            <div id="price">+$2/mo</div>
          </div>
        </FlexItem>
        <FlexItem>
          <input type="checkbox" id="customisable-profile"></input>
          <div id="label">
            <div id="title">Customizable Profile</div>
            <div id="subtitle">Custom theme on your profile</div>
            <div id="price"> +$2/mo</div>
          </div>
        </FlexItem>
      </Flex>
      <GoBack>Go Back</GoBack>
      <Next>Next Step</Next>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  top: -93%;
  left: 35%;
  width: 60%;
  text-indent: 20%;
  h1 {
    margin-left: -18%;
  }
`;
const Title = styled.div`
`;
const Subtitle = styled.div`
  margin-top: -1.5%;
  margin-left: -18%;
  color: hsl(231, 11%, 63%);
`;
const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
const FlexItem = styled.div`
  overflow: hidden;
  width: 30vw;
  cursor: pointer;
  margin-top: 1em;
  padding: 1em;
  border: 2px solid hsl(231, 11%, 63%);
  border-radius: 0.5em;
  input {
    margin-left: -5em;
    margin-top: 1em;
    transform: scale(1.5);
    position: relative;
    z-index: +100;
    border: 2px solid green;
  }
  #label {
    display: inline-block;
  }
  #title {
    margin-top: -2.5em;
    margin-left: -5em;
    font-weight: bolder;
    color: hsl(213, 96%, 18%);
  }
  #subtitle {
    color: hsl(231, 11%, 63%);
    margin-left: -5.6em;
    margin-top: 0.3em;
    font-size: 0.9em;
  }
  #price {
    margin-left: 27em;
    margin-top: -1.7em;
    font-size: 0.9em;
    color: hsl(243, 100%, 62%);
    font-weight: bolder;
  }
  &:hover {
    border: 2px solid hsl(243, 100%, 62%);
    background-color: hsla(228, 100%, 84%, 0.1);
  }
`;
const GoBack = styled.div`
  margin-top: 13vh;
  width: 5em;
  color: hsl(231, 11%, 63%);
  font-weight: 500;
  &:hover {
    color: hsl(213, 96%, 18%);
    cursor: pointer;
    font-weight: 900;
  }
`;
const Next = styled.button`
  margin-left: 25vw;
  position: relative;
  top: -3em;
  padding: 1em;
  width: 7vw;
  text-align: center;
  border-radius: 0.5em;
  font-weight: 400;
  background-color: hsl(213, 96%, 18%);
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
export default MonthlyAddons;
