import { iconsImgs } from "../../utils/images";
import { subscriptions } from "../../data/data";
import "./subscriptions.css";

const Subscriptions = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c5">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Subscriptions</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="Subscriptions image" />
        </button>
      </div>
      <div className="grid-c5-content">
        <div className="grid-items">
          {subscriptions.map((e) => (
            <div className="grid-item" key={e.id}>
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.alert} alt="alert image" />
                </div>
                <div className="text text-sliver-v1">
                  {e.title}
                  <span>due {e.due_date}</span>
                </div>
              </div>
              <div className="grid-item-r">
                <span className="text-silver-v1">{e.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
