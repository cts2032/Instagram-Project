import React from "react";
import {
  LogoBox,
  MenuBox,
  MenuItem,
  NavBarContainer,
  NavMenuContainer,
} from "../Navigation_Bar_Sty";

const D_NavBar = ({
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
}) => {
  return (
    <NavBarContainer>
      <NavMenuContainer>
        <LogoBox>
          <img src={Logo} alt="로고" />
        </LogoBox>
        <MenuBox>
          <MenuItem
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
          <MenuItem
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
          <MenuItem
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
          <MenuItem
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
          <MenuItem
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
