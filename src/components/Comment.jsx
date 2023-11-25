import profile from "../img/profile.svg";
import React from "react";
import styled from "styled-components";
import editBtn from "../img/editBtn.svg";
import deleteBtn from "../img/deleteBtn.svg";
import api from "../apis/api";
import {useNavigate} from "react-router-dom";

const CommentBigWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 20px;
`

const EditBtn = styled.img`
  cursor: pointer;
`

const DeleteBtn = styled.img`
  cursor: pointer;
  margin-left: 15px;
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

const Comment = ({name, comment, mine, id}) => {
    const navigate = useNavigate();

    function deleteComment(){
        api.post("deletecomment/", {
            'id': id
        }).then(response => {
            alert('댓글이 삭제되었습니다.');
            window.location.reload();
        }).catch(error => {
            alert('댓글을 삭제할 수 없습니다.');
        })
    }

    return(
        <>
            { mine === true ?
                <CommentBox>
                    <MemberWrap>
                        <ProfileImg src={profile} />
                        <CommentProfileName>{ name }</CommentProfileName>
                    </MemberWrap>
                    <CommentContent>{ comment }</CommentContent>
                </CommentBox>
            :
            <CommentBigWrap>
                <CommentBox>
                    <MemberWrap>
                        <ProfileImg src={profile} />
                        <CommentProfileName>{ name }</CommentProfileName>
                    </MemberWrap>
                    <CommentContent>{ comment }</CommentContent>
                </CommentBox>
                <ButtonWrap>
                    <DeleteBtn src={deleteBtn} onClick={deleteComment}/>
                </ButtonWrap>
            </CommentBigWrap>
            }
        </>
    )
}

export default Comment;