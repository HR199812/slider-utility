export default function yourorder() {
  return (
    <>
      <div className="your-orders-container">
        <h1>Your Orders</h1>
        <div className="your-order-row">
          <div className="your-order-image"></div>
          <div className="your-order-info">
            <div className="your-order-data">
              <p>20 November 2021</p>
              <h2>Shipped via Fedex</h2>
              <p>Order No#</p>
              <p>Order Total:</p>
              <h2>$734</h2>
            </div>
            <div className="you-order-see-more">
              <p>Order Details</p>
              <p>Track Order</p>
              <p>Request a Return</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
