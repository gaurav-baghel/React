import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
            count1:1
        }
        console.log("child constructor");
    }

    componentDidMount(){
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
        const {count,count1} = this.state;
        const{name,position,email} = this.props;
        return(
            <div className="user-card">
                <p>count:{count}</p>
                <button onClick={()=>{
                        this.setState({
                            count:this.state.count+1,
                        })
                    }
                }   
                >Increase count</button>
                <h3>Name: {name}</h3>
                <h3>Position: {position}</h3>
                <p>Email: {email}</p>
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