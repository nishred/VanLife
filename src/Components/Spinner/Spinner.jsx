import React from "react";

import CircularProgress from "@mui/material/CircularProgress";

import styles from "./Spinner.module.css";

const Spinner = ({size}) => {
  return (
    <div className={styles["spinner-container"]}>
      <CircularProgress size={size}/>
    </div>
  );
};

export default Spinner;
