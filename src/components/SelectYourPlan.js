import React from "react";
import styled from "styled-components";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

const SelectYourPlan = () => {
  return (
    <Container>
      <h1> Select your plan</h1>
      <Subtitle>You have the option of monthly or yearly billing.</Subtitle>
      <Flex>
        <Arcade imgUrl={arcade}>
          <Title>Arcade</Title> <Price>$9/mo</Price>
        </Arcade>
        <Advanced imgUrl={advanced}>
          <Title>Advanced</Title>
          <Price>$12/mo</Price>{" "}
        </Advanced>
        <Pro imgUrl={pro}>
          {" "}
          <Title>Pro</Title>
          <Price>$15/mo</Price>{" "}
        </Pro>
      </Flex>
      <SwitchBar>
        <Left>Monthly</Left>
        <Switch>
          <label class="switch">
            <input type="checkbox"></input>
            <span class="slider"></span>
          </label>
        </Switch>
        <Right>Yearly</Right>
          </SwitchBar>
          <GoBack>Go Back</GoBack>
          <Submit><button type='submit'></button></Submit>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid red;
  position: relative;
  top: -93%;
  left: 35%;
  width: 60%;
  text-indent: 20%;
`;

const Subtitle = styled.div`
  margin-top: -1.5%;
  color: hsl(231, 11%, 63%);
`;

const Arcade = styled.div`
  border: 1px solid gray;
  flex-basis: 8vw;
  margin: 0vh 3vh;
  height: 20vh;
  background-position: 2vh 1vw;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imgUrl});
  border-radius: 0.8em;
`;
const Advanced = styled(Arcade)``;
const Pro = styled(Arcade)``;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid red;
  margin-top: 4vh;
`;
const Price = styled.div`
  font-size: 0.8em;
  margin-left: -1vh;
  margin-top: 0.5vh;
  color: hsl(231, 11%, 63%);
`;
const Title = styled.div`
  margin-top: 14vh;
  margin-left: -1vh;
`;
const SwitchBar = styled.div`
  border: 1px solid blue;
  margin-top: 4vh;
  padding: 2.5vh;
`;
const Left = styled.div`
  position: relative;
  top: -2vh;
  left: 3vw;
`;
const Right = styled.div`
  position: relative;
  top: -9vh;
  left: 14vw;
`;
const Switch = styled.div`
  position: relative;
  top: -5vh;
  left: 8vw;
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    // height: 1vh;
    // top: -10vh;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
// const Ball = styled.div``;
const GoBack = styled.div`
`;
const Submit = styled.button`
`;
export default SelectYourPlan;
