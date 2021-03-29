// TTN V2
function Decoder(bytes, port) {
  var decoded = {};
  decoded.latitude = ((bytes[0]<<24)>>>0) + ((bytes[1]<<16)>>>0) + ((bytes[2]<<8)>>>0) + bytes[3];
  decoded.latitude /= 10e4;
  decoded.longitude = ((bytes[4]<<24)>>>0) + ((bytes[5]<<16)>>>0) + ((bytes[6]<<8)>>>0) + bytes[7];
  decoded.longitude /= 10e4;
  decoded.dur = bytes[8];
  return decoded;
}

// TTN V3
function decodeUplink(input) {
  const bytes = input.bytes, data = {}
  data.latitude = ((bytes[0]<<24)>>>0) + ((bytes[1]<<16)>>>0) + ((bytes[2]<<8)>>>0) + bytes[3];
  data.latitude /= 10e4;
  data.longitude = ((bytes[4]<<24)>>>0) + ((bytes[5]<<16)>>>0) + ((bytes[6]<<8)>>>0) + bytes[7];
  data.longitude /= 10e4;
  data.dur = bytes[8];
  return {
    data,
    warnings: [],
    errors: []
  };
}
