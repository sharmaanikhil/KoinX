import Td from "./td";
import GroupComponent from "./group-component";
import DivCoinTitle from "./div-coin-title";
import "./svg-arrow-right.css";
import BitcoinPrice from "../BitcoinPrice";
import TradingViewChart from "../TradingViewCart";
import TradingCoins from "../TradingCoins";

const SvgArrowRight = () => {
  return (
    <div className="svg-arrow-right">
      <div className="div-parent-childreninfo">
        <div className="link-cryptocurrencies">Cryptocurrencies</div>
        <img className="icon" alt="" src="/icon.svg" />
        <div className="bitcoin1">Bitcoin</div>
      </div>
      <BitcoinPrice/>
      <TradingViewChart/>
      <TradingCoins/>
      <div className="div-cointitle">
        <div className="dashboard-wrapper">
          <div className="dashboard1">Overview</div>
        </div>
        <div className="dashboard-container">
          <div className="dashboard2">Fundamentals</div>
        </div>
        <div className="children-info1">
          <div className="dashboard-frame">
            <div className="dashboard3">News Insights</div>
          </div>
          <div className="frame-div">
            <div className="dashboard4">Sentiments</div>
          </div>
        </div>
        <div className="dashboard-wrapper1">
          <div className="dashboard5">Team</div>
        </div>
        <div className="dashboard-wrapper2">
          <div className="dashboard6">Technicals</div>
        </div>
        <div className="dashboard-wrapper3">
          <div className="dashboard7">Tokenomics</div>
        </div>
      </div>
      <div className="div6">
        <div className="spanhdef1">
          <h3 className="performance">Performance</h3>
        </div>
        <div className="divcol">
          <div className="chart-item-container6">
            <div className="divpbar29subdiv">
              <div className="todays-low">Today’s Low</div>
              <div className="spanhdfd">46,930.22</div>
            </div>
            <div className="coin-price-value">
              <div className="s-v-g-fill">
                <div className="chart-item-margin">
                  <div className="divpbar29rangeslider">
                    <div className="divpbar29rangesliderfill" />
                  </div>
                  <div className="item-wrapper">
                    <div className="divabsolute">
                      <div className="divh-2" />
                    </div>
                  </div>
                </div>
                <div className="cointop">
                  <div className="cardano-a-d">$48,637.83</div>
                </div>
              </div>
            </div>
            <div className="divpbar29subdiv1">
              <div className="todays-high">Today’s High</div>
              <div className="div-coin-top">49,343.83</div>
            </div>
          </div>
          <div className="img-margin3">
            <div className="divpbar29subdiv2">
              <div className="w-low">52W Low</div>
              <div className="div7">16,930.22</div>
            </div>
            <div className="divpbar29rangeslider1">
              <div className="divpbar29rangesliderfill1" />
            </div>
            <div className="divpbar29subdiv3">
              <div className="w-high">52W High</div>
              <div className="div8">49,743.83</div>
            </div>
          </div>
        </div>
        <div className="div-inner">
          <div className="divvalign-wrapper-parent">
            <div className="divvalign-wrapper">
              <div className="heading-2">
                <div className="fundamentals">Fundamentals</div>
              </div>
              <div className="svgmargin">
                <div className="svg2">
                  <img
                    className="top-margin-icon"
                    loading="lazy"
                    alt=""
                    src="/frame.svg"
                  />
                </div>
              </div>
            </div>
            <div className="title">
              <div className="coin-content1">
                <div className="tr">
                  <div className="bitcoin-price">Bitcoin Price</div>
                  <div className="edasvg1">$16,815.46</div>
                </div>
                <div className="tr1">
                  <div className="th">
                    <div className="h-low">24h Low / 24h High</div>
                  </div>
                  <div className="td1">
                    <div className="div-cointopmargin1">
                      $16,382.07 / $16,874.12
                    </div>
                  </div>
                </div>
                <div className="tr2">
                  <div className="th1">
                    <div className="d-low">7d Low / 7d High</div>
                  </div>
                  <div className="td2">
                    <div className="div9">$16,382.07 / $16,874.12</div>
                  </div>
                </div>
                <div className="tr3">
                  <div className="th2">
                    <div className="trading-volume">Trading Volume</div>
                  </div>
                  <div className="td3">
                    <div className="div10">$23,249,202,782</div>
                  </div>
                </div>
                <div className="tr4">
                  <div className="th3">
                    <div className="market-cap-rank">Market Cap Rank</div>
                  </div>
                  <div className="td4">
                    <div className="div11">#1</div>
                  </div>
                </div>
              </div>
              <div className="s-v-g-button">
                <div className="tr5">
                  <div className="th4">
                    <div className="market-cap">Market Cap</div>
                  </div>
                  <div className="td5">
                    <div className="button-next-slide1">$323,507,290,047</div>
                  </div>
                </div>
                <div className="tr6">
                  <div className="th5">
                    <div className="market-cap-dominance">
                      Market Cap Dominance
                    </div>
                  </div>
                  <div className="td6">
                    <div className="div12">38.343%</div>
                  </div>
                </div>
                <div className="tr7">
                  <div className="th6">
                    <div className="volume-market">Volume / Market Cap</div>
                  </div>
                  <div className="td7">
                    <div className="div13">0.0718</div>
                  </div>
                </div>
                <div className="tr8">
                  <div className="th7">
                    <div className="all-time-high">All-Time High</div>
                  </div>
                  <Td
                    prop="$69,044.77 "
                    prop1="-75.6%"
                    nov102021About1Year="Nov 10, 2021 (about 1 year)"
                  />
                </div>
                <div className="tr9">
                  <div className="th8">
                    <div className="all-time-low">All-Time Low</div>
                  </div>
                  <Td
                    prop="$67.81 "
                    prop1="24729.1%"
                    nov102021About1Year="Jul 06, 2013 (over 9 years)"
                    propWidth="121px"
                    propHeight="16px"
                    propColor="#0fba83"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div14">
        <div className="div-coin-title1">
          <div className="div15">
            <h3 className="sentiment">Sentiment</h3>
            <div className="spanhdcfb1">
              <div className="spanhdedfa1">
                <div className="div-increase1">
                  <div className="divchartitem3">
                    <div className="key-events">Key Events</div>
                    <img
                      className="coin-top-margin"
                      alt=""
                      src="/frame-1.svg"
                    />
                  </div>
                  <div className="centrifuge-c-f-gjpeg1">
                    <div className="item">
                      <img
                        className="divincrease-icon2"
                        loading="lazy"
                        alt=""
                        src="/frame-1116601921.svg"
                      />
                      <div className="section">
                        <div className="heading-3">
                          <div className="spanh2d-ffd87013">
                            <div className="lorem-ipsum-dolor1">
                              Lorem ipsum dolor sit amet consectetur. Dui vel
                              quis dignissim mattis enim tincidunt.
                            </div>
                          </div>
                        </div>
                        <div className="pmt-2">
                          <div className="lorem-ipsum-dolor2">
                            Lorem ipsum dolor sit amet consectetur. Ac phasellus
                            risus est faucibus metus quis. Amet sapien quam
                            viverra adipiscing condimentum. Ac consectetur et
                            pretium in a bibendum in. Sed vitae sit nisi viverra
                            natoque lacinia libero enim.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chart-item-container7">
                      <div className="analyst-estimates">Analyst Estimates</div>
                      <img
                        className="coin-item-icon"
                        alt=""
                        src="/frame-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="sun-coin-image-node">
                  <div className="item1">
                    <img
                      className="item-child"
                      alt=""
                      src="/frame-1116601921-1.svg"
                    />
                    <div className="section1">
                      <div className="heading-31">
                        <div className="spanh2d-ffd870131">
                          <div className="lorem-ipsum-dolor3">
                            Lorem ipsum dolor sit amet consectetur. Dui vel quis
                            dignissim mattis enim tincidunt.
                          </div>
                        </div>
                      </div>
                      <div className="pmt-21">
                        <div className="lorem-ipsum-dolor-container">
                          <span className="lorem-ipsum-dolor-container1">
                            <p className="lorem-ipsum-dolor4">{`Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra `}</p>
                            <p className="in-a-adipisinc">
                              in a adipisinc metus quis del
                            </p>
                          </span>
                        </div>
                      </div>
                      <img
                        className="svg-icon"
                        loading="lazy"
                        alt=""
                        src="/svg.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="color-fill-node">
                <div className="divexr42buydivmargin">
                  <div className="divexr42buydiv">
                    <div className="divabsolute-center">
                      <div className="spanh2d-457ee198">
                        <div className="children-nodes-technical">76</div>
                      </div>
                      <div className="spanbodylarge">
                        <div className="last-parent-technical">%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="divwidth100">
                  <div className="divrow">
                    <div className="buy">Buy</div>
                    <div className="div-coin-content1">
                      <div className="divexr710linearbar" />
                      <div className="uniswap-u-n">76%</div>
                    </div>
                  </div>
                  <div className="divrow1">
                    <div className="hold">Hold</div>
                    <div className="divexr710linearbar-parent">
                      <div className="divexr710linearbar1" />
                      <div className="div16">8%</div>
                    </div>
                  </div>
                  <div className="divrow2">
                    <div className="sell">Sell</div>
                    <div className="divexr710linearbar-group">
                      <div className="divexr710linearbar2" />
                      <div className="div17">16%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div18">
        <div className="spanhdedfa2">
          <h3 className="about-bitcoin">About Bitcoin</h3>
        </div>
        <div className="div-coin-price">
          <b className="what-is-bitcoin">What is Bitcoin?</b>
          <div className="button-next-slide2">
            <div className="bitcoins-price-today">
              Bitcoin’s price today is US$16,951.82, with a 24-hour trading
              volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
              currently -7.70% from its 7-day all-time high of $18,366.66, and
              3.40% from its 7-day all-time low of $16,394.75. BTC has a
              circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            </div>
            <div className="hr" />
          </div>
          <b className="lorem-ipsum-dolor5">Lorem ipsum dolor sit amet</b>
        </div>
        <div className="img-margin4">
          <div className="lorem-ipsum-dolor-container2">
            <p className="lorem-ipsum-dolor6">{`Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  `}</p>
            <p className="blank-line">&nbsp;</p>
            <p className="diam-praesent-massa">
              Diam praesent massa dapibus magna aliquam a dictumst volutpat.
              Egestas vitae pellentesque auctor amet. Nunc sagittis libero
              adipiscing cursus felis pellentesque interdum. Odio cursus
              phasellus velit in senectus enim dui. Turpis tristique placerat
              interdum sed volutpat. Id imperdiet magna eget eros donec cursus
              nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
              Integer dignissim augue viverra nulla et quis lobortis phasellus.
              Integer pellentesque enim convallis ultricies at.
            </p>
            <p className="blank-line1">&nbsp;</p>
            <p className="fermentum-hendrerit-imperdiet">
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac. Mi adipiscing semper scelerisque
              porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
              congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
              eget. Ullamcorper dui
            </p>
          </div>
        </div>
        <div className="parent-crypto-container">
          <div className="hr1" />
        </div>
        <div className="new-node-creative">
          <h3 className="already-holding-bitcoin">Already Holding Bitcoin?</h3>
          <div className="edasvg-fill">
            <div className="parent-next-slide-container">
              <GroupComponent
                divincrease="/rectangle-11947@2x.png"
                calculateYourProfits="Calculate your Profits"
              />
              <GroupComponent
                divincrease="/rectangle-11947-1@2x.png"
                calculateYourProfits="Calculate your tax liability"
                propBackground="linear-gradient(135.73deg, #ff9865, #ef3031)"
                propBackground1="linear-gradient(135.73deg, #ff9865, #ef3031)"
                propPadding="var(--padding-11xs) var(--padding-mini) var(--padding-11xs) var(--padding-sm)"
              />
            </div>
            <div className="hr2" />
          </div>
        </div>
        <div className="fermentum-hendrerit-imperdiet-container">
          <p className="fermentum-hendrerit-imperdiet1">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </p>
          <p className="blank-line2">&nbsp;</p>
        </div>
      </div>
      <div className="div19">
        <div className="div-cointitle1">
          <h3 className="tokenomics">Tokenomics</h3>
        </div>
        <div className="divh2d-cf4c6ced">
          <div className="divtokenomics-chart-container">
            <div className="divtokenomics-title">
              <div className="initial-distribution">Initial Distribution</div>
            </div>
            <div className="divtokenomics-wrapper">
              <img
                className="divtokenomics-wrapper-child"
                loading="lazy"
                alt=""
                src="/frame-1116601936.svg"
              />
              <div className="divtokenomics-no-item-wrapper">
                <div className="divtokenomics-no-item">
                  <div className="divtokenomics-label">
                    <div className="spancirclemargin">
                      <div className="spancircle" />
                    </div>
                    <div className="spanpercent">
                      <div className="crowdsale-investors-80">
                        Crowdsale investors: 80%
                      </div>
                    </div>
                  </div>
                  <div className="divtokenomics-label1">
                    <div className="spancirclemargin1">
                      <div className="spancircle1" />
                    </div>
                    <div className="spanpercent1">
                      <div className="foundation-20">Foundation: 20%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lorem-ipsum-dolor7">
            Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
            ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur
            bibendum amet enim sit eget leo amet. At metus orci augue fusce
            eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales
            massa habitasse urna felis augue. Gravida aliquam fermentum augue
            eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio
            rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae.
            Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio
            nisi eu ac risus.
          </div>
        </div>
      </div>
      <div className="div20">
        <div className="button-nextslide">
          <h3 className="team">Team</h3>
        </div>
        <div className="lorem-ipsum-dolor8">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
          nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
          quam. Facilisis purus convallis quam augue.
        </div>
        <DivCoinTitle sandeep="/sandeep@2x.png" johnSmith="John Smith" />
        <DivCoinTitle
          sandeep="/sandeep-1@2x.png"
          johnSmith="Elina Williams"
          propPadding="var(--padding-0) var(--padding-sm)"
        />
        <DivCoinTitle
          sandeep="/sandeep-2@2x.png"
          johnSmith="John Smith"
          propPadding="var(--padding-0) var(--padding-mini)"
        />
      </div>
    </div>
  );
};

export default SvgArrowRight;
