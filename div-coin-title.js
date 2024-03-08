import { useMemo } from "react";
import "./div-coin-title.css";

const DivCoinTitle = ({ sandeep, johnSmith, propPadding }) => {
  const divIncreaseStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="div-coin-title">
      <div className="div-cointop">
        <div className="img-margin">
          <img className="sandeep-icon" loading="lazy" alt="" src={sandeep} />
          <div className="div-increase" style={divIncreaseStyle}>
            <div className="john-smith">{johnSmith}</div>
            <div className="designation-here">Designation here</div>
          </div>
        </div>
        <div className="lorem-ipsum-dolor">
          Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
          fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in
          nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec
          neque sed pellentesque viverra. Consectetur proin amet ut id facilisi
          quis consectetur. Tellus gravida ultricies feugiat sed eu egestas
          dolor est ipsum. Malesuada etiam mi gravida praesent interdu
        </div>
      </div>
    </div>
  );
};

export default DivCoinTitle;
