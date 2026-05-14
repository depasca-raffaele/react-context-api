import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../context/BudgetContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);
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
          <button
           className={`btn ms-3 ${budgetMode ? "btn-success" : "btn-outline-success"}`}
           onClick={() => setBudgetMode(!budgetMode)}>
            {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}

          </button>
        </div>
      </div>
    </nav>
  );
}