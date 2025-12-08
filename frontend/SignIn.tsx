import React from "react";
import styled from "styled-components";

const CosmicBackground = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at bottom, #2b5876 0%, #4e4376 100%);
  animation: cosmic-animate 8s infinite alternate;
  @keyframes cosmic-animate {
    from { background-position: 0% 50%; }
    to { background-position: 100% 50%; }
  }
`;

const Form = styled.form`
  background: rgba(27, 29, 41, 0.93);
  padding: 2.5rem 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 0 32px 8px #44415a99;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 350px;
`;

const Title = styled.h2`
  color: #ffd3f6;
  margin-bottom: 1rem;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 2px;
`;

const Input = styled.input`
  padding: 0.7rem 1.3rem;
  margin: 1rem 0;
  border-radius: 24px;
  background: #36335577;
  color: #fff;
  border: none;
  width: 100%;
  font-size: 1.06rem;
  outline: none;
`;

const Button = styled.button`
  padding: 0.85rem 3rem;
  border-radius: 30px;
  background: linear-gradient(90deg, #9572fc 0%, #43e7ad 100%);
  color: #191726;
  font-size: 1.09rem;
  font-weight: bold;
  letter-spacing: 1px;
  border: none;
  margin-top: 1rem;
  box-shadow: 0 4px 24px #43e7ad33, 0 1px 8px #223;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background: linear-gradient(90deg, #43e7ad 0%, #9572fc 100%);
    color: #fff;
  }
`;

const SignIn: React.FC = () => {
  return (
    <CosmicBackground>
      <Form>
        <Title>IRIS Cosmic Companion</Title>
        <Input placeholder="Email" type="email" required defaultValue="iris.with.vybeflix@gmail.com" />
        <Input placeholder="Phone (+254 116903500)" type="tel" />
        <Input placeholder="Password" type="password" required />
        <Button type="submit">Sign In</Button>
      </Form>
    </CosmicBackground>
  );
};

export default SignIn;
