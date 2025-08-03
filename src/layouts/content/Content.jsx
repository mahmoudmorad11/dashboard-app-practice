import ContentTop from "../../components/contentTop/ContentTop";
import ContentMain from "../../components/contentMain/ContentMain.jsx";
import "./content.css";

const Content = () => {
  return (
    <div className="main-content">
      <ContentTop />
      <ContentMain />
    </div>
  );
};

export default Content;
