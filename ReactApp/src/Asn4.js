function Hobbies(){
    let hobby1="Reading";
    let hobby2="Singing";
    let hobby3="Dancing";
    let hobby4="swimming";
    return(
        <div className="Hobbies">
            <h3>Show Hobbies</h3>
            <table>
                <tr>
                    <td>Hobby1</td>
                    <td>{hobby1}</td>
                </tr>
                <tr>
                    <td>Hobby2</td>
                    <td>{hobby2}</td>
                </tr>
                <tr>
                    <td>Hobby3</td>
                    <td>{hobby3}</td>
                </tr>  
                <tr>
                    <td>Hobby4</td>
                    <td>{hobby4}</td>
                </tr>
            </table>
        </div>
    );
}
export default Hobbies;