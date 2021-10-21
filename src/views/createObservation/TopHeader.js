import React, { useState } from "react";
import styled from "styled-components";
import TopHeaderLogo from "../../assets/svg/TopHeaderLogo.svg";
import TopHeaderSettingIcon from "../../assets/svg/TopHeaderSettingIcon.svg";
import TopHeaderNotificationIcon from "../../assets/svg/TopHeaderNotifiIcon.svg";
import { Button, Tooltip, Avatar, Badge } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";

const TopHeader = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <Nav>
      <Logo href="#">
        <img src={TopHeaderLogo} alt="Safety Connect logo" />
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
        <MenuItems>
          <Button
            style={{ background: "#37487E", color: "white", border: "none" }}
            className="MenuItems__Search"
          >
            Search
            <span style={{ width: "140px" }}> </span>
            <SearchOutlined />
          </Button>
        </MenuItems>

        <MenuItems>
          <Tooltip title="Settings">
            <img src={TopHeaderSettingIcon} alt="Setting Icon" />
          </Tooltip>
        </MenuItems>

        <MenuItems>
          <Badge style={{ background: "red" }} size="small" count={2}>
            <Tooltip title="Notifications">
              <img src={TopHeaderNotificationIcon} alt="Notification Icon" />
            </Tooltip>
          </Badge>
        </MenuItems>

        <MenuItems>
          <Badge style={{ background: "red" }} size="small" count={1}>
            <Tooltip title="Profile">
              <Avatar icon={<UserOutlined />} />
            </Tooltip>
          </Badge>
        </MenuItems>
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
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: row;
    width: 100%;
    background-color: #112565;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.6s ease-in;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
  }
`;

const MenuItems = styled.div`
  padding: 0rem 0.6rem;
  text-align: start;
  cursor: pointer;
`;

export default TopHeader;
