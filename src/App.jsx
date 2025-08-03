import "./App.css";
import Content from "./layouts/content/Content";
import Sidebar from "./layouts/sidebar/Sidebar";

function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <Content />
      </div>
    </>
  );
}

export default App;
