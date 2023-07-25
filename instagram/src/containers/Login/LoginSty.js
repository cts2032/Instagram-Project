import { styled } from "styled-components";

export const ImageBox = styled.div``;

export const LoginBox = styled.div``;

export const MainContainer = styled.div`
  margin-top: 15px;
  width: 350px;
  height: 400px;
  border: 1px solid #dfdfdf;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 180px;
    margin: 50px 0 40px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    background-color: #fafafa;
    width: 260px;
    height: 32px;
    margin-bottom: 7px;
    border-radius: 3px;
    border: none;
    outline: 1px solid #ddd;
    font-size: 12px;
    padding-left: 8px;
  }
  input:focus {
    outline: 1px solid #aaa;
  }
`;

export const LoginButton = styled.button`
  background-color: #0095f6;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 14px;
  font-weight: bold;
  height: 32px;
  border-radius: 8px;
  margin-top: 8px;
  :hover& {
    background-color: rgba(1, 120, 255);
  }
`;

export const Or = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  p {
    font-size: 12px;
    margin: 0 15px 0 15px;
    font-weight: bold;
    color: gray;
  }
  div {
    height: 1px;
    width: 107px;
    border-bottom: 1px solid #ddd;
  }
`;

export const FacebookLogin = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  cursor: pointer;
  img {
    margin-bottom: 48px;
    width: 25px;
  }
  p {
    color: #385185;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const ForgetPw = styled.div`
  cursor: pointer;
  font-size: 12px;
  color: gray;
  margin-top: -5px;
`;

export const JoinContainer = styled.div`
  margin: 0 auto;
  margin-top: 10px;
  width: 350px;
  height: 65px;
  border: 1px solid #dfdfdf;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 14px;
    color: #333333;
    margin-right: 5px;
  }
  .join {
    color: #0095f6;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const DownloadContainer = styled.div`
  margin: 0 auto;
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 55px;
  p {
    font-size: 14px;
    color: #333333;
    margin-right: 5px;
  }
  .join {
    color: #0095f6;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Images = styled.div`
  display: flex;
  img {
    height: 40px;
    margin: 0 5px 0 5px;
    cursor: pointer;
  }
`;

export const Footer = styled.div`
  p {
    margin: 0 7px 0 7px;
    line-height: 23px;
    letter-spacing: -0.5px;
    color: #737373;
    font-size: 13px;
  }
  .click {
    cursor: pointer;
  }
`;

export const Footers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Footers2 = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 55px;
  .language {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
