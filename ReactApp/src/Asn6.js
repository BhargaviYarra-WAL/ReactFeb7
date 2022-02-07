function Login(){
    let title="Login Form";
    function signIn(){
        alert('You are logged in');
    }
    return(
        <div className="Login">
            <h3>{title}</h3>
            <br/>
            <input type="name" name="name" placeholder="Name"></input><br/>
            <input type="password" name="password" placeholder="Password"></input><br/>
            <button onClick={signIn}>Sign In</button>
        </div>
    );
}
export default Login;