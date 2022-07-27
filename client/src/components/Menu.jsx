import React from "react";
import styled from "styled-components";
import VidTubeLogo from "../images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

import {
  ExploreOutlined,
  SubscriptionsOutlined,
  VideoLibraryOutlined,
  HistoryOutlined,
  AccountCircleOutlined,
  LibraryMusicOutlined,
  SportsBasketballOutlined,
  SportsEsportsOutlined,
  MovieOutlined,
  ArticleOutlined,
  LiveTvOutlined,
  SettingsOutlined,
  FlagOutlined,
  HelpOutlineOutlined,
  SettingsBrightnessOutlined,
} from "@mui/icons-material";

//styled components
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 13px;
  position: sticky;
  top: 0px;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 10px;
  }
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Login = styled.div``;

const LoginButton = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const P = styled.p`
  font-size: 11px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  function darkModeHandler() {
    setDarkMode(!darkMode);
  }

  return (
    <Container>
      <Wrapper>
        {/* logo */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={VidTubeLogo} />
            Vid Social
          </Logo>
        </Link>

        {/* home  */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Item>
            <HomeIcon />
            Home
          </Item>
        </Link>
        <Item>
          <ExploreOutlined />
          Explore
        </Item>
        <Item>
          <SubscriptionsOutlined />
          Subscription
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlined />
          Library
        </Item>
        <Item>
          <HistoryOutlined />
          History
        </Item>
        <Hr />
        <Login>
          <P>Sign in to like videos, comment and subscribe</P>
          <Link to="signin" style={{ textDecoration: "none" }}>
            <LoginButton>
              <AccountCircleOutlined /> Sign In
            </LoginButton>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF VIDTUBE</Title>
        <Item>
          <LibraryMusicOutlined />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlined />
          Sports
        </Item>
        <Item>
          <SportsEsportsOutlined />
          Gaming
        </Item>
        <Item>
          <MovieOutlined />
          Movies
        </Item>
        <Item>
          <ArticleOutlined />
          News
        </Item>
        <Item>
          <LiveTvOutlined />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlined />
          Settings
        </Item>
        <Item>
          <FlagOutlined />
          Report
        </Item>
        <Item>
          <HelpOutlineOutlined />
          Help
        </Item>
        <Item onClick={darkModeHandler}>
          <SettingsBrightnessOutlined />
          {darkMode ? "Light Theme" : "Dark Theme"}
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
