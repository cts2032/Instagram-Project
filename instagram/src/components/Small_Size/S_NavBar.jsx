import React from "react";
import {
  MenuBox,
  MenuItem,
  MenuItem2,
  NavBarContainer2,
  NavMenuContainer2,
} from "../Navigation_Bar_Sty";
import Home from "../../images/free-icon-home-5948524.png";
import SmallLogo from "../../images/free-icon-instagram-717392.png";
import Reels from "../../images/free-icon-video-5948543.png";
import Message from "../../images/free-icon-direct-instagram-5883507.png";
import Like from "../../images/free-icon-like-535285.png";
import Plus from "../../images/free-icon-plus-5948495.png";
import User from "../../images/44884218_345707102882519_2446069589734326272_n.jpg";
import Search from "../../images/free-icon-search-5948534.png";
const S_NavBar = () => {
  return (
    <NavBarContainer2>
      <NavMenuContainer2>
        <MenuBox>
          <div style={{ padding: "0px 0px 23px", margin: "12px 0px 0px " }}>
            <MenuItem2>
              <img src={SmallLogo} alt="로고" />
            </MenuItem2>
          </div>
          <MenuItem2>
            <img src={Home} alt="홈" />
          </MenuItem2>
          <MenuItem2>
            <img src={Search} alt="검색" />
          </MenuItem2>
          <MenuItem2>
            <span style={{ scale: "1.05" }} class="material-symbols-outlined">
              explore
            </span>
          </MenuItem2>
          <MenuItem2>
            <img src={Reels} alt="릴스" />
          </MenuItem2>
          <MenuItem2>
            <img src={Message} alt="메세지" />
          </MenuItem2>
          <MenuItem2>
            <img src={Like} alt="알림" />
          </MenuItem2>
          <MenuItem2>
            <img src={Plus} alt="만들기" />
          </MenuItem2>
          <MenuItem>
            <img src={User} alt="프로필" />
          </MenuItem>
        </MenuBox>
      </NavMenuContainer2>
      <div>
        <MenuItem2>
          <span class="material-symbols-outlined">menu</span>
        </MenuItem2>
      </div>
    </NavBarContainer2>
  );
};

export default S_NavBar;
