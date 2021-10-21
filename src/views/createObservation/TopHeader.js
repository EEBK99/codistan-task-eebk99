import React, { useState } from "react";
import styled from "styled-components";
import TopHeaderLogo from "../../assets/svg/TopHeaderLogo.svg";

const TopHeader = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <Nav>
      <Logo href="#">
        <img
          //   style={{ width: 218.3, height: 41.45 }}
          src={TopHeaderLogo}
          alt="Safety Connect logo"
        />
      </Logo>

      <Humburger
        class="TopHeader__Hamburger"
        onClick={() => setisOpen(!isOpen)}
      >
        <span />
        <span />
        <span />
      </Humburger>

      <Menu isOpen={isOpen}>
        <MenuItems>Search</MenuItems>
        <MenuItems>Setting</MenuItems>
        <MenuItems>Notification</MenuItems>
        <MenuItems>Profile icon</MenuItems>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Logo = styled.a``;

const Humburger = styled.div`
  display: none;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 22px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    background-color: #112565;
    /* here it is checking eitheir it has to open or not using isOpen props  */
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
  }
`;

const MenuItems = styled.div`
  padding: 0rem 0.225rem;
  text-align: start;
`;

export default TopHeader;
