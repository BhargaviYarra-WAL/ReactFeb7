function Reg(){
    let title="Registration Form";
    function signIn(){
        alert('You are logged in');
    }
    return(
        <div className="Reg">
            <h2>{title}</h2>
            <br/>
            <input type="text" name="name" placeholder="FirstName"></input><br/>
            <input type="text" name="Lastname" placeholder="LastName"></input><br/>
            <input type="email" name="email" placeholder="email"></input><br/>
            <input type="text" name="username" placeholder="UserName"></input><br/>
            <input type="password" name="password" placeholder="Password"></input><br/>
            <button onClick={signIn}>Register</button><br/>
        </div>
    );
}
export default Reg;