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
import { Suspense, useState } from "react";

// Fetch Main Data from Public Folder
const fetchDataFromJson = async () => {
  const res = await fetch("mainApiData.json");
  return res.json();
};

// fetchDataFromJson Function Call
const promiseJsonData = fetchDataFromJson();

// TransparentPricing data fetch
const fetchPricingData = async () => {
  const res = await fetch("transparentPlanData.json");
  return res.json();
};

// fetchPricingData Function Call
const planPromise = fetchPricingData();

function App() {
  // useState Use for Toggle Product and Cart Button , Default Product Button Active
  const [clickedBtn, setClickedBtn] = useState("product");

  // useState Use for Add Data Cart Section and Handle selectItem Array
  const [selectItem, setSelectItem] = useState([]);

  return (
    <>
      {/* Navbar  */}
      <Navbar selectItem={selectItem} />

      {/* Banner Section  */}
      <Banner />

      {/* Stats Section  */}
      <StatsSection />

      {/* Premium Digital Tools Section  */}
      <PremiumDigitalTools
        selectItem={selectItem}
        clickedBtn={clickedBtn}
        setClickedBtn={setClickedBtn}
      />

      {/* Home Section  */}
      <Suspense>
        <Home
          setSelectItem={setSelectItem}
          selectItem={selectItem}
          clickedBtn={clickedBtn}
          setClickedBtn={setClickedBtn}
          promiseJsonData={promiseJsonData}
        />
      </Suspense>

      {/* Gets Started Section  */}
      <GetStartedSection />

      {/* Transparent Pricing Section  */}
      <Suspense>
        <TransparentPricing planPromise={planPromise} />
      </Suspense>

      {/* Optional Section  */}
      <OptionalSection />

      {/* Footer  */}
      <Footer />
    </>
  );
}

export default App;
