import React, { useState , useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { BiSolidEditAlt } from "react-icons/bi";
import { v4 as uuid } from "uuid";
import "./TableForm.css";
//import { uid } from "uid";

export default function TableForm({
  services,
  setServices,
  quantity,
  setQuantity,
  rate,
  setRate,
  total,
  setTotal,
  list,
  setList,
  sum,
  setSum,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const calTotal = (total) => {
      setTotal(quantity * rate)
    }
  
    calTotal(total)
  }, [total, quantity , rate , setTotal])
  
 
  
   const handleSubmit = (e) => {
     e.preventDefault();
     const newItems = {
       id: uuid(),
       services,
       quantity,
       rate,
       total,
       count: count + 1, // Increment the count
     };
     setServices("");
     setQuantity("");
     setRate("");
     setTotal("");
     setList([...list, newItems]);
     setIsEditing(false);
     setCount(count + 1); // Increment the count for the next item
   };




  //Edit Function

  const Editrow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setServices(editingRow.services);
    setQuantity(editingRow.quantity);
    setRate(editingRow.rate);
  };
  //Delete Function
  const deleterow = (id) => setList(list.filter((row) => row.id !== id));
  
  // calculate sum(total)
  useEffect(() => {
   let rows = document.querySelectorAll(".total");
   let cnt = 0;

   for (let i = 0; i < rows.length; i++) {
     if (rows[i].className === "total") {
       cnt += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
       setSum(cnt);
     }
   }
  }, [setTotal , total , setSum])
  

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="flex flex-col form-input">
          <label htmlFor="services" className="form-label">
            Product
          </label>
          <input
            type="text"
            name="Product"
            id="services"
            placeholder="Product Name"
            value={services}
            onChange={(e) => setServices(e.target.value)}
            className="form-input-field"
          />
        </div>
        <div className="md:grid grid-cols-3 gap-10 md:m-5">
          <div className="flex flex-col form-input">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="form-input-field"
            />
          </div>
          <div className="flex flex-col form-input">
            <label htmlFor="rate" className="form-label">
              Rate
            </label>
            <input
              type="number"
              name="rate"
              id="rate"
              placeholder="Rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="form-input-field"
            />
          </div>
          <div className="flex flex-col form-input">
            <label htmlFor="total" className="form-label">
              Total
            </label>
            <p className="form-total form-input-field">{total}</p>
          </div>
        </div>

        <button type="submit" className="form-button">
          {isEditing ? "Save your edit" : "Add More Item"}
        </button>
      </form>

      <section className="mb-5">
        <table width="100%">
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
                  <td>{count}</td> {/* Display the count as the S.No */}
                  <td>{services}</td>
                  <td>{quantity}</td>
                  <td>{rate}</td>
                  <td className="total">{total}</td>
                  <td>
                    <button onClick={() => deleterow(id)}>
                      <TiDelete className="text-red-800 font-bold" />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => Editrow(id)}>
                      <BiSolidEditAlt className="text-green-800 font-bold text-xl" />
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody></tbody>
            </React.Fragment>
          ))}
        </table>
        <div>
          <h2 className="flex flex-items-end justify-end m-5 text-gray-800 text-3xl">
            Rs. {sum.toLocaleString()}
          </h2>
        </div>
      </section>
    </>
  );
}
