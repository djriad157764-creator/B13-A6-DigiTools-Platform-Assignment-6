import React from "react";
import { FcCheckmark } from "react-icons/fc";

const CardList = ({ item }) => {
  return (
    <li className="flex items-center mb-1.5 gap-2">
      <FcCheckmark />
      {item}
    </li>
  );
};

export default CardList;
