import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as menuActions from "../../redux/actions/menuActions";
import { SubmenuLink } from "./Navbar.elements"

class NavigationMenu extends Component {
  componentDidMount() {
    this.props.actions.getMenu();
  }

  render() {
    return (
      <div class="wrapper">
        <div class="mega_menu container">
          <ul>
            {this.props.menuItems.map((item) => (
              <li>
                    <a href={item.url}>{item.title}</a>
                
                {item.submenus.length !== 0 ? (
                  <div class="sub_menu">
                    {item.submenus.map((submenu) => (
                      <div class="col-5">
                        <SubmenuLink href={submenu.url}>{submenu.title}</SubmenuLink>
                        {submenu.submenus.map((submini) => (
                          <p>{submini.title}</p>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

class NavigationMenu2 extends Component {
  componentDidMount() {
    this.props.actions.getMenu();
  }

  render() {
    return (
      <div class="wrapper">
        <div class="mega_menu container">
          <ul>
            {this.props.menuItems.map((item) => (
              <li>
                <a href={item.url}>{item.title}</a>
                {item.submenus.length !== 0 ? (
                  <div class="sub_menu">
                    <div className="row">
                      <div class="col align-self-start">
                        <ul className="mega_mene_ulist">
                          {item.submenus.map((submenu) => (
                            <li>
                                <SubmenuLink>{submenu.title}</SubmenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div class="col">
                            asdas
                      </div>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuItems: state.menuListReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getMenu: bindActionCreators(menuActions.getMenuItems, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu2);
