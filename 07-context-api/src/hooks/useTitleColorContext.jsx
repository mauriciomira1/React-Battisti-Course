import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContex";

export const useTitleColorContext = () => {
  const context = useContext(TitleColorContext);

  if (!context) {
    console.log("Contexto não encontrado!");
  }
  return context;
};
