import Sidebar from "./Sidebar";
import "../Layouts/layout.css";
function DeFaultLayout({ children }) {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="wrapper-content">
        <div className="content">{children}</div>
        <div className="footer">Copyright © 2021</div>
      </div>
    </div>
  );
}

export default DeFaultLayout;
