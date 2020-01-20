import React, { Component } from "react";
class Item extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.title}</td>
        <td>{this.props.item.price}</td>
        <td>{this.props.item.descr}</td>
      </tr>
    );
  }
}

export default Item;
