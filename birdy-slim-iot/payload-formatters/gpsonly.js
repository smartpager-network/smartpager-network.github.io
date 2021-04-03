// TTN V2
function Decoder(bytes, port) {
  var decoded = {};
  decoded.longitude = ((bytes[0]<<24)>>>0) + ((bytes[1]<<16)>>>0) + ((bytes[2]<<8)>>>0) + bytes[3];
  decoded.longitude /= 10e4;
  decoded.latitude = ((bytes[4]<<24)>>>0) + ((bytes[5]<<16)>>>0) + ((bytes[6]<<8)>>>0) + bytes[7];
  decoded.latitude /= 10e4;
  decoded.lastGPSAcquisition = bytes[8];
  return decoded;
}

// TTN V3
function decodeUplink(input) {
  const bytes = input.bytes, data = {}
  data.longitude = ((bytes[0]<<24)>>>0) + ((bytes[1]<<16)>>>0) + ((bytes[2]<<8)>>>0) + bytes[3];
  data.longitude /= 10e4;
  data.latitude = ((bytes[4]<<24)>>>0) + ((bytes[5]<<16)>>>0) + ((bytes[6]<<8)>>>0) + bytes[7];
  data.latitude /= 10e4;
  data.lastGPSAcquisition = bytes[8];
  return {
    data,
    warnings: [],
    errors: []
  };
}
