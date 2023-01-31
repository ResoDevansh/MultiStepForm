import React from "react";
import styled from "styled-components";
import pic from "./assets/images/bg-sidebar-desktop.svg";

function App() {
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
        {navitems.map((item) => {
          return <>
            <Heading>{item.step}</Heading>
            <Content>{item.value}</Content>
          </>;
        })}
      </Navbar>
    </Container>
  );
}

const Container = styled.div`
  height: 70.5vh;
  width: 55vw;
  margin: auto;
  margin-top: calc(100vh / 7);
  border-radius: 1em;
  background-color: white;
  overflow: hidden;
`;

const Navbar = styled.div`
  border: 1px solid black;
  background-image: url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  height: 66.7vh;
  width: 16.7vw;
  border-radius: 1em;
  margin-top: calc((3.6vh) / 2);
  margin-left: 0.8em;
`;

const Heading = styled.div`
  border: 1px solid red;
`;
const Content = styled.div`
  border: 1px solid green;
`;
export default App;
