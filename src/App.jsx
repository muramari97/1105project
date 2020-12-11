import React from 'react';
import ReactDOM from 'react-dom';
import {Page, Button, Toolbar} from 'react-onsenui';
import {notification} from 'onsenui';

import './style.css';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectMenu:0};
    this.onClickMenu1 = this.onClickMenu1.bind(this);
  }

  renderToolbar(){
    return(
      <Toolbar>
        <div calssName='center'>CSSで見た目を変える</div>
      </Toolbar>
    );
  }

  onClickMenu1(){
    this.setState({selectMenu:1});
  }
  onClickMenu2(){
    this.setState({selectMenu:2});
  }
  onClickMenu3(){
    this.setState({selectMenu:3});
  }
  onClickMenu4(){
    this.setState({selectMenu:4});
  }

  render(){
    var styleHello={"color":"red"};

    var menuItemClass = "item";
    if(this.state.selectMenu == 1){
      menuItemClass = "item-selected";
      styleHello={"color":"black", "width": 50px};
    }
    if(this.state.selectMenu == 2){
      menuItemClass = "item-selected";
      styleHello={"color":"yellow", "width": 500px};
    }
    if(this.state.selectMenu == 3){
      menuItemClass = "item-selected";
      var styleHello={"color":"white", "width": 100px};
    }
    if(this.state.selectMenu == 4){
      menuItemClass = "item-selected";
      var styleHello={"color":"red", "width": 25px};
    }

  return (
      <Page renderToolbar={this.renderToolbar}>
        <div className="midashi">見出しタイトル</div>
        <p style={styleHello}>はろー！</p>
        <ul className="menu">
          <li className={menuItemClass} onClick={this.onClickMenu1}>メニュー1</li>
          <li className={menuItemClass} onClick={this.onClickMenu2}>メニュー2</li>
          <li className={menuItemClass} onClick={this.onClickMenu3}>メニュー3</li>
          <li className={menuItemClass} onClick={this.onClickMenu4}>メニュー4</li>
        </ul>
      </Page>
    );
  }
}