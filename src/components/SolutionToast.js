import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../scss/solutionToast.scss";

const SolutionToast = forwardRef((props, ref) => {
  const [showToast, setShowToast] = useState(false);
  useImperativeHandle(ref, () => ({
    showToast() {
      setShowToast(true);
    },
  }));
  return (
    <div id={showToast ? "show" : "hide"}>
      <div className="toast">{props.message}</div>
    </div>
  );
});

export default SolutionToast;
