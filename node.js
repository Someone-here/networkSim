export default class Node {
  constructor(name, network) {
    this.name = name;
    this.connections = [];
    this.network = network;
    this.network.nodes.push(this);
  }

  broadcast(message) {
    this.connections.forEach((node) => {
      node.receive(message, this);
    });
    this.network.log(`${this.name} -> broadcasted: ${message}`);
  }

  receive(message, node) {
    this.network.log(`${this.name} -> received from ${node.name}: ${message}`);
  }

  send(message, node) {
    node.receive(message);
    this.network.log(`${this.name} -> sent: ${message} to ${node.name}`);
  }
}
