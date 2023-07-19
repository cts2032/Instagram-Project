import React from "react";
import {
  MenuBox,
  MenuItem,
  MenuItem2,
  NavBarContainer2,
  NavMenuContainer2,
} from "../Navigation_Bar_Sty";

import SmallLogo from "../../images/free-icon-instagram-717392.png";

const S_NavBar = ({
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
    <NavBarContainer2>
      <NavMenuContainer2>
        <MenuBox>
          <div style={{ padding: "0px 0px 23px", margin: "12px 0px 0px " }}>
            <MenuItem2>
              <img src={SmallLogo} alt="로고" />
            </MenuItem2>
          </div>
          <MenuItem2 onClick={HomeClick}>
            <img src={HomeImg} alt="홈" />
          </MenuItem2>
          <MenuItem2>
            <img src={Search} alt="검색" />
          </MenuItem2>
          <MenuItem2>
            <span style={{ scale: "1.05" }} class="material-symbols-outlined">
              explore
            </span>
          </MenuItem2>
          <MenuItem2 onClick={ReelsClick}>
            <img src={ReelsImg} alt="릴스" />
          </MenuItem2>
          <MenuItem2 onClick={MessageClick}>
            <img src={MessageImg} alt="메세지" />
          </MenuItem2>
          <MenuItem2 onClick={LikeClick}>
            <img src={LikeImg} alt="알림" />
          </MenuItem2>
          <MenuItem2 onClick={PlusClick}>
            <img src={PlusImg} alt="만들기" />
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
