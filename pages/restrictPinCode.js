import { useState } from "react";
import axios from "axios";
export default function restrictpincode() {
  const initialState = { city: "", state: "" };
  const [pincode, setPincode] = useState(0);
  const [init, setInit] = useState(initialState);
  function GetStateCity() {
    console.log(pincode);
    if (pincode.toString().length === 5 && pincode >= 0 && pincode <= 99950) {
      alert("Hi");
    } else {
      alert("Pincode Length should be 5");
    }
  }
  return (
    <>
      <div className="address-form">
        <input
          type="number"
          min="00001"
          max="99950"
          placeholder="Enter Pin Code"
          onChange={(e) => setPincode(e.target.value)}
        />
        <input type="text" placeholder="City" readOnly />
        <input type="text" placeholder="State" readOnly />
        <button onClick={GetStateCity}>Search</button>
      </div>
    </>
  );
}
