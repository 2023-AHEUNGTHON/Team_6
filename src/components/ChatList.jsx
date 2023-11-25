import React, { useState } from "react";
import styled from "styled-components";
import profile from './../img/chatListProfile.svg';
import newIcon from './../img/newIcon.svg';

const NewListWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`

const LeftListWrap = styled.div`
  display: flex;
`

const ListWrap = styled.div`
  display: flex;
  margin: 10px 0;
`

const ProfileImg = styled.img`
  width: 50px;
`

const ContentWrap = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
`

const Name = styled.h3`
  font-weight: bolder;
  font-size: 25px;
`

const Content = styled.p`
  font-weight: bolder;
  font-size: 22px;
  color: #C6C3BF;
  margin-top: 5px;
`

const NewIcon = styled.img`
  
`

const ChatList = ({newCheck, name, content}) => {
    return(
        <>
            {newCheck == 'true' ?
                <NewListWrap>
                    <LeftListWrap>
                        <ProfileImg src={profile} />
                        <ContentWrap>
                            <Name>{name}</Name>
                            <Content>{content}</Content>
                        </ContentWrap>
                    </LeftListWrap>
                    <NewIcon src={newIcon} />
                </NewListWrap>
                :
                <ListWrap>
                    <ProfileImg src={profile} />
                    <ContentWrap>
                        <Name>{name}</Name>
                        <Content>{content}</Content>
                    </ContentWrap>
                </ListWrap>
            }
        </>
    )
}

export default ChatList;
