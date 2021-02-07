let app = {

    init: function() {

        const pairs = ['1INCHUSDT', 'AAVEUSDT', 'ADAUSDT', 'AIONUSDT', 'AKROUSDT', 'ALGOUSDT', 'ALPHAUSDT', 'ANKRUSDT', 'ANTUSDT', 'ARDRUSDT', 'ARPAUSDT', 'ASRUSDT', 'ATMUSDT', 'ATOMUSDT', 'AUDIOUSDT', 'AVAUSDT', 'AVAXUSDT', 'AXSUSDT', 'BALUSDT', 'BANDUSDT', 'BATUSDT', 'BCHUSDT', 'BEAMUSDT', 'BELUSDT', 'BLZUSDT', 'BNBUSDT', 'BNTUSDT', 'BTCSTUSDT', 'BTCUSDT', 'BTSUSDT', 'BTTUSDT', 'BZRXUSDT', 'CELOUSDT', 'CELRUSDT', 'CHRUSDT', 'CHZUSDT', 'CKBUSDT', 'COCOSUSDT', 'COMPUSDT', 'COSUSDT', 'COTIUSDT', 'CRVUSDT', 'CTKUSDT', 'CTSIUSDT', 'CTXCUSDT', 'CVCUSDT', 'DASHUSDT', 'DATAUSDT', 'DCRUSDT', 'DENTUSDT', 'DGBUSDT', 'DIAUSDT', 'DNTUSDT', 'DOCKUSDT', 'DOGEUSDT', 'DOTUSDT', 'DREPUSDT', 'DUSKUSDT', 'EGLDUSDT', 'ENJUSDT', 'EOSUSDT', 'ETCUSDT', 'ETHUSDT', 'FETUSDT', 'FILUSDT', 'FIOUSDT', 'FIROUSDT', 'FLMUSDT', 'FTMUSDT', 'FTTUSDT', 'FUNUSDT', 'GRTUSDT', 'GTOUSDT', 'GXSUSDT', 'HARDUSDT', 'HBARUSDT', 'HIVEUSDT', 'HNTUSDT', 'HOTUSDT', 'ICXUSDT', 'INJUSDT', 'IOSTUSDT', 'IOTAUSDT', 'IOTXUSDT', 'IRISUSDT', 'JSTUSDT', 'JUVUSDT', 'KAVAUSDT', 'KEYUSDT', 'KMDUSDT', 'KNCUSDT', 'KSMUSDT', 'LINKUSDT', 'LITUSDT', 'LRCUSDT', 'LSKUSDT', 'LTCUSDT', 'LTOUSDT', 'LUNAUSDT', 'MANAUSDT', 'MATICUSDT', 'MBLUSDT', 'MDTUSDT', 'MFTUSDT', 'MITHUSDT', 'MKRUSDT', 'MTLUSDT', 'NANOUSDT', 'NBSUSDT', 'NEARUSDT', 'NEOUSDT', 'NKNUSDT', 'NMRUSDT', 'NPXSUSDT', 'NULSUSDT', 'OCEANUSDT', 'OGNUSDT', 'OGUSDT', 'OMGUSDT', 'ONEUSDT', 'ONGUSDT', 'ONTUSDT', 'ORNUSDT', 'OXTUSDT', 'PAXGUSDT', 'PERLUSDT', 'PNTUSDT', 'PSGUSDT', 'QTUMUSDT', 'REEFUSDT', 'RENUSDT', 'REPUSDT', 'RIFUSDT', 'RLCUSDT', 'ROSEUSDT', 'RSRUSDT', 'RUNEUSDT', 'RVNUSDT', 'SANDUSDT', 'SCUSDT', 'SKLUSDT', 'SNXUSDT', 'SOLUSDT', 'SRMUSDT', 'STMXUSDT', 'STORJUSDT', 'STPTUSDT', 'STRAXUSDT', 'STXUSDT', 'SUNUSDT', 'SUSHIUSDT', 'SXPUSDT', 'TCTUSDT', 'TFUELUSDT', 'THETAUSDT', 'TOMOUSDT', 'TRBUSDT', 'TROYUSDT', 'TRUUSDT', 'TRXUSDT', 'TWTUSDT', 'UMAUSDT', 'UNFIUSDT', 'UNIUSDT', 'UTKUSDT', 'VETUSDT', 'VITEUSDT', 'VTHOUSDT', 'WANUSDT', 'WAVESUSDT', 'WINGUSDT', 'WINUSDT', 'WNXMUSDT', 'WRXUSDT', 'WTCUSDT', 'XEMUSDT', 'XLMUSDT', 'XMRUSDT', 'XRPUSDT', 'XTZUSDT', 'XVSUSDT', 'YFIIUSDT', 'YFIUSDT', 'ZECUSDT', 'ZENUSDT', 'ZILUSDT', 'ZRXUSDT'];


        let streams = '';
        for (let pair of pairs) {
            streams += '/' + pair.toLowerCase() + '@aggTrade';
        }

        const socket = new WebSocket("wss://stream.binance.com:9443/ws" + streams);

        socket.onmessage = function(event) {

            // console.log(event.data);
            let objectData = JSON.parse(event.data);
            let DOMquote = document.querySelector('#quote' + objectData.s);
            // let quote = Number.parseFloat(objectData.p).toFixed(2);
            let quote = objectData.p;
            DOMquote.textContent = quote;
        };
    }
}

document.addEventListener("DOMContentLoaded", app.init);