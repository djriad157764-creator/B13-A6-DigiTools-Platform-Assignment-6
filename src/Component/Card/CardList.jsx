import React from "react";
import { FcCheckmark } from "react-icons/fc";

const CardList = ({ item }) => {
  return (
    <li className="flex items-center gap-2">
      <FcCheckmark />
      {item}
    </li>
  );
};

export default CardList;
