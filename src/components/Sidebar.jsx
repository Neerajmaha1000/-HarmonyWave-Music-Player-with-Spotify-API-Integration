import React from "react";
import styled from "styled-components";
import { MdHomeFilled, MdSearch } from "react-icons/md";
import { IoLibrary } from "react-icons/io5";
import Playlists from "./Playlists";
import logo_color from "./logo_color.png"; // Import the image

export default function Sidebar() {
  return (
    <Container>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
      />
      <div className="top__links">
        <div className="logo">
          <img src={logo_color} alt="spotify" />
          <p className="name">by Neeraj Mahajan</p>
        </div>
        <ul>
          <li>
            <MdHomeFilled />
            <span>Home</span>
          </li>
          <li>
            <MdSearch />
            <span>Search</span>
          </li>
          <li>
            <IoLibrary />
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlists />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .top__links {
    display: flex;
    flex-direction: column;
    .logo {
      text-align: center;
      margin: 1rem 0;
      padding-top: 1rem;
      img {
        max-inline-size: 80%;
        block-size: auto;
      }
    }
    .name {
      padding-right :25px;
      font-size: 12px; /* Adjust the font size to your preference */
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      li {
        display: flex;
        gap: 1rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: white;
        }
      }
    }
  }
`;
