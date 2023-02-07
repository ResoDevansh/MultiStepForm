import React, { useState } from "react";
import styled from "styled-components";

const PersonalInfo = () => {
  const [person, setPerson] = useState({ name: "", email: "", phone: "" });
  const [people, setPeople] = useState([]);
  let isPresent = Array.fill(true,3);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({
      ...person,
      [name]: value,
      id: new Date().getTime().toString(),
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.phone) {
      setPeople([...people, person]);
      setPerson({ name: "", email: "", phone: "" });
    }
    else {
      if (person.name === '') {
        isPresent[0] = false;
      }
      if (person.email === '') {
        isPresent[1] = false;
      }
      if (person.phone === '') {
        isPresent[2] = false;
      }
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
        <input
          type="text"
          placeholder="e.g. Stephen King"
          id="name"
          name="name"
          value={person.name}
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          name="email"
          value={person.email}
          onChange={handleChange}
        ></input>
        <label htmlFor="phone-no">Phone Number</label>
        <input
          type="number"
          placeholder="e.g. +1 234 567 890"
          id="phone-no"
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
    padding: 0.8em;
    margin-left: 20%;
    margin-top: 2%;
    display: inline-block;
    width: 65%;
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
export default PersonalInfo;
