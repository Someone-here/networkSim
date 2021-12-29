import Node from "./node";
import Network from "./network";

const prompt = require("prompt-sync")({ sigint: true });

class Switch extends Node {
  constructor(name) {
    super(name);
  }
}

const network = new Network();
const node1 = new Node("node1", network);
const node2 = new Node("node2", network);

while (true) {
  try {
    eval(prompt("-> "));
  } catch (e) {
    console.log(e.message);
  }
}
