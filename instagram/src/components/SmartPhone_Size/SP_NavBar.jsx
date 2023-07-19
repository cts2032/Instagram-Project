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
  Search,
  HomeImg,
  ReelsImg,
  LikeImg,
  PlusImg,
  MessageImg,
  HomeClick,
  LikeClick,
  ReelsClick,
  PlusClick,
  MessageClick,
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
        <MenuItem3 onClick={LikeClick}>
          <img src={LikeImg} alt="알림" />
        </MenuItem3>
      </MenuBox2_1>
      <NavMenuContainer3>
        <MenuBox2>
          <MenuItem3 onClick={HomeClick}>
            <img src={HomeImg} alt="홈" />
          </MenuItem3>
          <MenuItem3>
            <span style={{ scale: "1.05" }} class="material-symbols-outlined">
              explore
            </span>
          </MenuItem3>
          <MenuItem3 onClick={ReelsClick}>
            <img src={ReelsImg} alt="릴스" />
          </MenuItem3>
          <MenuItem3 onClick={MessageClick}>
            <img src={MessageImg} alt="메세지" />
          </MenuItem3>
          <MenuItem3 onClick={PlusClick}>
            <img src={PlusImg} alt="만들기" />
          </MenuItem3>
          <MenuItem3>
            <img src={User} alt="프로필" />
          </MenuItem3>
        </MenuBox2>
      </NavMenuContainer3>
    </NavBarContainer3>
  );
};

export default SP_NavBar;
