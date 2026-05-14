import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const { maxPrice, setMaxPrice } = useContext(BudgetContext);

  const handleMaxPiceChange = (event) => {
    const value = event.target.value;

    if(value === "") {
      setMaxPrice(null);
      return
    }

    const numericValue = Number(value);
    setMaxPrice(Number.isNaN(numericValue) ? null : numericValue);
  };
  
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          NotSoEStore
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/catalog">
                Prodotti
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/chi-siamo">
                Chi Siamo
              </NavLink>
            </li>
          </ul>

          <div className="ms-3">
            <label htmlFor="max-price-input" className="form-label mb1">
              Prezzo massimo
            </label>
            <input 
            type="number" 
            id="max-price-input"
            min="0"
            className="form-control"
            placeholder="Es. 30"
            value={maxPrice ?? ""}
            onChange={handleMaxPiceChange}
             />
          </div>

       {/*    <button
           className={`btn ms-3 ${budgetMode ? "btn-success" : "btn-outline-success"}`}
           onClick={() => setBudgetMode(!budgetMode)}>
            {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}

          </button> */}
        </div>
      </div>
    </nav>
  );
}