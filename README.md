# 📟 smartpager.network

Smartpager.network aims to provide a fully featured and modular Paging Framework.

[W.I.P Application Flow](https://github.com/smartpager-network/smartpager-network.github.io/blob/master/Basisfunctionaliteit%20SmartpagerNetwork.pdf)

[►Wiki◄](https://github.com/smartpager-network/smartpager-network.github.io/wiki)

[►How to setup this Software◄](https://github.com/smartpager-network/smartpager-network.github.io/wiki/How-to-Setup-the-smartpager.network-Framework)

[►How to connect your Birdy Slim IoT with the Dispatcher and Services◄](https://github.com/smartpager-network/smartpager-network.github.io/wiki/How-to-connect-your-Birdy-Slim-IoT-with-the-Dispatcher-and-Services)

[> Birdy Slim Ringtone Utility <](https://smartpager.network/birdy-ringtone-utility/)

Planned Features:
- Menu Systems (only for Duplex Pagers like the Birdy Slim IoT
- Many Message Ingress Modules, like bunq.com-Notifications, E-Mail, Telegram, etc..

Working Features:
- Acknowledgement for Messages (only for Duplex Pagers like the Birdy Slim IoT)
- Device States( Birdy Slim IoT: GPSLocation, BatteryLevel, etc...)
- Message Routing Modes
- Integration/Compatibility with DAPNET
- Menu API(W.I.P, but working)

#### Working Modules
- [dispatcher-daemon](https://github.com/smartpager-network/pager-daemon) (This Piece of Software will handle Multipath-Routing and Responses) (LORAWAN included)
- [msg-email](https://github.com/smartpager-network/msg-email) - Creates Notifications for new, unread received emails(IMAP).
- [pocsag-connector](https://github.com/smartpager-network/pocsag-connector) ( works with the RFM69 or any other SX1231-Chipset Transceiver )
- [msg-prometheus-alertmanager](https://github.com/smartpager-network/msg-prometheus-alertmanager) (Prometheus Alertmanager integration, with customizeable Menu's for taking Action)

#### Planned Modules
- msg-bunq
- msg-weather
- msg-twitter
- msg-peertube-notifications
- msg-telegram-bot-input(W.I.P)

# Some interesting Documentation about...
- the [Birdy Slim Pager](https://github.com/smartpager-network/smartpager-network.github.io/blob/master/BirdySlimDocumentation.md)
- the [Birdy Slim IoT LORAWAN Payload Formatter](https://github.com/smartpager-network/smartpager-network.github.io/blob/master/birdy-slim-iot/payload-formatters/testing.md)
