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
import Home from "../../images/free-icon-home-5948524.png";
import Logo from "../../images/instagram_logo.png";
import Reels from "../../images/free-icon-video-5948543.png";
import Message from "../../images/free-icon-direct-instagram-5883507.png";
import Like from "../../images/free-icon-like-535285.png";
import Plus from "../../images/free-icon-plus-5948495.png";
import User from "../../images/44884218_345707102882519_2446069589734326272_n.jpg";
const SP_NavBar = () => {
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
        <MenuItem3>
          <img src={Like} alt="알림" />
        </MenuItem3>
      </MenuBox2_1>
      <NavMenuContainer3>
        <MenuBox2>
          <MenuItem3>
            <img src={Home} alt="홈" />
          </MenuItem3>
          <MenuItem3>
            <span style={{ scale: "1.05" }} class="material-symbols-outlined">
              explore
            </span>
          </MenuItem3>
          <MenuItem3>
            <img src={Reels} alt="릴스" />
          </MenuItem3>
          <MenuItem3>
            <img src={Message} alt="메세지" />
          </MenuItem3>
          <MenuItem3>
            <img src={Plus} alt="만들기" />
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
