import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import back from './../img/backIcon.svg';

const BackIcon = styled.img`
  margin: 15px 0 0 15px;
  cursor: pointer;
`

const BackNav = () => {
    const navigate = useNavigate();
    return(
        <>
            <BackIcon src={back} onClick={() => navigate(-1)}/>
        </>
    )
}

export default BackNav;