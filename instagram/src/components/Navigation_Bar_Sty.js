import styled from "styled-components";

export const NavBarContainer = styled.div`
  border-right: 1px solid #dadde1;
  box-sizing: border-box;
  padding: 8px 12px 20px 12px;
  min-width: 220px;
  max-width: 16%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoBox = styled.div`
  padding: 25px 10px 16px 5px;
  width: 196px;
  height: 36px;
  margin-bottom: 19px;

  cursor: pointer;
  img {
    width: 120px;
    position: relative;
    bottom: 10px;
    transition: all 1s ease;
  }
`;

export const NavMenuContainer = styled.div`
  display: block;
`;

export const MenuBox = styled.div``;

export const MenuItem = styled.div`
  padding: 12px;
  height: 24px;
  display: flex;
  margin: 4px 0px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 8px;
  &:hover {
    scale: 1.01;
    background-color: #f2f3f5;
  }
`;

/////////////////////////////

export const NavBarContainer2 = styled.div`
  border-right: 1px solid #dadde1;
  box-sizing: border-box;
  padding: 8px 12px 20px 12px;
  width: 73px;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoBox2 = styled.div`
  padding: 12px;
  margin-bottom: 19px;
  cursor: pointer;
  img {
    height: 24px;
  }
  &:hover {
    scale: 1.01;
    background-color: #f2f3f5;
  }
`;

export const NavMenuContainer2 = styled.div`
  display: block;
`;

export const MenuItem2 = styled.div`
  padding: 12px;
  height: 24px;
  display: flex;
  margin: 4px 0px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 8px;
  &:hover {
    scale: 1.01;
    background-color: #f2f3f5;
  }
`;

/////////////////////////

export const NavBarContainer3 = styled.div`
  border-right: 1px solid #dadde1;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LogoBox3 = styled.div`
  cursor: pointer;
  img {
    width: 120px;
    position: relative;
    bottom: 6px;
  }
`;

export const NavMenuContainer3 = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MenuItem3 = styled.span`
  padding: 12px;
  height: 24px;
  width: 24px;
  display: flex;
  margin: 4px 14px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 8px;

  &:hover {
    scale: 1.05;
  }
`;
export const MenuBox2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const MenuBox2_1 = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
`;

export const InputBox = styled.div``;
