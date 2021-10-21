import React from "react";
import styled from "styled-components";
import TopHeaderLogo from "../../assets/svg/TopHeaderLogo.svg";

const TopHeader = () => {
  const Nav = styled.div``;

  return (
    <Nav>
      <a href="#">
        <img src={TopHeaderLogo} alt="Safety Connect logo" />
      </a>
    </Nav>
  );
};

export default TopHeader;
