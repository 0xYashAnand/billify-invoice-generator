import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        
        {/* <div>
          <ul className="flex items-center justify-between flex-wrap mb-5">
            <li>
              <button onClick={printpdf} className="btn-print not-Print ">
                Print
              </button>
            </li>
            <li>
              <button onClick={printpdf} className="btn-download not-Print">
                Download
              </button>
            </li>
            <li>
              <button className="btn-send not-Print ">Send</button>
            </li>
          </ul>
        </div> */}
        <div>
          <h1 className="font-bold uppercase tracking-wide text-3xl not-Print">
            Invoice Generator
          </h1>
        </div>
      </header>
    </>
  );
}
