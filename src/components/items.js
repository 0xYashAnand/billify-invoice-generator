import React from 'react'
import { TiDelete } from "react-icons/ti";
//import { BiSolidEditAlt } from "react-icons/bi";
import "./Dates.css";


export default function items({ list, setList , Editrow , sum  }) {
  const deleterow = (id) => setList(list.filter((row) => row.id !== id));
   
 

  return (
    <>
      <section className="mb-5">
        {/* <table width="100%">
          <thead>
            <tr className="bg-gray-100 ">
              <td width="10%">S.No</td>
              <td width="40%">Services</td>
              <td>Quantity</td>
              <td>Rate</td>
              <td>Total</td>
            </tr>
          </thead>
          {list.map(({ id, services, quantity, rate, total, count }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr>
                  <td>{count}</td>
                  <td>{services}</td>
                  <td>{quantity}</td>
                  <td>{rate}</td>
                  <td>{total}</td>
                  <td>
                    <button onClick={() => deleterow(id)}>
                      <TiDelete className="text-red-800 font-bold not-Print" />
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody></tbody>
            </React.Fragment>
          ))}
        </table> */}
        <table className="w-full" style={{ fontSize: "20px" }}>
          <thead>
            <tr className="bg-gray-100">
              <th className="w-1/12 text-center">S.No</th>
              <th
                style={{ textAlign: "left", paddingLeft: "35px" }}
                className="w-8/12"
              >
                Product
              </th>
              <th className="w-1/12 text-center">Quantity</th>
              <th className="w-1/12 text-center">Rate</th>
              <th className="w-1/12 text-center">Total</th>
            </tr>
          </thead>
          {list.map(({ id, services, quantity, rate, total, count }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr style={{ fontSize: "20px" }}>
                  <td className="text-center">{count}</td>
                  <td style={{ paddingLeft: "35px" }}>{services}</td>
                  <td className="text-center">{quantity}</td>
                  <td className="text-center">{rate}</td>
                  <td className="text-center">{total}</td>
                  <td>
                    <button onClick={() => deleterow(id)}>
                      <TiDelete className="text-red-800 font-bold not-Print" />
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody></tbody>
            </React.Fragment>
          ))}
        </table>
        <div class="parent-container">
          <div class="price">
            <h2>Rs. {sum.toLocaleString()}</h2>
          </div>
        </div>
      </section>
    </>
  );
}

