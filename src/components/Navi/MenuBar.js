import { Menu } from 'antd';
import { Component } from 'react';
import { Row } from 'reactstrap';
import { connect } from "react-redux";

const { SubMenu } = Menu;

class MenuBar extends Component {
   
  state = {
    current: "",};

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    return (
        <Row className="justify-content-md-center navbox">
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                {this.props.menuItems.map((category) => (
                    category.submenus !== null ? 
                    <SubMenu
                    key={category.tabId}
                    title={category.title}
                    >  
                        {category.submenus.map((submenu)=> ( 
                        <Menu.ItemGroup title={submenu.title}>
                            {submenu.submenus.map((submini)=>( 
                                <Menu.Item key={submini.slug}>{submini.title}</Menu.Item>
                            ))}
                        </Menu.ItemGroup>
                    ))}

                    </SubMenu>
                    : 
                    <Menu.Item key={category.tabId} >
                        <a href={category.url} rel="noopener noreferrer">
                        {category.title}
                    </a>
                </Menu.Item>
                ))}
                
            </Menu>
        </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    menuItems: state.menuListReducer,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       getCategories: bindActionCreators(
//         categoryActions.getCategories,
//         dispatch
//       ),
//       changeCategory:  bindActionCreators(
//         categoryActions.changeCategory,
//         dispatch
//       ),
//       getProducts : bindActionCreators(productActions.getProducts,dispatch),
//     },
//   };
// }

export default connect(mapStateToProps)(MenuBar);