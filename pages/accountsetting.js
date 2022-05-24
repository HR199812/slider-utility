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
      </div>
    </>
  );
}
