export function stringToBinary(str: string): Uint8Array {
  var result = new Uint8Array(str.length);
  for (var i = 0; i < str.length; i++) {
    result[i] = str.charCodeAt(i);
  }
  return result;
}

export function binaryToString(byteArray: Uint8Array): string {
  var result = "";
  for (var i = 0; i < byteArray.length; i++) {
    result += String.fromCharCode(byteArray[i]);
  }
  return result;
}

export function toHexString(byteArray: Uint8Array, separator = ""): string {
  return Array.prototype.map
    .call(byteArray, function (byte: number) {
      return ("0" + (byte & 0xff).toString(16)).slice(-2);
    })
    .join(separator);
}
