import React from "react";
import styled from "styled-components";
import thumb from "../images/thumb.jpg";
import channelLogo from "../images/channelLogo.jpg";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "8px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px; //for recommendation side bar * use props later
`;

const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1; //for recommendation side bar * use props later
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1; //for recommendation side bar * use props later
`;
const ChannelLogo = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 8px 0px;
`;

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={thumb} />
        <Details type={type}>
          <ChannelLogo type={type} src={channelLogo} />
          <Texts>
            <Title>this video is a test video </Title>
            <ChannelName>The DevNote</ChannelName>
            <Info>890,990 views . 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
