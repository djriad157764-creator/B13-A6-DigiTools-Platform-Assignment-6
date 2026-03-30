import "./App.css";
import Banner from "./Component/Banner/Banner";
import GetStarted from "./Component/GetStarted/GetStarted";
import Navbar from "./Component/Navbar/Navbar";
import StatsSection from "./Component/StatsSection/StatsSection";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <StatsSection/>
      <GetStarted/>
    </>
  );
}

export default App;
