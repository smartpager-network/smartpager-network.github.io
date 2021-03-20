# 📟 smartpager.network

Smartpager.network aims to provide a fully featured and modular Paging Framework.

Planned Features:
- Menu Systems (only for Duplex Pagers like the Birdy Slim IoT)
- Acknowledgement for Messages (only for Duplex Pagers like the Birdy Slim IoT)
- Message Routing Modes (sensible Messages over LoRaWAN, anything else over POCSAG)
- Integration/Compatibility with DAPNET
- Many Message Ingress Modules, like bunq.com-Notifications, E-Mail, Telegram, etc..

#### Working Modules
- [pocsag-connector](https://github.com/smartpager-network/pocsag-connector) ( works with the RFM69 or any other SX1231-Chipset Transceiver )
- [msg-email](https://github.com/smartpager-network/msg-email) - Creates Notifications for new, unread received emails.
- [pager-daemon](https://github.com/smartpager-network/pager-daemon) (Work in Progress. This Piece of Software will handle Multipath-Routing and Responses)

#### Planned Modules
- msg-bunq
- msg-weather
- msg-twitter
- msg-peertube-notifications
- msg-prometheus-alerts
- msg-telegram-bot-input

#### W.I.P
- [lorawan-connector](https://github.com/smartpager-network/lorawan-connector) ( waiting for Birdy Slim IoT Pager to arrive )

# Some interesting Documentation about...
- the [Birdy Slim Pager](https://github.com/smartpager-network/smartpager-network.github.io/blob/master/BirdySlimDocumentation.md)
