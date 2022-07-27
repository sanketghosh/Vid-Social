import React from "react";
import styled from "styled-components";
import {
  ThumbUpOutlined,
  ThumbDownOffAltOutlined,
  ReplyOutlined,
  AddTaskOutlined,
} from "@mui/icons-material";

import channelLogo from "../images/channelLogo.jpg";
import AddComments from "../components/AddComments";
import Card from "../components/Card.jsx";

//styled components
const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.textSoft};
`;

const Recommendation = styled.div`
  flex: 2;
`;

const ChannelBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
  padding: 0px 3px;
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelSubscribers = styled.span`
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 14px;
  font-weight: 300;
`;

const Description = styled.p`
  font-size: 13px;
  margin-top: 5px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 3px;
  margin-left: 3px;
  height: max-content;
  padding: 6.5px 11px;
  cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="Youtube video
            Player"
            frameborder="0"
            allow="accelerometer; autoplay;
            clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </VideoWrapper>
        <Title>Test Video || This is a test video</Title>
        <Details>
          <Info>7,167,134 views . Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpOutlined />
              12k
            </Button>
            <Button>
              <ThumbDownOffAltOutlined />
              Dislike
            </Button>
            <Button>
              <ReplyOutlined />
              Share
            </Button>
            <Button>
              <AddTaskOutlined />
              Save
            </Button>
          </Buttons>
        </Details>
        <Hr />

        <ChannelBar>
          <ChannelInfo>
            <Image src={channelLogo} />
            <ChannelDetails>
              <ChannelName>The DevNote</ChannelName>
              <ChannelSubscribers>280K Subscribers</ChannelSubscribers>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                consequuntur molestiae cupiditate blanditiis itaque velit ea
                quidem inventore tenetur a facilis facere, architecto aut,
                soluta suscipit? Quos, incidunt earum!
              </Description>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </ChannelBar>
        <Hr />
        <AddComments />
      </Content>
      <Recommendation>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </Recommendation>
    </Container>
  );
};

export default Video;
