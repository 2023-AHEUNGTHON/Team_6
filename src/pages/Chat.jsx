import React, { useState } from "react";
import styled from "styled-components";
import BackNav from './../components/BackNav';
import Left from './../components/LeftChat';
import Right from './../components/RightChat';

const Container = styled.div`
  width: 100%;
`

const UserName = styled.h3`
  display: flex;
  justify-content: center;
  font-size: 30px;
  font-weight: bolder;
`

const ChatWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  height: calc(100vh - 180px);
  overflow: scroll;
`

const ChatInput = styled.input`
  width: 50%;
  font-size: 20px;
  border-radius: 15px;
  padding: 10px 20px;
  position: fixed;
  bottom: 30px;
  left: 50%; 
  transform: translateX(-50%);
  border: 0;
  background-color: #FFE7C2;
  background-image: url('../img/pencil.svg');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 20px 20px;
`

const Chat = () => {
    return(
        <Container>
            <BackNav />
            <UserName>홍길동 님</UserName>
            <ChatWrap>
                <Left content='dkㄴㅇㅇㅇ' />
                <Right content='ㅎㅇㅎㅇㅎㅎㅎ ' />
            </ChatWrap>
            <ChatInput placeholder='채팅을 입력하세요'/>
        </Container>
    )
}

export default Chat;

