import Node from "./node";
import Network from "../network";

export default class Client extends Node {
  type: string;
  constructor(name: string, network: Network) {
    super(name, network);
    this.type = "client";
  }
}
