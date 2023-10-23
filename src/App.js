import { useState, useRef } from "react";
import TableForm from "./components/TableForm";
import Footer from "./components/footer";
import Notes from "./components/notes";
import Items from "./components/items";
import Dates from "./components/dates";
import Clientdetail from "./components/clientdetail";
import Header from "./components/header";
import Shopdetails from "./components/shopdetails";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("Yash Anand");
  const [address, setAddress] = useState("IIIT Nagpur");
  const [mobile, SetMobile] = useState("7258986760");

  const [shopName, setshopName] = useState("JIO MART");
  const [shopDes, setshopDes] = useState("Mobiles, Electronics, Grocery, Fashion, Home & Kitchen");
  const [shopAdd, SetshopAdd] = useState("5/37A Near SBI Bank Nagpur, 441108");
  const [notes, setNotes] = useState(
    "Thank you for shopping with us! Each order means the world to us, and we’re so happy you chose our small business today."
  );

  const [services, setServices] = useState("Maggie");
  const [quantity, setQuantity] = useState("4");
  const [rate, setRate] = useState("45");
  const [total, setTotal] = useState("");
  const [list, setList] = useState([]);

  const [sum, setSum] = useState(0);

  const componentsRef = useRef();

  


  return (
    <>
      <main className="m-5 p-5 md: max-w-xl md:mx-auto xl:max-w-4xl xl:mx-auto bg-white rounded shadow">
        {showInvoice ? (
          <div ref={componentsRef}>
            <ReactToPrint
              trigger={() => <button className="btn not-Print">Print</button>}
              content={() => componentsRef.current}
              pageStyle="@page { size: auto;  margin: 10mm; }"
            />
            <Header />

            <Shopdetails
              shopName={shopName}
              shopDes={shopDes}
              shopAdd={shopAdd}
            />

            <Dates />

            <Clientdetail name={name} address={address} mobile={mobile} />

            <Items
              services={services}
              quantity={quantity}
              rate={rate}
              total={total}
              list={list}
              setList={setList}
              sum={sum}
            />

            <Notes notes={notes} />

            <Footer />
            <button
              onClick={() => setShowInvoice(false)}
              className="btn not-Print"
            >
              Edit Bill
            </button>
            <ReactToPrint
              trigger={() => (
                <button className="btn not-Print">Download</button>
              )}
              content={() => componentsRef.current}
              pageStyle="@page { size: auto;  margin: 10mm; }"
            />
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <label htmlFor="shopName" class="my-3">
                Shop Name
              </label>
              <input
                type="text"
                name="text"
                id="shopName"
                placeholder="Enter Shop Name"
                defaultValue="Default Value"
                value={shopName}
                onChange={(e) => setshopName(e.target.value)}
              />

              <label htmlFor="shopDes" class="my-3">
                Shop Description
              </label>
              <input
                type="text"
                name="text"
                id="shopDes"
                placeholder="Enter Shop Description"
                value={shopDes}
                onChange={(e) => setshopDes(e.target.value)}
              />

              <label htmlFor="shopAdd" class="my-3">
                Shop Address
              </label>
              <input
                type="text"
                name="text"
                id="shopAdd"
                placeholder="Enter Shop Address"
                value={shopAdd}
                onChange={(e) => SetshopAdd(e.target.value)}
              />

              <label htmlFor="notes" class="my-3">
                Notes to Customer
              </label>
              <input
                type="text"
                name="text"
                id="notes"
                placeholder="Enter Notes for Customer"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />

              {/* <label htmlFor="name" className="my-3">
                Name
              </label>
              <input
                type="text"
                name="text"
                id="name"
                placeholder="Enter Customer's name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor="mobile" className="my-3">
                Mobile Number
              </label>
              <input
                type="number"
                name="mobile"
                id="mobile"
                placeholder="Enter 10-digit Customer Mobile Number"
                value={mobile}
                onChange={(e) => SetMobile(e.target.value)}
                pattern="^\d{10}$" // Use a regular expression to enforce 10 digits
                title="Please enter a 10-digit mobile number" // Optional: Provide a custom error message
              />

              <label htmlFor="address" className="my-3">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Customer's Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              /> */}

              <div class="form-container">
                <div class="form-row-left">
                  <label htmlFor="name" className="my-3">
                    Name
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter Customer's name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div class="form-row-right">
                  <label htmlFor="mobile" className="my-3">
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    placeholder="Enter 10-digit Customer Mobile Number"
                    value={mobile}
                    onChange={(e) => SetMobile(e.target.value)}
                    pattern="^\d{10}$" // Use a regular expression to enforce 10 digits
                    title="Please enter a 10-digit mobile number" // Optional: Provide a custom error message
                  />
                </div>
              </div>

              <label htmlFor="address" className="my-3">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Customer's Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />

              <article>
                <TableForm
                  services={services}
                  setServices={setServices}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  rate={rate}
                  setRate={setRate}
                  total={total}
                  setTotal={setTotal}
                  list={list}
                  setList={setList}
                  sum={sum}
                  setSum={setSum}
                />
              </article>

              <button onClick={() => setShowInvoice(true)} className="btn">
                Preview Bill
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
