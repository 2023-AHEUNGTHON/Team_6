import React, { useState } from "react";
import styled from "styled-components";
import logoYellow from "../img/logo-yellow.png";
import line from "../img/line.png";

// 푸터 컴포넌트
export default function Footer() {
  return (
    <FooterWrap>
      <div className="footer-container">
        <img src={logoYellow} alt="logo" className="logo" />
        <img src={line} alt="line" className="line" />
        <div className="footer-text">
          <p>Contact univ-us@naver.com</p>
          <p>© 2023. Univ-Us Corp. All right reserved.</p>
        </div>
      </div>
    </FooterWrap>
  );
}

const FooterWrap = styled.div`
  background: #edca85;
  width: 100%;
  height: 307px;
  display: flex;
  justify-content: center;

  .footer-container {
    width: 1000px;
    display: flex;
    flex-direction: column;

    .logo {
      width: 102px;
      height: 66.141px;
      margin-top: 44px;
    }

    .line {
      margin-top: 65px;
    }

    .footer-text {
      margin-top: 29px;

      p {
        color: #fff;
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
        line-height: 15.254px;
        margin-bottom: 33px;
      }
    }
  }
`;
