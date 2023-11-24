import React, { useState } from "react";
import styled from "styled-components";
import BackNav from './../components/BackNav';
import mainLogo from './../img/mainLogo2.svg';

const Container = styled.div`
  width: 100%;
`

const MainLogoWrap = styled.div`
  display: flex;
  justify-content: center;
`

const MainLogo = styled.img``

const InputWrap = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  margin: 30px auto 10px auto;
`

const TitleInput = styled.input`
  height: 40px;
  padding: 5px 10px;
  font-size: 22px;
  border: 0;
  background-color: #FFF5E6;
  border-radius: 15px;
  font-weight: 700;
`

const ContentInput = styled.textarea`
  height: 400px;
  padding: 10px 15px;
  font-size: 20px;
  border: 0;
  background-color: #FFF5E6;
  border-radius: 15px;
  margin-top: 20px;
  resize: none;
`

const CompleteButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 85%;
  margin: 20px auto 0 auto;
`

const CompleteButton = styled.button`
  border: 0;
  border-radius: 15px;
  cursor: pointer;
  background-color: #997142;
  color: white;
  font-weight: 700;
  width: 70px;
  height: 40px;
  font-size: 20px;
`

const WritePost = () => {
    return(
        <Container>
            <BackNav />
            <MainLogoWrap>
                <MainLogo src={mainLogo} />
            </MainLogoWrap>
            <InputWrap>
                <TitleInput placeholder='제목을 입력하세요'/>
                <ContentInput placeholder='내용을 입력하세요'/>
            </InputWrap>
            <CompleteButtonWrap>
                <CompleteButton>완료</CompleteButton>
            </CompleteButtonWrap>
        </Container>
    )
}

export default WritePost;