import { useMemo } from "react";
import "./group-component.css";

const GroupComponent = ({
  divincrease,
  calculateYourProfits,
  propBackground,
  propBackground1,
  propPadding,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      background: propBackground,
    };
  }, [propBackground]);

  const rectangleDivStyle = useMemo(() => {
    return {
      background: propBackground1,
    };
  }, [propBackground1]);

  const divitemwrapperStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className="rectangle-parent" style={groupDivStyle}>
      <div className="frame-inner" style={rectangleDivStyle} />
      <img
        className="divincrease-icon"
        loading="lazy"
        alt=""
        src={divincrease}
      />
      <div className="coin-title-div-wrapper">
        <div className="coin-title-div">
          <b className="calculate-your-profits">{calculateYourProfits}</b>
          <button className="divitemwrapper" style={divitemwrapperStyle}>
            <div className="check-now">Check Now</div>
            <img
              className="iconlylightarrow-right1"
              alt=""
              src="/iconlylightarrow--right.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
