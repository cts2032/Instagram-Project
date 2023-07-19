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
import ClickedHome from "../images/free-icon-click-home-5948524.png";
import ClickedReels from "../images/video_instagram_reel_social_media_brand_chatting_menu_icon_210336.png";
import ClickedLike from "../images/free-icon-click-like-535285.png";
import ClickedMessage from "../images/free-icon-click-direct-instagram-5883507.png";
import ClickedPlus from "../images/free-icon-click-add-875119.png";
const Navigation_Bar = () => {
  const theme = createTheme();
  const ScreenSize = useMediaQuery("(max-width:1264px)");
  const SmartPhoneSize = useMediaQuery(theme.breakpoints.down("sm"));

  const [HomeImg, setHomeImg] = useState(ClickedHome);
  const [LikeImg, setLikeImg] = useState(Like);
  const [ReelsImg, setReelsImg] = useState(Reels);
  const [PlusImg, setPlusImg] = useState(Plus);
  const [MessageImg, setMessageImg] = useState(Message);

  const HomeClick = () => {
    setHomeImg(ClickedHome);
    setLikeImg(Like);
    setReelsImg(Reels);
    setPlusImg(Plus);
    setMessageImg(Message);
  };
  const LikeClick = () => {
    setLikeImg(ClickedLike);
    setHomeImg(Home);
    setReelsImg(Reels);
    setPlusImg(Plus);
    setMessageImg(Message);
  };
  const ReelsClick = () => {
    setReelsImg(ClickedReels);
    setHomeImg(Home);
    setLikeImg(Like);
    setPlusImg(Plus);
    setMessageImg(Message);
  };
  const PlusClick = () => {
    setPlusImg(ClickedPlus);
    setHomeImg(Home);
    setLikeImg(Like);
    setReelsImg(Reels);
    setMessageImg(Message);
  };
  const MessageClick = () => {
    setMessageImg(ClickedMessage);
    setPlusImg(Plus);
    setHomeImg(Home);
    setLikeImg(Like);
    setReelsImg(Reels);
  };

  return (
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
            HomeClick={HomeClick}
            LikeClick={LikeClick}
            ReelsClick={ReelsClick}
            PlusClick={PlusClick}
            MessageClick={MessageClick}
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
            HomeClick={HomeClick}
            LikeClick={LikeClick}
            ReelsClick={ReelsClick}
            PlusClick={PlusClick}
            MessageClick={MessageClick}
          />
        )
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
          setMessageImg={setMessageImg}
          HomeClick={HomeClick}
          LikeClick={LikeClick}
          ReelsClick={ReelsClick}
          PlusClick={PlusClick}
          MessageClick={MessageClick}
        />
      )}
    </ThemeProvider>
  );
};

export default Navigation_Bar;
