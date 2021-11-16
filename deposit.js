function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="info"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow}/>}
    />
  )
}

function DepositMsg(props){
  const ctx = React.useContext(UserContext); 
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Deposit again
    </button>
  </>);
} 

function DepositForm(props){
  const [email, setEmail]   = React.useState('');
  const [amount, setAmount] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function verify(){
    console.log(email,amount);
    const user = ctx.users.find((user) => user.email == email);
    if (!user) {
      props.setStatus('fail!');
      return;      
    }
    props.setStatus('Your balance is: ' + user.balance); 
  }

  function handle(){
    console.log(email,amount);
    const user = ctx.users.find((user) => user.email == email);
    if (!user) {
      props.setStatus('fail!');
      return;      
    }
    
    if (amount <= 0) {
      alert("Please enter positive numerical values only");
      return;
    }

    if (isNaN(amount)) {
      alert("Please enter numerical values only");
      return;
    }
    
    user.balance = user.balance + Number(amount);
    alert('Your balance is: ' + user.balance);
    props.setStatus('Your balance is: ' + user.balance);      
    props.setShow(false);
  }

  return(<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)} /><br/>
    <button type="submit"
      className="btn btn-light" 
      onClick={verify}
      disabled={!email}
      >Submit</button><br/>
      
    Amount<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}
      disabled={!email || !amount}
      >Deposit</button>

  </>);
}