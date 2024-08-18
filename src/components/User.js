import { useState } from "react";

const User = ({name,position,email}) => {
    let [count, setCount] = useState(0);
    return(
        <div className="user-card">
            <p>Count: {count}</p>
            <button onClick={()=>{
                setCount(count++);
            }}>Increase count</button>
            <h3>Name: {name}</h3>
            <h3>Position: {position}</h3>
            <p>Email : {email}</p>
        </div>

    )
}

export default User;