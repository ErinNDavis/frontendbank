function NavBar(){
  return(

    <nav className="navbar bg-light">
      <div className="container-fluid">

        <NavLink 
          exact
          activeClassName="active"
          className="nav-link mr-auto" 
          to="/">
            BadBank
            <span className="tooltiptext"> Home Page </span>
        </NavLink>
        
        <NavLink
          activeClassName="active"
          className="nav-link"
          to="/createaccount/">
              Create Account
              <span className="tooltiptext">Create an account with our bank. </span>
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          to="/deposit/">
              Deposit
              <span className="tooltiptext">Deposit cash into your account. </span>
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          to="/withdraw/">
              Withdraw
              <span className="tooltiptext">Withdraw cash from your account. </span>
        </NavLink>
        <NavLink
          activeClassName="active"
          className="nav-link"
          to="/alldata/">
              Alldata
              <span className="tooltiptext">View your account information. </span>
        </NavLink> 

      </div>
    </nav>

  );
}