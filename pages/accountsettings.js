export default function accountsettings() {
  return (
    <>
      <div className="account-settings-container">
        <h1>
          Account <br />
          Settings
        </h1>
        <div className="account-info">
          <input type="text" placeholder="DSB" readOnly />
          <input type="email" placeholder="DSB" readOnly />
        </div>
        <div className="account-info">
          <input type="text" placeholder="JANUARY" readOnly />
          <input type="text" placeholder="last" readOnly />
        </div>
        <div className="account-info">
          <button className="account-save-settings">Save Changes</button>
        </div>
        <div className="account-address-cards-container">
          <div className="address-card">
            <h2 style={{ fontWeight: `bolder`, textAlign: `center` }}>
              Addresses
            </h2>
            <button>Edit Address</button>
            <h3>A Nice Heading</h3>
            <h5>Last Edited by Monty Shokeen</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="address-card">
            <h2 style={{ fontWeight: `bolder`, textAlign: `center` }}>
              Addresses
            </h2>
            <button>Edit Address</button>
            <h3>A Nice Heading</h3>
            <h5>Last Edited by Monty Shokeen</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
