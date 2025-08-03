import { iconsImgs, personsImgs } from "../../utils/images";
import { savings } from "../../data/data";
import "./savings.css";

const Savings = () => {
  return (
    <div className="subgrid-two grid-common grid-c6">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Savings</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="plus image" />
        </button>
      </div>
      <div className="grid-c6-content">
        <div className="grid-items">
          {savings.map((e) => (
            <div className="grid-item" key={e.id}>
              <div className="grid-item-top">
                <div className="grid-item-top-l">
                  <div className="avatar img-fit-cover">
                    <img src={e.image} alt="" />
                  </div>
                  <p className="text text-sliver-v1">{e.title}</p>
                </div>
                <div className="grid-item-top-r">
                  <span className="text-sliver-v1">${e.amount_left}</span>
                </div>
              </div>
              <div className="grid-item-bottom">
                <div className="grid-item-badges">
                  <span className="grid-item-badge">
                    Date Taken {e.date_taken}
                  </span>
                  <span className="grid-item-badge">
                    Amound left ${e.amount_left}
                  </span>
                </div>
                <div className="grid-item-progress">
                  <div className="grid-item-fill"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Savings;
