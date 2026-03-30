import "./App.css";
import Banner from "./Component/Banner/Banner";
import Footer from "./Component/Footer/Footer";
import GetStartedSection from "./Component/GetStartedSection/GetStartedSection";

import Navbar from "./Component/Navbar/Navbar";
import OptionalSection from "./Component/OptionalSection/OptionalSection";
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
      {/* <Banner /> */}
      {/* <StatsSection /> */}
      {/* <GetStartedSection /> */}
      {/* <TransparentPricing planPromise={planPromise} /> */}
      <OptionalSection />
      <Footer />
    </>
  );
}

export default App;
