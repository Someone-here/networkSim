export function stringToBinary(str) {
  var result = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    result[i] = str.charCodeAt(i);
  }
  return result;
}

export function binaryToString(binary) {
  var result = "";
  for (var i = 0; i < binary.length; i++) {
    result += String.fromCharCode(binary[i]);
  }
  return result;
}
