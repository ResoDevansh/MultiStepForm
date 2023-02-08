import React, { useState } from "react";
import styled from "styled-components";

const PersonalInfo = () => {
  const [person, setPerson] = useState({ name: "", email: "", phone: "" });
  const [people, setPeople] = useState([]);
  const [isPresent, setIsPresent] = useState(Array(3).fill(true));
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({
      ...person,
      [name]: value,
      id: new Date().getTime().toString(),
    });
    if (name === 'name') {
      document.getElementById('name').style.borderColor = 'rgba(5,10,10,.2)';
      console.log('name being written');
    }
    else if (name === 'email')
      document.getElementById('email').style.borderColor = 'rgba(5,10,10,.2)';
    else if (name === 'phone')
      document.getElementById('phone').style.borderColor = 'rgba(5,10,10,.2)';
  };
  const handleClick = (e) => {
    e.preventDefault();
    setIsPresent(Array(3).fill(true));
    if (person.name && person.email && person.phone) {
      setPeople([...people, person]);
      setPerson({ name: "", email: "", phone: "" });
      document.getElementById('name').style.borderColor = 'rgba(5,10,10,.2)';
      document.getElementById('email').style.borderColor = 'rgba(5,10,10,.2)';
      document.getElementById('phone').style.borderColor = 'rgba(5,10,10,.2)';
    }
    else {
      let newArr=Array(3).fill(true);
      if (person.name === '') {
        // const newArr = isPresent.slice();
        newArr[0] = false;
        // setIsPresent(newArr);
        document.getElementById('name').style.borderColor = 'red';
      }
      else {
        document.getElementById('name').style.borderColor = 'rgba(5,10,10,.2)';
      }
      if (person.email === '') {
        // const newArr = isPresent.slice();
        newArr[1] = false;
        // setIsPresent(newArr);
        document.getElementById('email').style.borderColor = 'red';
      }
      else {
        document.getElementById('email').style.borderColor = 'rgba(5,10,10,.2)';
      }
      if (person.phone === '') {
        // const newArr = isPresent.slice();
        newArr[2] = false;
        // setIsPresent(newArr);
        document.getElementById('phone').style.borderColor = 'red';
      }
      else {
        document.getElementById('phone').style.borderColor = 'rgba(5,10,10,.2)';
      }
      setIsPresent(newArr);
    }
  };
  return (
    <Container>
      <Heading>Personal info</Heading>
      <Subtitle>
        Please provide your name, email address, and phone number.
      </Subtitle>
      <form>
        <label htmlFor="name">Name</label>
        {isPresent[0]===false?<DialogBox present={true}>This field is required</DialogBox>:<Invisible></Invisible>}
        <input
          type="text"
          placeholder="e.g. Stephen King"
          id="name"
          name="name"
          value={person.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Email Address</label>
        {isPresent[1] === false ? <DialogBox present={true}>This field is required</DialogBox>:<Invisible></Invisible>}
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          name="email"
          value={person.email}
          onChange={handleChange}
        ></input>
        <label htmlFor="phone-no">Phone Number</label>
        {isPresent[2]===false?<DialogBox present={true}>This field is required</DialogBox>:<Invisible></Invisible>}
        <input
          type="number"
          placeholder="e.g. +1 234 567 890"
          id="phone"
          name="phone"
          value={person.phone}
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleClick}>
          Next Step
        </button>
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
    cursor: pointer;
    padding: 0.8em;
    margin-left: 20%;
    margin-top: 2%;
    display: inline-block;
    width: 65%;
    border-radius: .5em;
    // background-color: white;
    border-color: rgba(5,10,10,.2);
    border-style: solid;
  }

  button {
    padding: 2.5%;
    padding-left: 4%;
    padding-right: 4%;
    display: inline-block;
    background-color: hsl(213, 96%, 18%);
    color: hsl(231, 100%, 99%);
    position: relative;
    top: 3em;
    left: 28em;
    border-radius: 0.6em;
    text-align: center;
    cursor: pointer;
  }
`;
const DialogBox = styled.div`
  color: red;
  font-size: .9em;
  text-align: end;
  width: 40%;
  position: relative;
  top: -1.3em;
  left: 22em;
  margin-bottom: -2.5%;
`;
const Invisible = styled.div`
`;
export default PersonalInfo;
