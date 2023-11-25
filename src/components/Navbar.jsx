import React, { useState } from "react";
import styled from "styled-components";
import logoYellow from "../img/logo-yellow.png";
import line from "../img/line.png";

// Nav바 컴포넌트
export default function Navbar() {
  return <NavbarWrap></NavbarWrap>;
}

const NavbarWrap = styled.div`
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
