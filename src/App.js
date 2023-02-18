import React, { useState } from "react";
import styled from "styled-components";
import pic from "./assets/images/bg-sidebar-desktop.svg";
import PersonalInfo from "./components/Personalnfo";
import SelectYourPlan from "./components/SelectYourPlan";
import MonthlyAddons from "./components/MonthlyAddons";
import YearlyAddons from "./components/YearlyAddons";

const App = () => {
  const [index, setIndex] = useState(1);
  const [showYearly, setShowYearly] = useState(false);
  const setYearly = (showYearly) => {
    setShowYearly(!showYearly);
  }
  const navitems = [
    {
      step: "Step 1",
      value: "Your info",
    },
    {
      step: "Step 2",
      value: "Select plan",
    },
    {
      step: "Step 3",
      value: "Add-ons",
    },
    {
      step: "Step 4",
      value: "Summary",
    },
  ];

  return (
    <Container>
      <Navbar imgUrl={pic}>
        {navitems.map((item, key) => {
          return (
            <>
              {key + 1 === index ? (
                <ActiveItem>{key + 1}</ActiveItem>
              ) : (
                <Index
                  key={key}
                  onClick={() => {
                    setIndex(key + 1);
                  }}
                >
                  {key + 1}
                </Index>
              )}
              <Heading>{item.step}</Heading>
              <Content>{item.value}</Content>
            </>
          );
        })}
      </Navbar>
      {(() => {
        switch (index) {
          case 1:
            return <PersonalInfo />;
          case 2:
            return <SelectYourPlan setPlanTime={setYearly} showYearly={showYearly} />;
          case 3:
            return !showYearly ?  <MonthlyAddons></MonthlyAddons> : <YearlyAddons></YearlyAddons>;
          default:
            return <PersonalInfo />;
        }
      })()}
    </Container>
  );
};

const Container = styled.div`
  height: 70.5vh;
  width: 55vw;
  margin: auto;
  margin-top: calc(100vh / 7);
  border-radius: 1em;
  background-color: white;
  overflow: hidden;
  font-size: 0.9em;
`;

const Navbar = styled.div`
  border: 1px solid black;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  height: 66.7vh;
  width: 15.5vw;
  border-radius: 1em;
  margin-top: calc((3.6vh) / 2);
  margin-left: 0.8em;
  color: #ffffff;
  text-transform: uppercase;
`;

const Heading = styled.div`
  color: hsl(231, 11%, 63%);
  text-indent: 5.5em;
  letter-spacing: 0.005em;
  font-size: 0.9em;
`;
const Content = styled.div`
  text-indent: 5em;
  letter-spacing: 0.1em;
  font-weight: bolder;
`;
const Index = styled.button`
  border: 1px solid white;
  display: inline-block;
  border-radius: 50%;
  cursor: pointer;
  height: 2em;
  width: 2em;
  text-align: center;
  padding-top: 0.2em;
  box-sizing: border-box;
  position: relative;
  top: 7%;
  left: 10%;
  background-color: rgba(255, 255, 255, 0);
  color: #ffffff;
`;
const ActiveItem = styled(Index)`
  background-color: hsl(228, 100%, 84%);
  color: black;
  border: none;
  cursor: initial;
`;
export default App;
