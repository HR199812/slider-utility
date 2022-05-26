import { useState } from "react";
import axios from "axios";
import { parseString } from "xml2js";

export default function restrictpincode() {
  const initialState = { city: "", state: "" };
  const [pincode, setPincode] = useState(0);
  const [init, setInit] = useState(initialState);
  function GetStateCity() {
    console.log(pincode);
    if (pincode.toString().length === 5 && pincode >= 0 && pincode <= 99950) {
      let fetchXML = `
        <CityStateLookupRequest USERID="535HOME02105">
          <ZipCode>
            <Zip5>${pincode}</Zip5>
          </ZipCode>
        </CityStateLookupRequest>`;
      let cityState = axios
        .get(
          `http://production.shippingapis.com/ShippingAPI.dll?API=CityStateLookup&xml=${encodeURIComponent(
            fetchXML
          )}`
        )
        .then((res) => {
          parseString(res.data, function (err, result) {
            console.dir(result.CityStateLookupResponse.ZipCode[0].City[0]);
            console.dir(result.CityStateLookupResponse.ZipCode[0].State[0]);
            initialState.city =
              result.CityStateLookupResponse.ZipCode[0].City[0];
            initialState.state =
              result.CityStateLookupResponse.ZipCode[0].State[0];

            setInit(initialState);
          });
          //   console.log(res.data);
        });
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
        <input type="text" placeholder="City" readOnly value={init.city} />
        <input type="text" placeholder="State" readOnly value={init.state} />
        <button onClick={GetStateCity}>Search</button>
      </div>
    </>
  );
}
