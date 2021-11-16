function Home(){
  return (
    <Card
      txtcolor="white"
      bgcolor="info"
      header="BadBank"
      title="Welcome to the bank with no security"
      text="Let us help you with all your unsecure banking needs"
      body={(<img src="bank.jpg" className="img-fluid" alt="Banking image"/>)}
    />
  );  
}
