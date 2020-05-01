import React from "react";
import hasOwn from "lodash/has";
import camelCase from "lodash/camelCase";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

export default function FontAwesomeIcon({ icon, ...rest }) {
  if (typeof icon === "string") {
    icon = camelCase(`fa-${icon}`);

    if (hasOwn(fas, icon)) return <Icon icon={fas[icon]} {...rest} />;
  }

  return null;
}
