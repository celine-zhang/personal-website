import Navbar from "./components/Navbar";
import "./styles.css";
import ProTitle from "./components/ProTitle";
import Experience from "./components/Experience";

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
