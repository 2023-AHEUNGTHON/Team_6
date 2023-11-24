import React from "react";
import styled from "styled-components";
import back from './../img/backIcon.svg';

const BackIcon = styled.img`
  margin: 15px 0 0 15px;
  cursor: pointer;
`

const BackNav = () => {
    return(
        <>
            <BackIcon src={back} />
        </>
    )
}

export default BackNav;