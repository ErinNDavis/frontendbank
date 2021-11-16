function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="info"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}


function CreateMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>Add another account</button>
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function handle(){
    const balance = 100;
    
    if (name.length <= 0) {
      alert("Name Required");
      setName("");
    } else if (email.length <= 0) {
      alert("Email Required");
      setEmail("");
    } else if (email.includes("@") === false) {
      alert("invalid email");
    } else if (email.includes(".") === false) {
      alert("invalid email");
    } else if (password.length <= 0) {
      alert("Password Required");
      setPassword("");
    } else if (password.length < 8) {
      alert("Password must contain at least 8 characters.");
      setPassword("");
    } else {
      console.log(name,email,password);
      ctx.users.push({name,email,password,balance});
      props.setShow(false);
    }
    
  }    

  return (<>

    Name<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    Email address<br/>
    <input type="email" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}
      disabled={!password}
      >Create Account</button>

  </>);
}