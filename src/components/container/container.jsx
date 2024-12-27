import React from "react";
export default function Container({ children, MaxWidth = "380px" }) {
  return <div style={{ margin: "auto", maxWidth: MaxWidth }}>{children}</div>;
}
