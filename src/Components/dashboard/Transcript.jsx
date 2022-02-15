import React from "react";
import styled from "styled-components";

function Transcript() {
  return (
    <TransCard>
      <InputContainer>
        <Input></Input>
      </InputContainer>
      <InputContainer>
        <Input></Input>
      </InputContainer>
      <InputContainer>
        <Input></Input>
      </InputContainer>
      <InputContainer>
        <Input></Input>
      </InputContainer>
      <InputContainer>
        <Input></Input>
      </InputContainer>
      <InputContainer>
        <Input></Input>
      </InputContainer>
      <InputContainer>
        <Input></Input>
      </InputContainer>
      <InputContainer>
        <Input></Input>
      </InputContainer>
      <InputContainer>
        <Input></Input>
      </InputContainer>
    </TransCard>
  );
}

const TransCard = styled.div`
  position: absolute;
  height: 100%;
  width: 35%;
  background-color: #6100d4;
  padding: 0rem;
  border-radius: 1rem;
  left: 3%;
  overflow-x: hidden;
  color: white;
`;
const InputContainer = styled.div`
  display: flex;
  margin: 3%;
  height: 10%;

  align-items: center;
`;

const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  height: 55%;
  width: 95%;
  margin: 2%;
  margin-top: 1%;
  ${
    "" /* border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem; */
  }

  border-radius: 0.5rem;
  &:focus {
    border: none;
    outline: none;
  }
`;
export default Transcript;
