import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.textSoft};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  margin-top: 5px;
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  margin-top: 5px;
  border: 3px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  padding: 6px 10px;
  outline: none;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: 500;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const MoreLinks = styled.div`
  margin-top: 10px;
  display: flex;
  font-size: 13px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.span`
  margin-left: 50px;
`;
const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>To Continue to VidTube</SubTitle>
        <Input placeholder="Username" />
        <Input type="password" placeholder="password" />
        <Button>Sign In</Button>
        <Title>Or</Title>
        <SubTitle>To Continue to VidTube</SubTitle>
        <Input placeholder="Username" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="password" />
        <Button>Sign Up</Button>
      </Wrapper>
      <MoreLinks>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </MoreLinks>
    </Container>
  );
};

export default SignIn;
