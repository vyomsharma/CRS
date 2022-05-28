import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <div style={{display: "none"}}>
        <h1>Bookkeeper</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="invoices">Invoices</Link>
          <Link to="expenses">Expenses</Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
