import "./App.css";

function App() {
  return (
    <div>
      <div>
        <form>
          <label htmlFor="firstNameInput">First Name</label>
          <input type="text" id="firstNameInput"></input>
          <label htmlFor="lastNameInput">Last Name</label>
          <input type="text" id="lastNameInput"></input>
          <label htmlFor="emailInput">Email Address</label>
          <input type="text" id="emailInput"></input>
          <label htmlFor="phoneInput">Phone Number</label>
          <input type="text" id="phoneInput"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
