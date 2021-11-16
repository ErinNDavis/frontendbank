function AllData(){
  const ctx = React.useContext(UserContext);
  const data = ctx.users;
  
  const renderData = (data, index) => {
    return(
        <tr key={index}>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.password}</td>
            <td>{data.balance}</td>
        </tr>
    )
  }

  return (
    <Card
      bgcolor="info"
      header="All User Data"
      body={
        <table className="table table-light table-striped">
          <thead>
            <tr>
                <th>User</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
            </tr>
          </thead>
          <tbody>
              {data.map(renderData)}
           </tbody>
        </table>
      }
    />
  );

  }

