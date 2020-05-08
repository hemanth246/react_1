import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SITE_NAME, SITE_LOGO } from "../../config";
import { Link } from "react-router-dom";

export default function SeesionHeader() {
  return (
    <div className="row bg-white pl-3">
      <Link className="navbar-brand font-pacifico" to="/">
        <FontAwesomeIcon icon={SITE_LOGO} size="2x" color="green" />
        <span className="site-name">{SITE_NAME}</span>
      </Link>
    </div>
  );
}
