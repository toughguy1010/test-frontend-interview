import "./App.css";
import DeFaultLayout from "./component/Layouts/defaultLayout";
import Home from "./pages/Home/home";
import Blog from "./pages/Blog/blog";
import News from "./pages/News/news";
import Serviecs from "./pages/Serviecs/serviecs";
import Contact from "./pages/Contact/contact";
function App() {
  return (
    <div className="App">
      <DeFaultLayout>
          {window.location.pathname === "/" && <Home />}
          {window.location.pathname === "/services" && <Serviecs />}
          {window.location.pathname === "/news" && <News />}
          {window.location.pathname === "/blog" && <Blog />}
          {window.location.pathname === "/contact" && <Contact />}
      </DeFaultLayout>
    </div>
  );
}

export default App;
