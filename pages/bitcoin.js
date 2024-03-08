import Navbar from "../components/navbar";
import SvgArrowRight from "../components/svg-arrow-right";
import FrameComponent from "../components/frame-component";
import "./bitcoin.css";

const Bitcoin = () => {
  return (
    <div className="bitcoin">
      <main className="link-wrapper">
        <Navbar />
        <section className="spanhdcff">
          <SvgArrowRight />
          <div className="spanhdcff-inner">
            <div className="chart-item-container-parent">
              <div className="chart-item-container">
                <div className="coin-content">
                  <div className="node-parent-chart">
                    <h3 className="get-started-with">
                      Get Started with KoinX for FREE
                    </h3>
                    <div className="with-our-range">
                      With our range of features that you can equip for free,
                      KoinX allows you to be more educated and aware of your tax
                      reports.
                    </div>
                  </div>
                  <img
                    className="container-height-variable"
                    alt=""
                    src="/frame-3.svg"
                  />
                  <button className="text-node-coin-title">
                    <div className="get-started-for">Get Started for FREE</div>
                    <img
                      className="iconlylightarrow-right"
                      alt=""
                      src="/iconlylightarrow--right.svg"
                    />
                  </button>
                </div>
              </div>
              <div className="realised-profitloss">
                <div className="button-proceed-to-next">
                  <h3 className="trending-coins-24h">Trending Coins (24h)</h3>
                  <div className="view-more-wrapper">
                    <div className="view-more">View more</div>
                  </div>
                </div>
                <div className="rectangle-container-header">
                  <div className="divchartitem">
                    <div className="link">
                      <img
                        className="component-50-icon"
                        loading="lazy"
                        alt=""
                        src="/component-50.svg"
                      />
                      <div className="ethereumeth">Ethereum(ETH)</div>
                    </div>
                    <button className="divcointopmargin">
                      <img
                        className="divcointopmargin-child"
                        alt=""
                        src="/polygon-2.svg"
                      />
                      <div className="divcointitle">8.21%</div>
                    </button>
                  </div>
                  <div className="divchartitem1">
                    <div className="component-50-parent">
                      <img
                        className="component-50-icon1"
                        alt=""
                        src="/component-50-1@2x.png"
                      />
                      <div className="bitcoin-btc">Bitcoin (BTC)</div>
                    </div>
                    <button className="vector-parent">
                      <img
                        className="frame-child"
                        alt=""
                        src="/polygon-2-2.svg"
                      />
                      <div className="div">5.26%</div>
                    </button>
                  </div>
                  <div className="divchartitem2">
                    <div className="component-50-group">
                      <img
                        className="component-50-icon2"
                        alt=""
                        src="/component-50-2@2x.png"
                      />
                      <div className="polygon-matic">Polygon (MATIC)</div>
                    </div>
                    <button className="vector-group">
                      <img
                        className="frame-item"
                        alt=""
                        src="/polygon-2-2.svg"
                      />
                      <div className="div1">4.32%</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FrameComponent />
    </div>
  );
};

export default Bitcoin;
