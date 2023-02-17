import React, { useEffect, useState } from "react";
import styled from "styled-components";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

const SelectYourPlan = () => {
  const [toggle, setToggle] = useState(0);
  const [init, setInit] = useState(true);
  useEffect(() => {
    // console.log("UseEffect "+toggle);
    console.log(toggle);
    if (toggle === 0) {
      document.getElementsByClassName('ball')[0].style.marginLeft = "0vw";
      document.getElementById('left').style.color = "hsl(213, 96%, 18%)";
      document.getElementById('right').style.color = "hsl(231, 11%, 63%)";
      document.getElementsByClassName('arcade')[0].lastElementChild.textContent = "$9/year";
      document.getElementsByClassName('advanced')[0].lastElementChild.textContent = "$12/year";
      document.getElementsByClassName('pro')[0].lastElementChild.textContent = "$15/year";
      if (init === false) {
        document.getElementsByClassName('arcade')[0].removeChild(document.getElementById('arcade-content'));
        document.getElementsByClassName('advanced')[0].removeChild(document.getElementById('advanced-content'));
        document.getElementsByClassName('pro')[0].removeChild(document.getElementById('pro-content'));
      }
    }
    else {
      document.getElementsByClassName("ball")[0].style.marginLeft = "1vw";
      document.getElementById("right").style.color = "hsl(213, 96%, 18%)";
      document.getElementById("left").style.color = "hsl(231, 11%, 63%)";

      let addData = document.createTextNode("2 months free");
      let addDataElement = document.createElement("p");
      addDataElement.appendChild(addData);
      // console.log(document.getElementById('arcade'));
      // console.log(document.getElementById('advanced'));
      // console.log(document.getElementById('pro'));
      // document.getElementById('arcade').appendChild(addDataElement);
      // document.getElementById('advanced').appendChild(addDataElement);
      // document.getElementById('pro').appendChild(addDataElement);
      document.getElementsByClassName('arcade')[0].lastElementChild.textContent = "$90/year";
      document.getElementsByClassName('arcade')[0].appendChild(addDataElement);
      document.getElementsByClassName('arcade')[0].lastElementChild.id = 'arcade-content';
      document.getElementsByClassName('advanced')[0].lastElementChild.textContent = "$120/year";
      document.getElementsByClassName('advanced')[0].appendChild(addDataElement);
      document.getElementsByClassName('advanced')[0].lastElementChild.id = 'advanced-content';
      document.getElementsByClassName('pro')[0].lastElementChild.textContent = "$150/year";
      document.getElementsByClassName('pro')[0].appendChild(addDataElement);
      document.getElementsByClassName('pro')[0].lastElementChild.id = 'pro-content';

    }
  }, [toggle]);
  const handleClick = () => {
    if (toggle === 0) {
      setToggle(1);
      setInit(false);
    } else {
      setToggle(0);
    }
  };
  return (
    <Container>
      <h1> Select your plan</h1>
      <Subtitle>You have the option of monthly or yearly billing.</Subtitle>
      <Flex>
        <Arcade imgUrl={arcade} className="arcade">
          <Title>Arcade</Title> <Price>$9/mo</Price>
        </Arcade>
        <Advanced imgUrl={advanced} className="advanced">
          <Title>Advanced</Title>
          <Price>$12/mo</Price>
        </Advanced>
        <Pro imgUrl={pro} className="pro">
          <Title>Pro</Title>
          <Price>$15/mo</Price>
        </Pro>
      </Flex>
      <SwitchBar>
        <Left id="left">Monthly</Left>
        <Switch onClick={handleClick}>
          <Ball className="ball"></Ball>
        </Switch>
        <Right id="right">Yearly</Right>
      </SwitchBar>
      <GoBack>Go Back</GoBack>
      <Next>Next Step</Next>
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

const Subtitle = styled.div`
  margin-top: -1.5%;
  margin-left: -18%;
  color: hsl(231, 11%, 63%);
`;

const Arcade = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  flex-basis: 8vw;
  margin: 0vh 3vh;
  // height: 20vh;
  background-position: 2vh 1vw;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imgUrl});
  border-radius: 0.8em;
  &:hover {
    border: 1px solid hsl(243, 100%, 62%);
    cursor: pointer;
    background-color: hsla(228, 100%, 84%, 0.1);
  }
`;
const Advanced = styled(Arcade)``;
const Pro = styled(Arcade)``;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  // border: 1px solid red;
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
  // border: 1px solid blue;
  margin-top: 4vh;
  margin-left: 1.4vw;
  background-color: hsl(217, 100%, 97%);
  width: 30vw;
  border-radius: 0.5em;
  box-sizing: border-box;
  padding: 0;
`;
const Left = styled.div`
  position: relative;
  top: 2.6vh;
  left: 9vw;
  width: fit-content;
  text-indent: 0;
  color: hsl(213, 96%, 18%);
`;
const Right = styled.div`
  position: relative;
  top: -2.7vh;
  left: 17vw;
  width: fit-content;
  text-indent: 0;
  // color: hsl(213, 96%, 18%);
  color: hsl(231, 11%, 63%);
`;
const Switch = styled.div`
  border: 1px solid black;
  width: 2vw;
  padding: 0.2em;
  border-radius: 1em;
  margin-left: 45%;
  background-color: hsl(213, 96%, 18%);
  &:hover {
    cursor: pointer;
    // background-color: #ffffff;
  }
`;
const Ball = styled.div`
  // display: inline-block;
  background-color: white;
  width: 0.75vw;
  height: 0.75vw;
  border-radius: 100%;
  border: 1px solid white;
  transition: all 0.275ms cubic-bezier(0.25, 0.46, 0.45, 0.8);
`;
const GoBack = styled.div`
  // border: 1px solid red;
  width: 5vw;
  margin-top: 12vh;
  color: hsl(231, 11%, 63%);
  font-weight: 500;
  &:hover {
    color: hsl(213, 96%, 18%);
    cursor: pointer;
    font-weight: 900;
  }
`;
const Next = styled.div`
  // border: 1px solid red;
  margin-left: 25vw;
  margin-top: -4.5vh;
  padding: 1em;
  width: 5vw;
  text-indent: 0;
  text-align: center;
  border-radius: 0.5em;
  font-weight: 400;
  background-color: hsl(213, 96%, 18%);
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
export default SelectYourPlan;
