import { useState } from "react";

function Contact(){
    const [name,setName] = useState("Satish");

    const handleclick = () => {
        setName("Satyadev");
    }
    return(
        <div>
            <h1>Contact details</h1>
            <h2>The owner of this page is {name}</h2>
            <button onClick={handleclick} class="btn btn-primary">Change owner</button>
            <br/>
            <button onClick={() => {setName("2nd one")}} class="btn btn-success">Change owner 2</button>

        </div>
    )
}

export default Contact;