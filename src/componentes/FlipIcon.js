import { useState } from "react";

export const FlipIcon = (props) => {
  const { icono1, icono2 } = props;
  const [icono, setIcono] = useState(icono1);
  const toggleIcono = () => {
    setIcono(icono === icono1 ? icono2 : icono1);
  };

  return <i className={`fas ${icono}`} onClick={toggleIcono}></i>;
};
