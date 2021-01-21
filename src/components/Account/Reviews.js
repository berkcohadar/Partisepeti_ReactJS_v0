import React, { createElement, useState, Component } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";

export default class Reviews extends Component {
    actions = [
        <Tooltip key="comment-basic-like" title="Like">
          <span onClick={null}>
            {createElement(LikeFilled)}
            <span className="comment-action">{10}</span>
          </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
          <span onClick={null}>
            {React.createElement(DislikeFilled)}
            <span className="comment-action">{3}</span>
          </span>
        </Tooltip>,
      ];
  render() {
    return (
      <div>
        <Comment
        actions={this.actions}
          author={<a>Berk Cohadar</a>}
          avatar={
            <Avatar
              src="https://i.pinimg.com/originals/59/44/0f/59440f39a87b9cd2e8ddf9c4f4c28032.jpg"
              alt="Berk Cohadar"
            />
          }
          content={
            <p>
              Bu urunu cok begendim. Hepinize tavsiye ediyorum.
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
        <Comment
        actions={this.actions}
          author={<a>Berk Cohadar</a>}
          avatar={
            <Avatar
              src="https://i.pinimg.com/originals/59/44/0f/59440f39a87b9cd2e8ddf9c4f4c28032.jpg"
              alt="Berk Cohadar"
            />
          }
          content={
            <p>
              Kargom 1 gunde geldi mukemmelsiniz.
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
        <Comment
        actions={this.actions}
          author={<a>Berk Cohadar</a>}
          avatar={
            <Avatar
              src="https://i.pinimg.com/originals/59/44/0f/59440f39a87b9cd2e8ddf9c4f4c28032.jpg"
              alt="Berk Cohadar"
            />
          }
          content={
            <p>
              Fiyatina gore gayet guzel, canli renkleri var.
            </p>
          }
          datetime={
            <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
              <span>{moment().fromNow()}</span>
            </Tooltip>
          }
        />
      </div>
    );
  }
}
