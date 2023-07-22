import Navbar from "./components/Navbar";
import "./styles.css";
import ProTitle from "./components/ProTitle";
import Experience from "./components/Experience";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ProTitle />
      </div>
    </div>
  );
}
