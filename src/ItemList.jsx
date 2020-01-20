import React, { Component } from "react";
import Item from "./Item";
import DataService from "./DataService";
class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.refresh = this.refresh.bind(this);
  }
  componentDidMount() {
    this.refresh();
  }

  refresh() {
    DataService.getAllItems();
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {this.state.items.map(Item => (
            <tr key={Item.id}>
              <td>{Item.id}</td>
              <td>{Item.title}</td>
              <td>{Item.price}</td>
              <td>{Item.descr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ItemList;
