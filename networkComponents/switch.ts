import Node from "./node";
import Network from "../network";

export default class Switch extends Node {
  type: string;
  constructor(name: string, network: Network) {
    super(name, network);
    this.type = "switch";
  }
}
