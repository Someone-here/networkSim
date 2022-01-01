export default function generateEthFrame(
  destination: Uint8Array,
  source: Uint8Array,
  type: Uint8Array,
  payload: Uint8Array,
  pre = false
): Uint8Array {
  let preamble: Uint8Array, SFD: Uint8Array;
  if (pre) {
    preamble = new Uint8Array(7);
    for (let i = 0; i < preamble.length; i++) {
      preamble[i] = 0b10101010;
    }
    SFD = Uint8Array.of(0b10101011);
  } else {
    preamble = new Uint8Array(0);
    SFD = new Uint8Array(0);
  }
  let frame = Uint8Array.of(
    ...preamble,
    ...SFD,
    ...destination,
    ...source,
    ...type,
    ...payload
  );
  return frame;
}
