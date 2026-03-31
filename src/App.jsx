import "./App.css";
import Banner from "./Component/Banner/Banner";
import Footer from "./Component/Footer/Footer";
import GetStartedSection from "./Component/GetStartedSection/GetStartedSection";
import Navbar from "./Component/Navbar/Navbar";
import OptionalSection from "./Component/OptionalSection/OptionalSection";
import PremiumDigitalTools from "./Component/PremiumDigitalTools/PremiumDigitalTools";
import StatsSection from "./Component/StatsSection/StatsSection";
import TransparentPricing from "./Component/TransparentPricing/TransparentPricing";
import Home from "./Component/Home/Home";
import { useState } from "react";


const fetchDataFromJson = async () => {
  const res = await fetch("mainApiData.json");
  return res.json();
};

const promiseJsonData = fetchDataFromJson();

// TransparentPricing data fetch
const fetchPricingData = async () => {
  const res = await fetch("transparentPlanData.json");
  return res.json();
};

const planPromise = fetchPricingData();

function App() {
  const [clickedBtn, setClickedBtn] = useState("product");

  const [selectItem, setSelectItem] = useState([]);

  return (
    <>
      <Navbar selectItem={selectItem} />

      

      <Banner />
      <StatsSection />

      <PremiumDigitalTools
        selectItem={selectItem}
        clickedBtn={clickedBtn}
        setClickedBtn={setClickedBtn}
      />

      <div className=""></div>

      <Home
        setSelectItem={setSelectItem}
        selectItem={selectItem}
        clickedBtn={clickedBtn}
        promiseJsonData={promiseJsonData}
      />

      <GetStartedSection />
      <TransparentPricing planPromise={planPromise} />
      <OptionalSection />
      <Footer />
    </>
  );
}

export default App;
