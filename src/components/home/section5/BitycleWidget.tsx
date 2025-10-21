import Script from "next/script";

export default function BitycleWidget({ symbol = "BTCUSDT", id = "bitycle-mini-widget" }) {
    return (
        <li className="card-price" >
            <div
                id={id}
                style={{ width: "100%", height: "190px" }}
            ></div>


            <Script
                id={"bitycle-script-" + id}
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            {
              "id":"${id}",
              "type":"mini",
              "symbol":"${symbol}",
              "locale":"fa"
            }
          `,
                }}
                src="https://widget.bitycle.com/static/script/v1/script.js"
            />
        </li>
    );
}