import { reportData } from "../../data/data";
import { iconsImgs } from "../../utils/images";
import "./report.css";

const Report = () => {
  return (
    <div className="grid-one-item grid-common grid-c3">
      <div className="grid-c-title">
        <div className="grid-c-title-text">Report</div>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="report image" />
        </button>
      </div>
      <div className="grid-c3-content">
        <div className="grid-chart">
          <div className="chart-vert-value">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>
          {reportData.map((e) => (
            <div className="grid-chart-bar" key={e.id}>
              <div className="bar-wrapper">
                <div
                  className="bar-item1"
                  style={{ height: `${e.value1 !== null ? "40%" : ""}` }}
                ></div>
                <div
                  className="bar-item2"
                  style={{ height: `${e.value2 !== null ? "60%" : ""}` }}
                ></div>
              </div>
              <span className="grid-hortz-value">{e.month}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Report;
