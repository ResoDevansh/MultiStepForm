import React from "react";
import styled from "styled-components";

const Summary = ({ clickedItems, addons, showYearly, plans }) => {
  let key, price;
  for (let i = 0; i < clickedItems.length; i++) {
    if (clickedItems[i] === true) key = i;
  }
  // let specialState = [Array(6).fill(false)];
  // if (key === 0 && showYearly === true) {
  //     specialState
  // }
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
    }
    if (key === 1) {
      price = "$120/yr";
    }
    if (key === 2) {
      price = "$150/yr";
    }
  } else {
    if (key === 0) {
      price = "$9/month";
    }
    if (key === 1) {
      price = "$12/month";
    }
    if (key === 2) {
      price = "$15/month";
    }
  }
  // console.log(clickedItems);
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
                <div key={key}>
                  <div className="title">{plan.title}</div>
                  <div className="prices">{plan.price}</div>
                </div>
              );
          })}
        </EachFeature>
      </Content>
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
  left: 12.5vw;
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
  font-size: .9em;
    .title{
      // border: 1px solid red;
      width: fit-content;  
      text-indent: 0;
      position: relative;
      left: -4.5em;
      display: inline-block;
    }
    .prices {
      // border: 1px solid red;
      width: fit-content;
      position: absolute;
      right: 6.5em;
      display: inline-block;
    }
`;
export default Summary;
