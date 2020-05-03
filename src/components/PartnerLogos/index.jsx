import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PARTNERS } from "../../config";

export default function PartnerLogos() {
  return PARTNERS.map((partner) => (
    <div className="col-1" key={partner.key}>
      <FontAwesomeIcon
        icon={{ prefix: "fab", iconName: partner.icon }}
        size="2x"
      />
    </div>
  ));
}
