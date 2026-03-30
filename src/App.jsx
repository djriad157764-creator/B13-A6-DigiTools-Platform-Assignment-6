import "./App.css";
import Banner from "./Component/Banner/Banner";
import Footer from "./Component/Footer/Footer";
import GetStarted from "./Component/GetStarted/GetStarted";
import Navbar from "./Component/Navbar/Navbar";
import StatsSection from "./Component/StatsSection/StatsSection";
import TransparentPricing from "./Component/TransparentPricing/TransparentPricing";

// TransparentPricing data fetch
const fetchPricingData = async () => {
  const res = await fetch("transparentPlanData.json");
  return res.json();
};

const planPromise = fetchPricingData();

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <StatsSection />
      <GetStarted />
      <TransparentPricing planPromise={planPromise} />
      <Footer/>
    </>
  );
}

export default App;
