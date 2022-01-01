import Client from "./networkComponents/client";
import Network from "./network";
import generateEthFrame from "./protocols/ethernet";
import Switch from "./networkComponents/switch";

const network = new Network();
const client1 = new Client("client1", network);
const client2 = new Client("client2", network);
const swit = new Switch("switch", network);

const payload = new Uint8Array(64);
payload.forEach((_, i) => (payload[i] = i % 256));

network.connect(client1, swit);
network.connect(client2, swit);
client1.broadcast(
  generateEthFrame(
    client2.mac,
    client1.mac,
    Uint8Array.of(0x08, 0x00),
    payload,
    false
  )
);
