import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="heading">
        <h3>Employee App</h3>
      </div>
      <div className="nav_button">
        <button>
          <Link to="/add">
            <i className="fa fa-plus"></i> Add
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
