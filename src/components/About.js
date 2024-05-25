import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About  extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent did mount");
    }

    render(){
        console.log("parent render");
        return(
            <div className="about">
                <h1>About us</h1>
                <p>Onifood is a cloud kitchen + food delivery app established and serving since 2023 😊😋</p>
                <div className="about-team">
                    <h2>Meet the team:</h2>
                    {/* <User name={"Gaurav Baghel*"} position={"Founder & CEO*"} email={"gauravbaghel2k@gmail.com*"} /> */}
                    <br/>
                    <UserClass name={"Gaurav Baghel**"} position={"Founder & CEO**"} email={"gauravbaghel2k@gmail.com**"} />
                </div>
            </div>
        )
    }
}

// const About = ()=>{
//     return(
//         <div className="about">
//             <h1>About us</h1>
//             <p>Onifood is a cloud kitchen + food delivery app established and serving since 2023 😊😋</p>
//             <div className="about-team">
//                 <h2>Meet the team:</h2>
//                 <User name={"Gaurav Baghel*"} position={"Founder & CEO*"} email={"gauravbaghel2k@gmail.com*"} />
//                 <br/>
//                 <UserClass name={"Gaurav Baghel**"} position={"Founder & CEO**"} email={"gauravbaghel2k@gmail.com**"} />
//             </div>
//         </div>

//     )
// }

export default About;