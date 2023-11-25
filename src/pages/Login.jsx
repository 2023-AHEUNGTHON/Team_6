import React, { useState } from "react";
import styled from "styled-components";
import icon from "../img/loginIcon.png";
import logoText from "../img/univ-us.png";
import { Navigate, useNavigate } from "react-router-dom";

// 로그인 페이지
export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <LoginWrap>
      <div className="logo">
        <img src={icon} alt="icon" className="icon" />
        <img src={logoText} alt="logoText" className="logoText" />
      </div>
      <h2 className="subtitle">팀으로 하나 되는 우리의 Univ-Us</h2>
      <input
        className="id"
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></input>
      <input
        className="pw"
        placeholder="비밀번호를 입력하세요"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      ></input>
      <button className="login-btn">로그인</button>
      <div className="sign-up">
        <p>아직 회원이 아니시라면</p>
        <h4
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          회원가입
        </h4>
      </div>
    </LoginWrap>
  );
}

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .logo {
    display: flex;
    align-items: center;
    gap: 25px;

    .icon {
      width: 74px;
      height: 100px;
    }
    .logoText {
      width: 100px;
      height: 65px;
    }
  }

  .subtitle {
    color: #ffb240;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 15.073px;
    margin-top: 22px;
  }

  .id {
    margin-top: 42px;
  }

  .pw {
    margin-top: 10px;
  }

  .id,
  .pw {
    width: 241px;
    height: 64px;
    border-radius: 50px;
    background: #ffe7c2;
    border: none;
    padding: 16px 50px;
    box-sizing: border-box;

    &::placeholder {
      color: #b8ac99;
      font-size: 16px;
      font-style: normal;
      font-weight: 800;
      line-height: 15.073px;
    }

    &:focus {
      outline: none;
    }
  }

  .login-btn {
    width: 241px;
    height: 40px;
    border-radius: 30px;
    border: none;
    background: #fff4e3;
    margin-top: 20px;

    color: black;
  }

  .sign-up {
    margin-top: 36px;

    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    color: #b8ac99;
    font-style: normal;
    font-weight: 800;
    line-height: 15.073px;

    p {
      font-size: 12px;
    }
    h4 {
      font-size: 15px;
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
`;
