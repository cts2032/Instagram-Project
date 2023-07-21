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
  ExploreImg,
  HomeClick,
  LikeClick,
  ReelsClick,
  PlusClick,
  MessageClick,
  ExploreClick,
  SearchClick,
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
  MoreScale,
  handleMoreDown,
  handleMoreUp,
  SearchScale,
  handleSearchDown,
  handleSearchUp,
  SearchCheck,
}) => {
  return (
    <NavBarContainer2>
      <NavMenuContainer2>
        <MenuBox>
          <div style={{ padding: "0px 0px 23px", margin: "17px 0px 0px " }}>
            <MenuItem2>
              <img src={SmallLogo} alt="로고" />
            </MenuItem2>
          </div>
          <MenuItem2
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
          </MenuItem2>
          <MenuItem2
            onClick={SearchClick}
            onMouseDown={handleSearchDown}
            onMouseUp={handleSearchUp}
            style={{ border: SearchCheck ? "1px solid lightgray" : "none" }}
          >
            <img
              style={{
                transform: SearchScale ? "scale(0.8)" : "scale(1)",
                transition: "transform 0.2s ease",
              }}
              src={Search}
              alt="검색"
            />
          </MenuItem2>
          <MenuItem2
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
          </MenuItem2>
          <MenuItem2
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
          </MenuItem2>
          <MenuItem2
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
          </MenuItem2>
          <MenuItem2
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
          </MenuItem2>
          <MenuItem2
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
          </MenuItem2>
          <MenuItem
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
          </MenuItem>
        </MenuBox>
      </NavMenuContainer2>
      <div>
        <MenuItem2 onMouseDown={handleMoreDown} onMouseUp={handleMoreUp}>
          <span
            style={{
              transform: MoreScale ? "scale(0.8)" : "scale(1)",
              transition: "transform 0.2s ease",
            }}
            class="material-symbols-outlined"
          >
            menu
          </span>
        </MenuItem2>
      </div>
    </NavBarContainer2>
  );
};

export default S_NavBar;
