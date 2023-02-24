import React from "react";
import styled from "styled-components";

const Summary = ({ clickedItems, addons, showYearly, plans ,finished,setFinished}) => {
  let key, price;
  console.log(finished);
  for (let i = 0; i < clickedItems.length; i++) {
    if (clickedItems[i] === true) key = i;
  }
  const numberCalculator = (str) => {
    let temp = "";
    for (let i of str) {
      if (i >= "0" && i <= "9") {
        temp += i;
      }
    }
    return parseInt(temp, 10);
  };
  // let specialState = [Array(6).fill(false)];
  // if (key === 0 && showYearly === true) {
  //     specialState
  // }
  let totalPrice = 0;
  for (let i = 0; i < plans.length; i++) {
    if (showYearly === false && plans[i].clicked === "true") {
      totalPrice += numberCalculator(plans[i].price);
    }
  }
  const priceCalculator = (str) => {
    let cost = "";
    for (let v of str) {
      if (v >= "0" && v <= "9") {
        cost += v;
      }
    }
    cost += "0";
    totalPrice += parseInt(cost, 10);
    let temp = "$";
    temp += cost;
    temp += "/yr";
    cost = temp;
    // return parseInt(cost, 10);
    return cost;
  };
  for (let i = 0; i < addons.length; i++) {
    if (addons[i]) {
      plans[i].clicked = "true";
    } else plans[i].clicked = "false";
  }
  // for (let i = 0; i < plans.length; i++) {
  //   plans[0].price = '$10/yr';
  //   plans[1].price = '$20/yr';
  //   plans
  // }
  // console.log(addons);
  if (showYearly === true) {
    if (key === 0) {
      price = "$90/yr";
      totalPrice += 90;
    }
    if (key === 1) {
      price = "$120/yr";
      totalPrice += 120;
    }
    if (key === 2) {
      price = "$150/yr";
      totalPrice += 150;
    }
  } else {
    if (key === 0) {
      price = "$9/mo";
      totalPrice += 9;
    }
    if (key === 1) {
      price = "$12/mo";
      totalPrice += 12;
    }
    if (key === 2) {
      price = "$15/mo";
      totalPrice += 15;
    }
  }
  // console.log(clickedItems);
  // totalPrice += price;
  return (
    <Container>
      <Header> Finishing up</Header>
      <Subtitle> Double-check everything looks OK before confirming.</Subtitle>
      <Content>
        <Wrapper>
          <PlanName>
            {key === 0 && "Arcade"}
            {key === 1 && "Advanced"}
            {key === 2 && "Pro"}
            {showYearly === false && "(Monthly)"}
            {showYearly === true && "(Yearly)"}
            <a
              href="https://www.google.com"
              style={{ display: "block", fontSize: ".85em" }}
            >
              Change
            </a>
          </PlanName>
          <PlanCost>
            <p>{price}</p>
          </PlanCost>
        </Wrapper>
        <Line />
        <EachFeature>
          {plans.map((plan, key) => {
            if (plan.clicked === "true")
              return (
                <div key={key} className="feature">
                  <div className="title">{plan.title}</div>
                  <div className="prices">
                    {showYearly === false
                      ? plan.price
                      : priceCalculator(plan.price)}
                  </div>
                </div>
              );
          })}
        </EachFeature>
      </Content>
      <div className="totalPrice">
        <div id="first">Total(per month)</div>
        <div id="second">
          {showYearly ? `$${totalPrice}/yr` : `$${totalPrice}/mo`}
        </div>
      </div>
      <div className="footbar"><GoBack>Go Back</GoBack>
      <Next onClick={()=>setFinished(!finished)}>Confirm</Next></div>
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  //   border: 1px solid red;
  top: -93%;
  left: 35%;
  width: 60%;
  text-indent: 20%;
  h1 {
    margin-left: -18%;
  }
  .totalPrice {
    margin-top: 1.5em;
  }
  #first {
    // border: 1px solid red;
    display: inline-block;
    width: fit-content;
    text-indent: 0;
    margin-left: -1.8em;
    color: hsl(231, 11%, 63%);
  }
  #second {
    display: inline-block;
    // border: 2px solid red;
    margin-left: 7.6em;
    font-size: 1.3em;
    font-weight: 900;
    color: hsl(243, 100%, 62%);
  }
`;
const Subtitle = styled.div`
  position: relative;
  left: -7%;
  top: -0.8em;
  color: hsl(231, 11%, 63%);
`;
const Header = styled.h1`
  position: relative;
  left: 20%;
  width: 55%;
  letter-spacing: 0.1em;
  font-weight: bolder;
  font-size: 1.7em;
  letter-spacing: -0.009em;
`;
const Content = styled.div`
  //   border: 1px solid blue;
  margin-top: 3vh;
  margin-left: 4vw;
  padding-bottom: 0.5em;
  padding-top: 0.2em;
  background-color: hsla(206, 94%, 87%, 0.12);
  width: 25vw;
`;
const PlanName = styled.div`
  // border: 1px solid red;
  margin-left: -3em;
  position: relative;
  top: 0.3vh;
  left: -2.5em;
  display: inline-block;
  font-weight: bolder;
  color: hsl(213, 96%, 18%);
`;

const PlanCost = styled.div`
  //   border: 2px solid yellow;
  display: inline-block;
  position: relative;
  left: 11.5vw;
  top: -1vh;
  font-size: 0.9em;
  font-weight: bolder;
  color: hsl(213, 96%, 18%);
`;
const Wrapper = styled.div`
  padding-top: 0.8em;
  //   padding-left: 0;
  //   height: 30vh;
`;
const Line = styled.div`
  border: 0.5px solid hsla(231, 11%, 63%, 0.3);
  width: 92%;
  margin-left: 1vw;
  margin-bottom: 2em;
`;
const EachFeature = styled.div`
  // border: 2px solid red;
  font-size: 0.9em;
  // margin-bottom: 2em;
  .title {
    // border: 1px solid red;
    width: fit-content;
    text-indent: 0;
    position: relative;
    left: -4.5em;
    display: inline-block;
    color: hsl(231, 11%, 63%);
  }
  .prices {
    // border: 1px solid red;
    width: fit-content;
    position: absolute;
    right: 8.5em;
    font-weight: 800;
    font-size: 0.9em;
    display: inline-block;
    color: hsl(213, 96%, 18%);
  }
  .feature {
    margin-bottom: 1.5em;
    font-size: 1.05em;
  }
`;
const GoBack = styled.div`
  margin-top: 15vh;
  margin-left: 3vw;
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
  margin-left: 21vw;
  position: relative;
  top: -2.5em;
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
export default Summary;
