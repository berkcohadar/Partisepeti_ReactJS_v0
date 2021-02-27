// import { Menu,Affix } from 'antd';
// import { Component } from 'react';
// import { Row } from 'reactstrap';
// import { connect } from "react-redux";

// const { SubMenu } = Menu;
// class MenuBar extends Component {
//   state = {
//     current: "",};

//   handleClick = e => {
//     console.log('click ', e);
//     this.setState({ current: e.key });
//   };
//   render() {
//     const { current } = this.state;
//     return (
//       <Affix offsetTop={0} className="navbox">
//       <div className="menubar-container">
//         <Row className="justify-content-md-center">
//             <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
//                 {this.props.menuItems.map((category) => (
//                     category.submenus !== null ? 
//                     <SubMenu
//                     key={category.tabId}
//                     title={category.title}
                    
//                     > <a href={category.url}></a>
//                         {category.submenus.map((submenu)=> ( 
//                         <Menu.ItemGroup title={submenu.title}>
//                             {submenu.submenus.map((submini)=>( 
//                                 <Menu.Item  key={submini.slug}><a href={submini.url}>{submini.title}</a></Menu.Item>
//                             ))}
//                         </Menu.ItemGroup>
//                     ))}

//                     </SubMenu> 
//                     : 
//                     <Menu.Item key={category.tabId} >
//                         <a href={category.url} rel="noopener noreferrer">
//                         {category.title}
//                     </a>
//                   </Menu.Item>
//                 ))}
                
//             </Menu>
//         </Row>
//         </div>
//         </Affix>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     menuItems: state.menuListReducer,
//   };
// }

// // function mapDispatchToProps(dispatch) {
// //   return {
// //     actions: {
// //       getCategories: bindActionCreators(
// //         categoryActions.getCategories,
// //         dispatch
// //       ),
// //       changeCategory:  bindActionCreators(
// //         categoryActions.changeCategory,
// //         dispatch
// //       ),
// //       getProducts : bindActionCreators(productActions.getProducts,dispatch),
// //     },
// //   };
// // }

// export default connect(mapStateToProps)(MenuBar);