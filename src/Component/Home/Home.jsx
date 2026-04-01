import React, { use } from "react";
import Card from "../Card/Card";
import SelectedCard from "../SelectedCard/SelectedCard";

const Home = ({
  promiseJsonData,
  clickedBtn,
  selectItem,
  setSelectItem,
  setClickedBtn,
}) => {
  const mainData = use(promiseJsonData);

  return (
    <>
      {clickedBtn === "product" ?
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-7.5 w-full max-w-300 px-5 mx-auto mt-10">
          {mainData.map((cardData) => (
            <Card
              setSelectItem={setSelectItem}
              selectItem={selectItem}
              key={cardData.id}
              cardData={cardData}
            />
          ))}
        </div>
      : <SelectedCard
          setClickedBtn={setClickedBtn}
          setSelectItem={setSelectItem}
          selectItem={selectItem}
        />
      }
    </>
  );
};

export default Home;
