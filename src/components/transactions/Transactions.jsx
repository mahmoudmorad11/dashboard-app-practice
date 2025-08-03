import "./transactions.css";
import { transactions } from "../../data/data.js";
import { iconsImgs } from "../../utils/images.js";

const Transactions = () => {
  return (
    <div className="grid-one-item grid-common grid-c2">
      <div className="grid-c-title">
        <div className="grid-c-title-text">All Transactions</div>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="plus Icon" />
        </button>
      </div>
      <div className="grid-content">
        <div className="grid-items">
          {transactions.map((e) => (
            <div className="grid-item" key={e.id}>
              <div className="grid-item-l">
                <div className="avatar img-fit-cover">
                  <img src={e.image} alt="person image" />
                </div>
                <p className="text">
                  {e.name}
                  <span> {e.date}</span>
                </p>
              </div>
              <div className="grid-item-r">
                <span className="text-scarlet">${e.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
