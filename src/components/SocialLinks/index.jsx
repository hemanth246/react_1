import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SOCIAL_MEDIA_PROFILES } from "../../config";

export default function SocialLinks() {
  return (
    <div className="footer-social row">
      <a href={SOCIAL_MEDIA_PROFILES.facebook} className="col-1">
        <FontAwesomeIcon
          className="text-white"
          icon={{ prefix: "fab", iconName: "facebook-square" }}
        />
      </a>
      <a href={SOCIAL_MEDIA_PROFILES.instagram} className="col-1">
        <FontAwesomeIcon
          className="text-white"
          icon={{ prefix: "fab", iconName: "instagram-square" }}
        />
      </a>
      <a href={SOCIAL_MEDIA_PROFILES.pinterest} className="col-1">
        <FontAwesomeIcon
          className="text-white"
          icon={{ prefix: "fab", iconName: "pinterest-square" }}
        />
      </a>
      <a href={SOCIAL_MEDIA_PROFILES.twitter} className="col-1">
        <FontAwesomeIcon
          className="text-white"
          icon={{ prefix: "fab", iconName: "twitter-square" }}
        />
      </a>
    </div>
  );
}
