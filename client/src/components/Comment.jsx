import React from "react";
import styled from "styled-components";
import channelLogo from "../images/channelLogo.jpg";

//styled components
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const Date = styled.span`
  font-size: 11px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 6px;
`;
const Text = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text};
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={channelLogo} />
      <Details>
        <Name>
          John Doe <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          sequi cum assumenda incidunt vitae aperiam illo obcaecati porro libero
          officiis! Tenetur placeat expedita odio fugiat consequuntur iste
          aperiam.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
