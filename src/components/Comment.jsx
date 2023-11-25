import profile from "../img/profile.svg";
import React from "react";
import styled from "styled-components";

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`

const MemberWrap = styled.div`
  display: flex;
  align-items: center;
`

const CommentProfileName = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
`

const CommentContent = styled.div`
  font-weight: bolder;
  margin-top: 10px;
  font-size: 20px;
`

const ProfileImg = styled.img`
  width: 20px;
`

const Comment = ({name, comment}) => {
    return(
        <CommentBox>
            <MemberWrap>
                <ProfileImg src={profile} />
                <CommentProfileName>{ name }</CommentProfileName>
            </MemberWrap>
            <CommentContent>{ comment }</CommentContent>
        </CommentBox>
    )
}

export default Comment;