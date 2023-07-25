import React, { useState } from "react";
import { ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import SP_NavBar from "./SmartPhone_Size/SP_NavBar";
import S_NavBar from "./Small_Size/S_NavBar";
import D_NavBar from "./Desktop_Size/D_NavBar";

import Home from "../images/free-icon-home-5948524.png";
import Logo from "../images/instagram_logo.png";
import Reels from "../images/free-icon-video-5948543.png";
import Message from "../images/free-icon-direct-instagram-5883507.png";
import Like from "../images/free-icon-like-535285.png";
import Plus from "../images/free-icon-plus-5948495.png";
import User from "../images/44884218_345707102882519_2446069589734326272_n.jpg";
import Search from "../images/free-icon-search-5948534.png";
import Explore from "../images/free-icon-compass-484136.png";
import ClickedHome from "../images/free-icon-click-home-5948524.png";
import ClickedReels from "../images/video_instagram_reel_social_media_brand_chatting_menu_icon_210336.png";
import ClickedLike from "../images/free-icon-click-like-535285.png";
import ClickedMessage from "../images/free-icon-click-direct-instagram-5883507.png";
import ClickedPlus from "../images/free-icon-click-add-875119.png";
import ClickedExplore from "../images/free-icon-explore-565504.png";
import SearchForm from "../containers/Search/SearchForm";
import Alaram from "../containers/Alaram/Alaram";
import EditorForm from "./Desktop_Size/D_EditorForm";
const Navigation_Bar = () => {
  const theme = createTheme();
  const ScreenSize = useMediaQuery("(max-width:1264px)");
  const SmartPhoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  // 아이콘 상태관리
  const [HomeImg, setHomeImg] = useState(ClickedHome);
  const [LikeImg, setLikeImg] = useState(Like);
  const [ReelsImg, setReelsImg] = useState(Reels);
  const [PlusImg, setPlusImg] = useState(Plus);
  const [MessageImg, setMessageImg] = useState(Message);
  const [ExploreImg, setExploreImg] = useState(Explore);
  const [SearchCheck, setSearchCheck] = useState(false);
  const [AlaramCheck, setAlaramCheck] = useState(false);

  const HomeClick = () => {
    setHomeImg(ClickedHome);
    setLikeImg(Like);
    setReelsImg(Reels);
    setPlusImg(Plus);
    setMessageImg(Message);
    setExploreImg(Explore);
  };
  const LikeClick = () => {
    setLikeImg(ClickedLike);
    setHomeImg(Home);
    setReelsImg(Reels);
    setPlusImg(Plus);
    setMessageImg(Message);
    setExploreImg(Explore);
    if (AlaramCheck) {
      setAlaramCheck(false);
    } else if (!AlaramCheck) {
      setAlaramCheck(true);
    }
    setSearchCheck(false);
    if (LikeImg === ClickedLike) {
      setLikeImg(Like);
    }
  };
  const SearchClick = () => {
    setMessageImg(Message);
    setPlusImg(Plus);
    setHomeImg(Home);
    setLikeImg(Like);
    setReelsImg(Reels);
    setExploreImg(Explore);
    if (SearchCheck) {
      setSearchCheck(false);
    } else if (!SearchCheck) {
      setSearchCheck(true);
    }
    setAlaramCheck(false);
  };
  const ReelsClick = () => {
    setReelsImg(ClickedReels);
    setHomeImg(Home);
    setLikeImg(Like);
    setPlusImg(Plus);
    setMessageImg(Message);
    setExploreImg(Explore);
  };
  const PlusClick = () => {
    setPlusImg(ClickedPlus);
    setHomeImg(Home);
    setLikeImg(Like);
    setReelsImg(Reels);
    setMessageImg(Message);
    setExploreImg(Explore);
    if (PlusImg === ClickedPlus) {
      setPlusImg(Plus);
    }
  };
  const MessageClick = () => {
    setMessageImg(ClickedMessage);
    setPlusImg(Plus);
    setHomeImg(Home);
    setLikeImg(Like);
    setReelsImg(Reels);
    setExploreImg(Explore);
  };
  const ExploreClick = () => {
    setMessageImg(Message);
    setPlusImg(Plus);
    setHomeImg(Home);
    setLikeImg(Like);
    setReelsImg(Reels);
    setExploreImg(ClickedExplore);
  };
  const UserClick = () => {
    setMessageImg(Message);
    setPlusImg(Plus);
    setHomeImg(Home);
    setLikeImg(Like);
    setReelsImg(Reels);
    setExploreImg(Explore);
  };

  // 아이콘 클릭시 스케일 변경
  const [HomeScale, setHomeScale] = useState(false);
  const [LikeScale, setLikeScale] = useState(false);
  const [PlusScale, setPlusScale] = useState(false);
  const [MessageScale, setMessageScale] = useState(false);
  const [ReelsScale, setReelsScale] = useState(false);
  const [ExploreScale, setExploreScale] = useState(false);
  const [UserScale, setUserScale] = useState(false);
  const [MoreScale, setMoreScale] = useState(false);
  const [SearchScale, setSearchScale] = useState(false);

  const handleHomeDown = () => {
    setHomeScale(true);
  };
  const handleHomeUp = () => {
    setHomeScale(false);
  };
  const handleLikeDown = () => {
    setLikeScale(true);
  };
  const handleLikeUp = () => {
    setLikeScale(false);
  };
  const handlePlusDown = () => {
    setPlusScale(true);
  };
  const handlePlusUp = () => {
    setPlusScale(false);
  };
  const handleMessageDown = () => {
    setMessageScale(true);
  };
  const handleMessageUp = () => {
    setMessageScale(false);
  };
  const handleReelsDown = () => {
    setReelsScale(true);
  };
  const handleReelsUp = () => {
    setReelsScale(false);
  };
  const handleExploreDown = () => {
    setExploreScale(true);
  };
  const handleExploreUp = () => {
    setExploreScale(false);
  };
  const handleUserDown = () => {
    setUserScale(true);
  };
  const handleUserUp = () => {
    setUserScale(false);
  };
  const handleMoreDown = () => {
    setMoreScale(true);
  };
  const handleMoreUp = () => {
    setMoreScale(false);
  };
  const handleSearchDown = () => {
    setSearchScale(true);
  };
  const handleSearchUp = () => {
    setSearchScale(false);
  };

  const [showOverlay, setShowOverlay] = useState(false);
  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <div style={{ display: "flex" }}>
      <ThemeProvider theme={theme}>
        {ScreenSize ? (
          SmartPhoneSize ? (
            <SP_NavBar
              Logo={Logo}
              User={User}
              Search={Search}
              HomeImg={HomeImg}
              ReelsImg={ReelsImg}
              LikeImg={LikeImg}
              PlusImg={PlusImg}
              MessageImg={MessageImg}
              ExploreImg={ExploreImg}
              HomeClick={HomeClick}
              LikeClick={LikeClick}
              ReelsClick={ReelsClick}
              PlusClick={PlusClick}
              MessageClick={MessageClick}
              ExploreClick={ExploreClick}
              HomeScale={HomeScale}
              handleHomeDown={handleHomeDown}
              handleHomeUp={handleHomeUp}
              LikeScale={LikeScale}
              handleLikeDown={handleLikeDown}
              handleLikeUp={handleLikeUp}
              PlusScale={PlusScale}
              handlePlusDown={handlePlusDown}
              handlePlusUp={handlePlusUp}
              MessageScale={MessageScale}
              handleMessageDown={handleMessageDown}
              handleMessageUp={handleMessageUp}
              ReelsScale={ReelsScale}
              handleReelsDown={handleReelsDown}
              handleReelsUp={handleReelsUp}
              ExploreScale={ExploreScale}
              handleExploreDown={handleExploreDown}
              handleExploreUp={handleExploreUp}
              UserScale={UserScale}
              handleUserDown={handleUserDown}
              handleUserUp={handleUserUp}
              MoreScale={MoreScale}
              handleMoreDown={handleMoreDown}
              handleMoreUp={handleMoreUp}
              toggleOverlay={toggleOverlay}
              showOverlay={showOverlay}
            />
          ) : (
            <S_NavBar
              Logo={Logo}
              User={User}
              Search={Search}
              HomeImg={HomeImg}
              ReelsImg={ReelsImg}
              LikeImg={LikeImg}
              PlusImg={PlusImg}
              MessageImg={MessageImg}
              ExploreImg={ExploreImg}
              HomeClick={HomeClick}
              LikeClick={LikeClick}
              ReelsClick={ReelsClick}
              PlusClick={PlusClick}
              MessageClick={MessageClick}
              ExploreClick={ExploreClick}
              SearchClick={SearchClick}
              UserClick={UserClick}
              HomeScale={HomeScale}
              handleHomeDown={handleHomeDown}
              handleHomeUp={handleHomeUp}
              LikeScale={LikeScale}
              handleLikeDown={handleLikeDown}
              handleLikeUp={handleLikeUp}
              PlusScale={PlusScale}
              handlePlusDown={handlePlusDown}
              handlePlusUp={handlePlusUp}
              MessageScale={MessageScale}
              handleMessageDown={handleMessageDown}
              handleMessageUp={handleMessageUp}
              ReelsScale={ReelsScale}
              handleReelsDown={handleReelsDown}
              handleReelsUp={handleReelsUp}
              ExploreScale={ExploreScale}
              handleExploreDown={handleExploreDown}
              handleExploreUp={handleExploreUp}
              UserScale={UserScale}
              handleUserDown={handleUserDown}
              handleUserUp={handleUserUp}
              MoreScale={MoreScale}
              handleMoreDown={handleMoreDown}
              handleMoreUp={handleMoreUp}
              SearchScale={SearchScale}
              handleSearchDown={handleSearchDown}
              handleSearchUp={handleSearchUp}
              SearchCheck={SearchCheck}
              toggleOverlay={toggleOverlay}
              showOverlay={showOverlay}
            />
          )
        ) : SearchCheck || AlaramCheck ? (
          <S_NavBar
            Logo={Logo}
            User={User}
            Search={Search}
            HomeImg={HomeImg}
            ReelsImg={ReelsImg}
            LikeImg={LikeImg}
            PlusImg={PlusImg}
            MessageImg={MessageImg}
            ExploreImg={ExploreImg}
            HomeClick={HomeClick}
            LikeClick={LikeClick}
            ReelsClick={ReelsClick}
            PlusClick={PlusClick}
            MessageClick={MessageClick}
            ExploreClick={ExploreClick}
            SearchClick={SearchClick}
            UserClick={UserClick}
            HomeScale={HomeScale}
            handleHomeDown={handleHomeDown}
            handleHomeUp={handleHomeUp}
            LikeScale={LikeScale}
            handleLikeDown={handleLikeDown}
            handleLikeUp={handleLikeUp}
            PlusScale={PlusScale}
            handlePlusDown={handlePlusDown}
            handlePlusUp={handlePlusUp}
            MessageScale={MessageScale}
            handleMessageDown={handleMessageDown}
            handleMessageUp={handleMessageUp}
            ReelsScale={ReelsScale}
            handleReelsDown={handleReelsDown}
            handleReelsUp={handleReelsUp}
            ExploreScale={ExploreScale}
            handleExploreDown={handleExploreDown}
            handleExploreUp={handleExploreUp}
            UserScale={UserScale}
            handleUserDown={handleUserDown}
            handleUserUp={handleUserUp}
            MoreScale={MoreScale}
            handleMoreDown={handleMoreDown}
            handleMoreUp={handleMoreUp}
            SearchScale={SearchScale}
            handleSearchDown={handleSearchDown}
            handleSearchUp={handleSearchUp}
            SearchCheck={SearchCheck}
            toggleOverlay={toggleOverlay}
            showOverlay={showOverlay}
          />
        ) : (
          <D_NavBar
            Logo={Logo}
            User={User}
            Search={Search}
            HomeImg={HomeImg}
            ReelsImg={ReelsImg}
            LikeImg={LikeImg}
            PlusImg={PlusImg}
            MessageImg={MessageImg}
            ExploreImg={ExploreImg}
            setMessageImg={setMessageImg}
            HomeClick={HomeClick}
            LikeClick={LikeClick}
            ReelsClick={ReelsClick}
            PlusClick={PlusClick}
            MessageClick={MessageClick}
            ExploreClick={ExploreClick}
            SearchClick={SearchClick}
            UserClick={UserClick}
            HomeScale={HomeScale}
            handleHomeDown={handleHomeDown}
            handleHomeUp={handleHomeUp}
            LikeScale={LikeScale}
            handleLikeDown={handleLikeDown}
            handleLikeUp={handleLikeUp}
            PlusScale={PlusScale}
            handlePlusDown={handlePlusDown}
            handlePlusUp={handlePlusUp}
            MessageScale={MessageScale}
            handleMessageDown={handleMessageDown}
            handleMessageUp={handleMessageUp}
            ReelsScale={ReelsScale}
            handleReelsDown={handleReelsDown}
            handleReelsUp={handleReelsUp}
            ExploreScale={ExploreScale}
            handleExploreDown={handleExploreDown}
            handleExploreUp={handleExploreUp}
            UserScale={UserScale}
            handleUserDown={handleUserDown}
            handleUserUp={handleUserUp}
            MoreScale={MoreScale}
            handleMoreDown={handleMoreDown}
            handleMoreUp={handleMoreUp}
            SearchScale={SearchScale}
            handleSearchDown={handleSearchDown}
            handleSearchUp={handleSearchUp}
            toggleOverlay={toggleOverlay}
            showOverlay={showOverlay}
          />
        )}
        {SmartPhoneSize ? null : <SearchForm SearchCheck={SearchCheck} />}
        {SmartPhoneSize ? null : <Alaram AlaramCheck={AlaramCheck} />}
      </ThemeProvider>
    </div>
  );
};

export default Navigation_Bar;
