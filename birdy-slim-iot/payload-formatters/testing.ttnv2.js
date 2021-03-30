
function Decoder(bytes, port) {
  var data = {}
  function bytesToString(a) {
    return a.map(function(x){ return String.fromCharCode(x) }).join('') // because very OLD js parser
  }
  switch (port) {
    case 1: // Technical Received Acknowledgment '|5||C|'
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
    case 3: // Status & Canned Messages
      // Canned Message '01' --- '05', single Hex Number, incrementing
      // Status '<StatusIncrID>|Z|' or if no CenterSelection '<StatusIncrID>00'
      
      if (bytes.length == 1) {
        data.type = 'cannedMessage'
        data.cannedMessage = bytes[0] * 1
      } else {
        data.type = 'status'
        data.status = bytes[0] * 1
        data.selection = bytes[1] * 1
      }
      break;
    case 4: // Battery and Power Notifications
      // Startup 'FF'
      // Shutdown 'EE'
      // Low Battery 'FD'
      // ChargingOn '|V|CC'
      // ChargingOff'|V|BB'
      if (bytes.length == 1) {
        data.type = 'power'
        if (bytes[0] >= 0xEE) {
          data.poweredOn =  bytes[0]== 0xFF
        }
        if (bytes[0] == 0xFD) {
          data.type = 'low_battery'
        }
      } else {
        data.battery = bytes[0] * 1
        data.isCharging = bytes[1] == 0xCC
      }
      break;
    case 5:  // OTAStatus + LoneWorker/SOS Trigger +  GPS Tracking Port '|G|'
      // GPS Tracking '|G|'
      //// 00 1E 33 D7 00 4A 2C 31 10
      // SOS Start 'FF|G|'
      //// FF 00 1E 33 D7 00 4A 2C 31 10
      // SOS End 'FE|G|'
      //// FE 00 1E 33 D7 00 4A 2C 31 10
      // LoneWorker Lack of movement 'FD|G|'
      //// FD 00 1E 33 D7 00 4A 2C 31 10
      // LoneWorker Falldetect 'FC|G|'
      //// FC 00 1E 33 D7 00 4A 2C 31 10
      // LoneWorker End 'FB|G|'
      //// FB 00 1E 33 D7 00 4A 2C 31 10
      // OTA/PagerStatus 'FA|G||V|'
      //// FA 00 1E 33 D7 00 4A 2C 31 10 28
      if (bytes.length !== 9) { // we have more than just the |G| block
        if (bytes.length === 10) {
          switch(bytes[0]) {
            case 0xFF: // SOS Start
              data.type = 'sos'
              data.sos = true
            break;
            case 0xFE: // SOS End
              data.type = 'sos'
              data.sos = false
            break;
            case 0xFD: // LoneWorker Lack of movement
              data.type = 'sos'
              data.sos = false
              data.loneworker = 'lackofmovement'
            break;
            case 0xFC: // LoneWorker Falldetect
              data.type = 'sos'
              data.sos = false
              data.loneworker = 'falldetect'
            break;
            case 0xFB: // LoneWorker End
              data.type = 'sos'
              data.sos = false
              data.loneworker = false
            break;
          }
          bytes.splice(0,1)
        }
        if (bytes.length === 11) { // OTA PagerStatus
          data.type = 'ota'
          data.ota = 'status'
          data.battery = bytes[10] * 1
          bytes.splice(0,1)
        }
      } else { // we are having a normal gps block only
        data.type = 'gps'
      }
      var gpsBlock = bytes.splice(0,9)
      data.latitude = ((gpsBlock[0]<<24)>>>0) + ((gpsBlock[1]<<16)>>>0) + ((gpsBlock[2]<<8)>>>0) + gpsBlock[3]
      data.latitude /= 10e4
      data.longitude = ((gpsBlock[4]<<24)>>>0) + ((gpsBlock[5]<<16)>>>0) + ((gpsBlock[6]<<8)>>>0) + gpsBlock[7]
      data.longitude /= 10e4
      data.lastGPSAcquisition = gpsBlock[8]
      break;
  }
  return data;
}
