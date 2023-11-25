import React, { useState } from "react";
import styled from "styled-components";
import right from "../img/rightChat.svg";

const RightChatBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 20px 0;
  position: relative;
`

const RightChatContent = styled.div`
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

const RightImg = styled.img`
  position: relative;
  top: 19px;
  right: 50px;
  z-index: -1;
`

const RightChat = ({content}) => {
    return(
        <RightChatBox>
            <RightChatContent>
                안녕하세요
            </RightChatContent>
            <RightImg src={right} />
        </RightChatBox>
    )
}

export default RightChat;