export default class Network {
  constructor() {
    this.nodes = [];
    this.logs = [];
  }

  connect(node1, node2) {
    node1.connections.push(node2);
    node2.connections.push(node1);
    this.log(`${node1.name} and ${node2.name} are connected`);
  }

  log(memo) {
    console.log(memo);
    this.logs.push(`${new Date().toLocaleString("en-US")} | ${memo}`);
  }
}
