import React, { useState, forwardRef, useImperativeHandle } from "react";
import "../scss/toast.scss";

const Toast = forwardRef((props, ref) => {
  const [showToast, setShowToast] = useState(false);
  useImperativeHandle(ref, () => ({
    showToast() {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 700);
    },
  }));
  return (
    <div id={showToast ? "show" : "hide"}>
      <div className="toast">{props.message}</div>
    </div>
  );
});

export default Toast;
