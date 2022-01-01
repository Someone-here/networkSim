import { toHexString } from "./utils";

export default class Network {
  nodes: any[];
  logs: string[];
  constructor() {
    this.nodes = [];
    this.logs = [];
  }

  connect(node1: any, node2: any) {
    if (node1.type === node2.type && node1.type === "client") {
      this.log(
        `${node1.name} and ${node2.name} are clients and cannot be connected`
      );
      return;
    }
    node1.connections.push(node2);
    node2.connections.push(node1);
    this.log(
      `${node1.name}(${toHexString(node1.mac, ":")}) and ${
        node2.name
      }(${toHexString(node2.mac, ":")}) are connected`
    );
  }

  log(memo: string) {
    console.log(memo);
    this.logs.push(`${new Date().toLocaleString("en-US")} | ${memo}`);
  }
}
