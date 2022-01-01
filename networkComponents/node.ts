import { toHexString } from "../utils";
import Network from "../network";

export default class Node {
  name: string;
  connections: Node[];
  mac: Uint8Array;
  network: Network;
  constructor(name: string, network: Network) {
    this.name = name;
    this.connections = [];
    this.mac = Uint8Array.from(new Uint8Array(6), () =>
      Math.floor(Math.random() * 256)
    );
    this.network = network;
    this.network.nodes.push(this);
  }

  broadcast(message: Uint8Array) {
    this.connections.forEach((node) => {
      node.receive(message, this);
    });
    this.network.log(
      `${this.name} -> broadcasted: \n ${toHexString(message, " ")}`
    );
  }

  receive(message: Uint8Array, node: Node) {
    this.network.log(
      `${this.name} -> received from ${node.name}: \n ${toHexString(
        message,
        " "
      )}`
    );
  }
}
