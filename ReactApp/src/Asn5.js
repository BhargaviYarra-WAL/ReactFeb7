import {useState} from "react";
function Native(){
    let [native,SetNative]=useState("_");
    function addNative(event){
        event.preventDefault();
        let formTag=event.target;
        let inputTag=formTag.native;
        SetNative(inputTag.value)
    }
    return(
        <div className="Native">
            <h2>city={native}</h2><br/>
            <form onSubmit={addNative}>
                <input type="native" name="native" placeholder="Enter your Native Place"/>
                <button>Add Native</button>
            </form>
        </div>
    )

}
export default Native;