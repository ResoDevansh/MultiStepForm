import React, { useEffect, useState } from "react";
import styled from "styled-components";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";


const SelectYourPlan = ({setPlanTime,showYearly,clickedItems,setClickedItems}) => {
  // const [showYearly, setYearly] = useState(false);
  // console.log(clickedItems);
  const handleClick = () => {
    // setYearly((yearly) => !yearly);
    setPlanTime(showYearly);
  };
  const clickCard = (v) => {
    let tempClicked = clickedItems.slice();
    for (let i = 0; i < 3; i++){
      if (i !== v) {
        tempClicked[i] = false;
      }
    }
    tempClicked[v] = true;
    setClickedItems(tempClicked);
  }
  return (
    <Container>
      <h1> Select your plan</h1>
      <Subtitle>You have the option of monthly or yearly billing.</Subtitle>
      <Flex>
        <Arcade imgUrl={arcade} onClick={() => { clickCard(0) }} clicked={clickedItems[0]}>
          <Title>Arcade</Title>{" "}
          <Price>{showYearly ? "$90/year" : "$9/month"}</Price>
          {showYearly && <p style={{ marginLeft: '-.4em' , fontSize: '.9em'}}>2 months free</p>}
        </Arcade>
        <Advanced imgUrl={advanced} className="advanced" onClick={() => { clickCard(1) }} clicked={clickedItems[1]}>
          <Title>Advanced</Title>
          <Price>{showYearly ? "$90/year" : "$9/month"}</Price>
          {showYearly && <p style={{ marginLeft: '-.4em', fontSize: '.9em'}}>2 months free</p>}
        </Advanced>
        <Pro imgUrl={pro} className="pro" onClick={() => { clickCard(2) }} clicked={clickedItems[2]}>
          <Title>Pro</Title>
          <Price>{showYearly ? "$150/year" : "$15/month"}</Price>
          {showYearly && <p style={{ marginLeft: '-.4em' , fontSize: '.9em'}}>2 months free</p>}
        </Pro>
      </Flex>
      <SwitchBar>
        <Left id="left" color={showYearly}>Monthly</Left>
        <Switch onClick={handleClick}>
          <Ball className="ball" showYearly={showYearly}></Ball>
        </Switch>
        <Right id="right" color={showYearly}>Yearly</Right>
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
  border: ${props=>props.clicked===false?'1px solid rgba(0, 0, 0, 0.2)':'1px solid rgba(0, 0, 0, 1)'};
  // color: hsl(228, 100%, 84%);
  flex-basis: 8vw;
  margin: 0vh 3vh;
  height: 25vh;
  background-position: 2vh 1vw;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imgUrl});
  border-radius: 0.8em;
  font-weight: bolder;
  &:hover {
    border: 1px solid hsl(243, 100%, 62%);
    cursor: pointer;
    background-color: hsla(228, 100%, 84%, 0.1);
  }
`;
const Advanced = styled(Arcade)`
`;
const Pro = styled(Arcade)`
`;
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
  color: hsl(243, 100%, 62%);
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
  color: ${props => props.color ? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)" };
`;
const Right = styled.div`
  position: relative;
  top: -2.7vh;
  left: 17vw;
  width: fit-content;
  text-indent: 0;
  color: ${props => props.color ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"};
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
  position: relative;
  left:${props=>props.showYearly?'1.25em':'0'};
`;
const GoBack = styled.div`
  // border: 1px solid red;
  width: 5vw;
  margin-top: 6vh;
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
