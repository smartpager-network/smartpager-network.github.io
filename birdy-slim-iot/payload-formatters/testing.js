function Decoder(bytes, port) {
  var data = {}
  function bytesToString(a) {
    return a.map(function(x){ return String.fromCharCode(x) }).join('') // because very OLD js parser
  }
  switch (port) {
    case 1: // Technical Received Acknowledgment '|5||C|''
      // 31 32 33 34 35 20
      data.type = 'ack'
      data.ack = 'recv'
      data.msgid = bytesToString(bytes.splice(0,5))
      data.rssi = bytes.splice(0,1) * 1
      break;
    case 2: // Read and Operational Acknowledgment 'AA|5|' and Operational '33|5|<CustomByte(s)>'
      // AA 31 32 33 34 35
      // operational ack with Payload "test"(maybe you should use a single byte)
      // 33 31 32 33 34 35 54 65 73 74
      data.type = 'ack'
      data.ack = bytes.splice(0,1) == 0xAA ? 'read' : 'operational'
      data.msgid = bytesToString(bytes.splice(0,5))
      if (data.ack === 'operational') {
        data.operationalData = bytesToString(bytes)
      }
      break;
    case 5:  // GPS Tracking Port
      data.type = 'gps'
      data.latitude = ((bytes[0]<<24)>>>0) + ((bytes[1]<<16)>>>0) + ((bytes[2]<<8)>>>0) + bytes[3]
      data.latitude /= 10e4
      data.longitude = ((bytes[4]<<24)>>>0) + ((bytes[5]<<16)>>>0) + ((bytes[6]<<8)>>>0) + bytes[7]
      data.longitude /= 10e4
      data.lastGPSAcquisition = bytes[8]
      break;
  }
  return data;
}
