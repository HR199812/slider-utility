export default function orderdetails() {
  return (
    <>
      <div className="order-details-container">
        <h1>Order Details</h1>
        <div className="order-navbar">
          Order{" "}
          <span style={{ color: `rgb(169,169,169)` }}>/ Order Details</span>
        </div>
        <div className="order-billing">
          <div>
            <h3>Billing</h3>
          </div>
          <div>
            2501 Richards Avenue
            <br />
            Patterson
            <br />
            Salt Lake City utah 9807
            <br />
            United States
            <br />
            209-894-9495
          </div>
          <div>
            Payment Status:
            <br />
            Refunded
          </div>
        </div>
        <div className="order-shipping">
          <div>
            <h3>Shipping</h3>
          </div>
          <div>
            2501 Richards Avenue
            <br />
            Patterson
            <br />
            Salt Lake City utah 9807
            <br />
            United States
            <br />
            209-894-9495
          </div>
          <div>
            Payment Status:
            <br />
            Refunded
          </div>
        </div>
        <br />
        <hr />
        <div className="order-the-errant-pack">
          <div className="order-the-errant-pack-div-one">
            <h3>The Errant Black</h3>
            <p>The Obisidian Black</p>
          </div>
          <div className="order-the-errant-pack-div-two">
            <p>I5OS</p>
          </div>
        </div>
        <div className="order-the-errant-pack">
          <div className="order-the-errant-pack-div-one">
            <h3>The Errant Black</h3>
            <p>The Obisidian Black</p>
          </div>
          <div className="order-the-errant-pack-div-two">
            <p>I5OS</p>
          </div>
        </div>
        <div className="order-the-errant-pack">
          <div className="order-the-errant-pack-div-one">
            <h3>The Errant Black</h3>
            <p>The Obisidian Black</p>
          </div>
          <div className="order-the-errant-pack-div-two">
            <p>I5OS</p>
          </div>
        </div>
        <br />
        <hr />
        <div className="order-tax">
          <div className="order-tax-div-one">
            <p>Subtotal</p>
            <p>Shipping</p>
            <h3>Tax</h3>
          </div>
          <div className="order-tax-div-two">
            <p>I5OS</p>
            <p>I5OS</p>
            <p>I5OS</p>
          </div>
        </div>
      </div>
    </>
  );
}
