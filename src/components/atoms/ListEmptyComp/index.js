import React from "react";
import TextContainer from "../TextContainer";
import { COLORS } from "src/styles/themes";

const ListEmptyComp = ({ message = "" }) => {
  return (
    <TextContainer
      style={{
        fontSize: 20,
        color: "white",
        marginVertical: 40,
        textAlign: "center",
        color: COLORS.textGrey1,
      }}
      text={message || "We couldn't find any relevant data, please try later."}
    />
  );
};

export default ListEmptyComp;
