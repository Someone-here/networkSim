function generateFrame(destination, source, type, payload) {
  let preamble = new Uint8Array(7);
  for (let i = 0; i < preamble.length; i++) {
    preamble[i] = 0b10101010;
  }
  const SFD = Uint8Array.of(0b10101011);
  // generate frame check sequence
  let fcs = 0;
  for (let i = 0; i < preamble.length; i++) {
    fcs = fcs ^ preamble[i];
  }
  for (let i = 0; i < SFD.length; i++) {
    fcs = fcs ^ SFD[i];
  }
  for (let i = 0; i < destination.length; i++) {
    fcs = fcs ^ destination[i];
  }
  for (let i = 0; i < source.length; i++) {
    fcs = fcs ^ source[i];
  }
  for (let i = 0; i < type.length; i++) {
    fcs = fcs ^ type[i];
  }
  for (let i = 0; i < payload.length; i++) {
    fcs = fcs ^ payload[i];
  }
  let fcs_array = new Uint8Array(1);
  fcs_array[0] = fcs;
  // concatenate all parts
  let frame = Array.of(
    ...preamble,
    ...SFD,
    ...destination,
    ...source,
    ...type,
    ...payload,
    ...fcs_array
  );
  function toHexString(byteArray) {
    return Array.prototype.map
      .call(byteArray, function (byte) {
        return ("0" + (byte & 0xff).toString(16)).slice(-2);
      })
      .join("");
  }
  return toHexString(frame);
}

const destination = Uint8Array.of(0xf0, 0x3f, 0x95, 0x9c, 0xea, 0x77);
const source = Uint8Array.of(0xd8, 0x0f, 0x99, 0x64, 0xd1, 0xe5);
const payload = Uint8Array.of(
  0x45,
  0x00,
  0x00,
  0x28,
  0xba,
  0x58,
  0x40,
  0x00,
  0x80,
  0x06,
  0x5c,
  0x29,
  0xc0,
  0xa8,
  0x12,
  0x07,
  0x0d,
  0x6b,
  0x04,
  0x34,
  0xce,
  0xdd,
  0x00,
  0x50,
  0x16,
  0xc8,
  0x76,
  0x26,
  0xdf,
  0x3c,
  0x5f,
  0x2b,
  0x50,
  0x10,
  0x02,
  0x00
);

console.log(
  generateFrame(destination, source, Uint8Array.of(0x08, 0x00), payload)
);
