import React, { useState } from "react";
import {
  Container,
  DownloadContainer,
  FacebookLogin,
  Footer,
  Footers,
  Footers2,
  ForgetPw,
  ImageBox,
  Images,
  JoinContainer,
  LoginBox,
  LoginButton,
  LoginForm,
  MainContainer,
  Or,
} from "./LoginSty";
import Logo from "../../images/Insta_black_Logo.png";
import FacebookLogo from "../../images/facebook_logo.png";
import GooglePlay from "../../images/GooglePlay_img.png";
import Microsoft from "../../images/Microsoft_img.png";
import PhoneImg from "../../images/phone_img.png";
import PhoneImg1 from "../../images/phone_1.png";
import PhoneImg2 from "../../images/phone_2.png";
import PhoneImg3 from "../../images/phone_3.png";
import PhoneImg4 from "../../images/phone_4.png";
import { FooterList } from "./LoginList";
import "./LoginMedia.css";

const LoginContainer = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="total">
      <div className="container">
        <ImageBox className="phone">
          <img src={PhoneImg} alt="Phone" />
        </ImageBox>
        <LoginBox>
          <MainContainer>
            <img src={Logo} alt="logo" />
            <LoginForm>
              <input
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                value={id}
                onChange={(e) => setId(e.target.value)}
              ></input>
              <input
                type="password"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <LoginButton type="submit">로그인</LoginButton>
            </LoginForm>
            <Or>
              <div />
              <p>또는</p>
              <div />
            </Or>
            <FacebookLogin>
              <img src={FacebookLogo} alt="페이스북" />
              <p>Facebook으로 로그인</p>
            </FacebookLogin>
            <ForgetPw>비밀번호를 잊으셨나요?</ForgetPw>
          </MainContainer>
          <JoinContainer>
            <p>계정이 없으신가요?</p>
            <p className="join">가입하기</p>
          </JoinContainer>
          <DownloadContainer>
            <p>앱을 다운로드하세요.</p>
            <Images>
              <img src={GooglePlay} alt="Google Play" />
              <img src={Microsoft} alt="Microsoft" />
            </Images>
          </DownloadContainer>
        </LoginBox>
      </div>
      <Footer className="footer">
        <Footers>
          {FooterList.map((item) => (
            <p className="click" key={item.name}>
              {item.name}
            </p>
          ))}
        </Footers>
        <Footers2>
          <p className="language">
            한국어<span class="material-symbols-outlined">expand_more</span>
          </p>
          <p>© 2023 Instagram from Meta</p>
        </Footers2>
      </Footer>
    </div>
  );
};

export default LoginContainer;
