import React, { useState } from "react";
import styled from "styled-components";
import profile from './../img/chatProfile.svg';
import left from './../img/leftChat.svg';

const LeftChatBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 20px 0;
  position: relative;
`

const ProfileImg = styled.img`
  width: 40px;
  margin-right: 10px;
`

const ChatContent = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  background-color: #FFD686;
  border-radius: 30px;
  color: white;
  z-index: 0;
`

const LeftImg = styled.img`
  position: absolute;
  left: 75px;
  top: 23px;
  z-index: -1;
`


const LeftChat = ({content}) => {
    return(
        <LeftChatBox>
            <ProfileImg src={profile} />
            <ChatContent>
                {content}
            </ChatContent>
            <LeftImg src={left} />
        </LeftChatBox>
    )
}

export default LeftChat;