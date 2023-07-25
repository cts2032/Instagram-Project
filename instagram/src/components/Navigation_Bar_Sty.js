import styled from "styled-components";

export const NavBarContainer = styled.div`
  border-right: 1px solid #dadde1;
  box-sizing: border-box;
  padding: 8px 12px 20px 12px;
  min-width: 16%;
  /* max-width: %; */
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 3;
  background-color: white;
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
  transition: 1s;
  border-radius: 8px;
  &:hover {
    background-color: #f2f3f5;
    img {
      scale: 1.1;
    }
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
  z-index: 2;
  background-color: white;
`;

export const LogoBox2 = styled.div`
  padding: 12px;
  margin-bottom: 19px;
  cursor: pointer;
  img {
    height: 24px;
    &:hover {
      scale: 1.01;
      background-color: #f2f3f5;
    }
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
    background-color: #f2f3f5;
    img {
      scale: 1.1;
    }
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
    background-color: #f2f3f5;
    img {
      scale: 1.1;
    }
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

////

export const EditorContainer = styled.div`
  border: 1px solid white;
  max-width: 710px;
  width: 60%;
  height: max-content;
  background-color: white;
  border-radius: 11px;
`;

export const EditorHeader = styled.div`
  text-align: center;
  font-size: 16px;
  height: 20px;
  border-bottom: 1px solid #cccccc;
  padding: 11px 0px;
  font-weight: bold;
`;

export const EditorBox = styled.div`
  width: 100%;
  height: 662px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  div {
    margin: 0 auto;
  }
`;

export const SP_EditorBox = styled.div`
  width: 100%;
  height: 391px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: center;
  div {
    margin: 0 auto;
  }
`;

export const ChoiceButton = styled.div`
  background-color: #0095f6;
  padding: 7px 16px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #3578e5;
  }
`;
