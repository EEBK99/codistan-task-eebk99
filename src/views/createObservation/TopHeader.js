import React from "react";
import styled from "styled-components";
import TopHeaderLogo from "../../assets/svg/TopHeaderLogo.svg";

const TopHeader = () => {
  const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `;

  const Logo = styled.a``;

  const Humburger = styled.div``;

  const Menu = styled.div``;

  const MenuItems = styled.div`
    display: inline-flex;
  `;

  return (
    <Nav>
      <Logo href="#">
        <img
          //   style={{ width: 218.3, height: 41.45 }}
          src={TopHeaderLogo}
          alt="Safety Connect logo"
        />
      </Logo>

      <Humburger class="TopHeader__Hamburger">
        <span />
        <span />
        <span />
      </Humburger>

      <Menu>
        <MenuItems>Search</MenuItems>
        <MenuItems>Setting</MenuItems>
        <MenuItems>Notification</MenuItems>
        <MenuItems>Profile icon</MenuItems>
      </Menu>
    </Nav>
  );
};

export default TopHeader;
