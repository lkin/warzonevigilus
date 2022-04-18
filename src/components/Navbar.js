import React from "react";
import { Link } from "gatsby";
import discord from "../img/discord-icon.svg";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
          
            <Link to="/" className="navbar-item" title="Logo">
              {/* <img src={logo} alt="Kaldi" style={{ width: "88px" }} /> */}
              「ヴィジルスの孤立」キャンペーン
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">

            

              <AnchorLink className="navbar-item" to="/#members">
                参加者
              </AnchorLink>
              <AnchorLink className="navbar-item" to="/#rules">
                ハウスルール
              </AnchorLink>
              <AnchorLink className="navbar-item" to="/#ability">
                戦域と戦況
              </AnchorLink>
              <AnchorLink className="navbar-item" to="/#blog">
                進歩報告とバトルレポート
              </AnchorLink>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://discord.gg/yeKNeRNN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={discord} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>

    );
  }
};

export default Navbar;
