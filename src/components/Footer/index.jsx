import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SocialLinks from "../SocialLinks";
import PartnerLogos from "../PartnerLogos";

import { FOOTER, SITE_NAME } from "../../config";

// Task -
// 1. Add Payment options (Refer https://www.flipkart.com/ - Bottom-right corner) - Done
// 2. Partner logos - https://bootsnipp.com/snippets/Q0Z1j - Done
// 3. Newsletter - https://bootsnipp.com/snippets/eoXRa - Done
// 4. Social Links - Done

export default function Footer() {
  const { ADDRESS, INFORMATION, MY_ACCOUNT } = FOOTER;

  return (
    <footer className="footer-section p-2 text-center bg-dark text-white">
      <div className="row partner-logos pt-2 pb-2 border-bottom border-info">
        <PartnerLogos />
      </div>

      <div className="row site-info mt-2 text-left border-bottom border-info">
        {/* Address */}
        <div className="col-4 footer-left">
          <h6>Coutact Us</h6>
          <ul>
            <li>Address: {ADDRESS.address}</li>
            <li>Phone: {ADDRESS.phone}</li>
            <li>Email: {ADDRESS.email}</li>
            <li>
              <SocialLinks />
            </li>
          </ul>
        </div>
        {/* Info */}
        <div className="col-2 footer-widget">
          <h6>Information</h6>
          <ul>
            {INFORMATION.map((info) => (
              <li key={info.key}>
                <a href={info.link}>{info.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* My Account */}
        <div className="col-2 footer-widget">
          <h6>My Account</h6>
          <ul>
            {MY_ACCOUNT.map((info) => (
              <li key={info.key}>
                <a href={info.link}>{info.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-4 newsletter">
          <h6>SUBSCRIBE TO OUR NEWSLETTER</h6>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Recipient's email"
            />
            <div className="input-group-append">
              <span className="input-group-text" id="basic-addon2">
                SUBSCRIBE
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row copyright-n-payment mt-2">
        <div className="col-6 text-left">
          Copyright ©{new Date().getFullYear()},{" "}
          <span className="font-pacifico text-white">{SITE_NAME}</span>, All
          rights reserved
        </div>
        {/* TODO: Refactor this as PartnerLogs */}
        <div className="col-6 text-right">
          <FontAwesomeIcon
            className="payment-cc"
            icon={{ prefix: "fab", iconName: "cc-amex" }}
          />
          <FontAwesomeIcon
            className="payment-cc"
            icon={{ prefix: "fab", iconName: "cc-diners-club" }}
          />
          <FontAwesomeIcon
            className="payment-cc"
            icon={{ prefix: "fab", iconName: "cc-discover" }}
          />
          <FontAwesomeIcon
            className="payment-cc"
            icon={{ prefix: "fab", iconName: "cc-jcb" }}
          />
          <FontAwesomeIcon
            className="payment-cc"
            icon={{ prefix: "fab", iconName: "cc-mastercard" }}
          />
          <FontAwesomeIcon
            className="payment-cc"
            icon={{ prefix: "fab", iconName: "cc-paypal" }}
          />
          <FontAwesomeIcon
            className="payment-cc"
            icon={{ prefix: "fab", iconName: "cc-visa" }}
          />
        </div>
      </div>
    </footer>
  );
}
