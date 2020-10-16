import React from 'react';
import { Link } from "react-router-dom";
function Testview() {
        return (
            <div className="App">
                <h1>hi</h1>
                <Link to="/">
				    <button className="myButton">Back home</button>
			    </Link>
            </div>
        );
}

export default Testview;