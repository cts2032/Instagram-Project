import React from "react";
import {
  InputBox,
  LogoBox3,
  MenuBox2,
  MenuBox2_1,
  MenuItem3,
  NavBarContainer3,
  NavMenuContainer3,
} from "../Navigation_Bar_Sty";

const SP_NavBar = ({
  Logo,
  User,
  HomeImg,
  ReelsImg,
  LikeImg,
  PlusImg,
  MessageImg,
  ExploreImg,
  HomeClick,
  LikeClick,
  ReelsClick,
  PlusClick,
  MessageClick,
  ExploreClick,
  UserClick,
  HomeScale,
  handleHomeDown,
  handleHomeUp,
  LikeScale,
  handleLikeDown,
  handleLikeUp,
  PlusScale,
  handlePlusDown,
  handlePlusUp,
  MessageScale,
  handleMessageDown,
  handleMessageUp,
  ReelsScale,
  handleReelsDown,
  handleReelsUp,
  ExploreScale,
  handleExploreDown,
  handleExploreUp,
  UserScale,
  handleUserDown,
  handleUserUp,
}) => {
  return (
    <NavBarContainer3>
      <MenuBox2_1>
        <LogoBox3>
          <img src={Logo} alt="로고" />
        </LogoBox3>
        <InputBox>
          <input
            placeholder="검색"
            style={{
              width: "268px",
              border: "none",
              height: "36px",
              outline: "none",
              marginTop: "8px",
              padding: "3px 6px",
              borderRadius: "8px",
              backgroundColor: "#efefef",
            }}
          />
        </InputBox>
        <MenuItem3
          onMouseDown={handleLikeDown}
          onMouseUp={handleLikeUp}
          onClick={LikeClick}
        >
          <img
            style={{
              transform: LikeScale ? "scale(0.8)" : "scale(1)",
              transition: "transform 0.2s ease",
            }}
            src={LikeImg}
            alt="알림"
          />
        </MenuItem3>
      </MenuBox2_1>
      <NavMenuContainer3>
        <MenuBox2>
          <MenuItem3
            onMouseDown={handleHomeDown}
            onMouseUp={handleHomeUp}
            onClick={HomeClick}
          >
            <img
              style={{
                transform: HomeScale ? "scale(0.8)" : "scale(1)",
                transition: "transform 0.2s ease",
              }}
              src={HomeImg}
              alt="홈"
            />
          </MenuItem3>
          <MenuItem3
            onMouseDown={handleExploreDown}
            onMouseUp={handleExploreUp}
            onClick={ExploreClick}
          >
            <img
              style={{
                transform: ExploreScale ? "scale(0.8)" : "scale(1)",
                transition: "transform 0.2s ease",
              }}
              src={ExploreImg}
              alt="탐색 탭"
            />
          </MenuItem3>
          <MenuItem3
            onMouseDown={handleReelsDown}
            onMouseUp={handleReelsUp}
            onClick={ReelsClick}
          >
            <img
              style={{
                transform: ReelsScale ? "scale(0.8)" : "scale(1)",
                transition: "transform 0.2s ease",
              }}
              src={ReelsImg}
              alt="릴스"
            />
          </MenuItem3>
          <MenuItem3
            onMouseDown={handleMessageDown}
            onMouseUp={handleMessageUp}
            onClick={MessageClick}
          >
            <img
              style={{
                transform: MessageScale ? "scale(0.8)" : "scale(1)",
                transition: "transform 0.2s ease",
              }}
              src={MessageImg}
              alt="메세지"
            />
          </MenuItem3>
          <MenuItem3
            onMouseDown={handlePlusDown}
            onMouseUp={handlePlusUp}
            onClick={PlusClick}
          >
            <img
              style={{
                transform: PlusScale ? "scale(0.8)" : "scale(1)",
                transition: "transform 0.2s ease",
              }}
              src={PlusImg}
              alt="만들기"
            />
          </MenuItem3>
          <MenuItem3
            onMouseDown={handleUserDown}
            onMouseUp={handleUserUp}
            onClick={UserClick}
          >
            <img
              style={{
                transform: UserScale ? "scale(0.8)" : "scale(1)",
                transition: "transform 0.2s ease",
              }}
              src={User}
              alt="프로필"
            />
          </MenuItem3>
        </MenuBox2>
      </NavMenuContainer3>
    </NavBarContainer3>
  );
};

export default SP_NavBar;
