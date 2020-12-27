import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as menuActions from "../../redux/actions/menuActions";

class NavigationMenu extends Component {

    componentDidMount(){
        this.props.actions.getMenu();
        console.log(this.props.menuItems)
    }

    render(){
    return (
        <div class="wrapper">
            <div class="mega_menu container">
		    <ul>
                {this.props.menuItems.map(item=>(
                    <li>
                        <a href={item.url}>{item.title}</a>
                        {item.submenus.length !== 0 ? 
                        <div class="sub_menu">
                            {item.submenus.map(submenu=>(
                                <div class="col">
                                    <a href={submenu.url}>{submenu.title}</a>
                                    {submenu.submenus.map(submini => (
                                        <p>{submini.title}</p>
                                    ))}
                                </div>
                            ))}
                        </div> 
                        : 
                        <div>

                        </div>
                        }
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(NavigationMenu);
  