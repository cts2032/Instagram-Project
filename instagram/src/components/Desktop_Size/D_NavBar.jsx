import React from "react";
import {
  LogoBox,
  MenuBox,
  MenuItem,
  NavBarContainer,
  NavMenuContainer,
} from "../Navigation_Bar_Sty";

import Home from "../../images/free-icon-home-5948524.png";
import Logo from "../../images/instagram_logo.png";
import Reels from "../../images/free-icon-video-5948543.png";
import Message from "../../images/free-icon-direct-instagram-5883507.png";
import Like from "../../images/free-icon-like-535285.png";
import Plus from "../../images/free-icon-plus-5948495.png";
import User from "../../images/44884218_345707102882519_2446069589734326272_n.jpg";
import Search from "../../images/free-icon-search-5948534.png";

const D_NavBar = () => {
  return (
    <NavBarContainer>
      <NavMenuContainer>
        <LogoBox>
          <img src={Logo} alt="로고" />
        </LogoBox>
        <MenuBox>
          <MenuItem>
            <img src={Home} alt="홈" />
            <div>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "16px",
                  fontSize: "16px",
                }}
              >
                홈
              </span>
            </div>
          </MenuItem>
          <MenuItem>
            <img src={Search} alt="검색" />
            <div>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "16px",
                  fontSize: "16px",
                }}
              >
                검색
              </span>
            </div>
          </MenuItem>
          <MenuItem>
            <span style={{ scale: "1.05" }} class="material-symbols-outlined">
              explore
            </span>
            <div>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "16px",
                  fontSize: "16px",
                }}
              >
                탐색 탭
              </span>
            </div>
          </MenuItem>
          <MenuItem>
            <img src={Reels} alt="릴스" />
            <div>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "16px",
                  fontSize: "16px",
                }}
              >
                릴스
              </span>
            </div>
          </MenuItem>
          <MenuItem>
            <img src={Message} alt="메세지" />
            <div>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "16px",
                  fontSize: "16px",
                }}
              >
                메시지
              </span>
            </div>
          </MenuItem>
          <MenuItem>
            <img src={Like} alt="알림" />
            <div>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "16px",
                  fontSize: "16px",
                }}
              >
                알림
              </span>
            </div>
          </MenuItem>
          <MenuItem>
            <img src={Plus} alt="만들기" />
            <div>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "16px",
                  fontSize: "16px",
                }}
              >
                만들기
              </span>
            </div>
          </MenuItem>
          <MenuItem>
            <img src={User} alt="프로필" />
            <div>
              <span
                style={{
                  lineHeight: "25px",
                  paddingLeft: "16px",
                  fontSize: "16px",
                }}
              >
                프로필
              </span>
            </div>
          </MenuItem>
        </MenuBox>
      </NavMenuContainer>
      <div>
        <MenuItem>
          <span class="material-symbols-outlined">menu</span>
          <div>
            <span
              style={{
                lineHeight: "25px",
                paddingLeft: "16px",
                fontSize: "16px",
              }}
            >
              더 보기
            </span>
          </div>
        </MenuItem>
      </div>
    </NavBarContainer>
  );
};

export default D_NavBar;
