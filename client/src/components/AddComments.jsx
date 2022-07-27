import React from "react";
import styled from "styled-components";
import channelLogo from "../images/channelLogo.jpg";
import Comment from "./Comment";
//styled components

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Input = styled.input`
  outline: none;
  border: none;
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  padding: 5px 4px;
  width: 100%;
`;

const AddComments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={channelLogo} />
        <Input placeholder="Add a comment" />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default AddComments;
