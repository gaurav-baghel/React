import React from "react";
import { Link } from "react-router-dom";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            // count:0,
            // count1:1
            userInfo: {
                name: "User Name",
                location: "City",
                gitURL: "https://github.com/"
                
            }
        }
        console.log("child constructor");
    }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/gaurav-baghel");
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        //this is called after the first render of our component
        console.log("Child did mount");
        // setInterval(()=>{
        //     console.log("set interval called");
        // },1000)
    }

    componentDidUpdate(){
        console.log("child did update");
    }

    componentWillUnmount(){
        console.log("child will unmount");
    }

    render(){
        console.log("child render");
        const {name,location,html_url,avatar_url} = this.state.userInfo;
        // const{name,position,email} = this.props;
        return(
            <div className="user-card">
                {/* <p>count:{count}</p>
                <button onClick={()=>{
                        this.setState({
                            count:this.state.count+1,
                        })
                    }
                }   
                >Increase count</button> */}
                <div className="user-image">
                    <img src={avatar_url}/>
                </div>
                <h3>Name: {name}</h3>
                <h3>Location: {location}</h3>
                
                <h4>Github: <Link to={html_url}>gaurav-baghel</Link> </h4>
            </div>
        )
    }
}

































// class UserClass extends React.Component{
//     constructor(props){
//         super(props);
//         this.state ={
//             count:0,
//             count2:2,
//         }


//         console.log(props);
//         console.log("child constructor");

//     }

//     componentDidMount(){
//         console.log("child did mount");
//     }

    
//     render(){
//         console.log("child render");
//         const {name,position,email} = this.props;
//         const {count,count2} = this.state;
//         return(
            
//             <div className="user-card">
//             <p>count: {count}</p>
//             <button onClick={()=>{
//                 this.setState({
//                     count: this.state.count+1,
//                 }) 
//             }}
//             >Increase Count</button>
//             <button onClick={()=>{
//                 this.setState({
//                     count2: this.state.count2+1
//                 }) 
//             }}
//             >Increase count2</button>
//             <p>count2:{count2}</p>
//             <h3>Name: {name}</h3>
//             <h3>Position: {position}</h3>
//             <p>Email : {email}</p>
//             </div>
//         )
//     }
// }

export default UserClass; 