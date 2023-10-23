import React from "react";
import "./clientdetails.css";

export default function ClientDetail({ name, address, mobile }) {
  return (
    <>
      <hr className="custom-hr" />
      <section className="client-details">
        <ul>
          <li>
            <span className="mr-5 client-name">Name </span> : {name}
          </li>
          <li>
            <span className="mr-3 client-mobile">Mobile </span> : {mobile}
          </li>
          <li>
            <span className="mr-2 client-address">Address</span>: {address}
          </li>
        </ul>
      </section>
      <hr className="custom-hr" />
    </>
  );
}


