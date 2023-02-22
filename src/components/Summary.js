import React from "react";
import styled from "styled-components";

const Summary = ({ clickedItems, addons, showYearly }) => {
    let key;
    for (let i = 0; i < clickedItems.length; i++){
        if (clickedItems[i] === true)
            key = i;
    }
    // console.log(clickedItems);
    return (<Container>
        <Header>  Finishing up</Header>
        <Subtitle>  Double-check everything looks OK before confirming.</Subtitle>
        <Content><PlanName>{key === 0 && 'Arcade'}{key === 1 && 'Advanced'}{key === 2 && 'Pro'}</PlanName><PlanCost></PlanCost></Content>
    </Container>);
}
const Container = styled.div`
  position: relative;
  border: 1px solid red;    
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
`;
const Content = styled.div`
  border: 1px solid blue;
`;
const PlanName = styled.div`
`;
const PlanCost = styled.div`
`;
export default Summary;