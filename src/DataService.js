import axios from "axios";

const API_URL = "http://localhost:8983/solr/";

class DataService {
  getAllItems() {
    axios.get("${API_URL}/item");
  }
  getItemsbyTitle(title) {
    axios.get("${API_URL}/item/{name}");
  }
  getItemsbyId(id) {
    axios.get("${API_URL}/item/{id}");
  }
  getItemsbyDescr(descr) {
    axios.get("${API_URL}/item/{descr}");
  }
  createItem(item) {
    return axios.post("${API_URL}/items", item);
  }
  deleteItem(title) {
    return axios.delete("${API_URL}/item/{title}");
  }
}

export default new DataService();
