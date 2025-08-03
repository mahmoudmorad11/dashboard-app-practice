import Cards from "../cards/Cards.jsx";
import Transactions from "../transactions/Transactions.jsx";
import Report from "../report/Report.jsx";
import Budget from "../budget/Budget.jsx";
import Subscriptions from "../subscriptions/Subscriptions.jsx";
import Savings from "../savings/Savings.jsx";
import Loans from "../loans/Loans.jsx";
import Financial from "../financial/Financial.jsx";
import "./ContentMain.css";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Transactions />
        <Report />
      </div>
      <div className="content-grid-two">
        <Budget />
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Subscriptions />
            <Savings />
          </div>
        </div>
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Loans />
            <Financial />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMain;
