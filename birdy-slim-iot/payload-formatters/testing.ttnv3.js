function decodeUplink(input) {
  return {
    data: Decoder(input.bytes, input.fPort),
    warnings: [],
    errors: []
  };
}

/** Attach the Code of testing.ttnv2.js **/
