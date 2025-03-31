import React from "react";

export const isChildrenText = (children: React.ReactNode) => {
  return React.Children.toArray(children).every(
    (child) => typeof child === "string" || typeof child === "number"
  )
}

export default isChildrenText
