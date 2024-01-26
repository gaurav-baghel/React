import React from "react";
import ReactDOM from "react-dom/client";

// // Q: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

// const header = React.createElement("div",{class: "title"},[
//     React.createElement("h1",{},"I'm h1 tag"),
//     React.createElement("h2",{},"I'm h2 tag"),
//     React.createElement("h3",{},"I'm h3 tag"),
// ]);




// // Q: Create the same element using JSX
// const FunComp = () => (
//     <h3>Another Component</h3>
// );

// const HeaderJSX = () => (<div className="title">
//     <h1 style={{color:"orange"}}>I'm h1 tag using JSX</h1>
//     <h2 style={{color:"blue"}}>I'm h2 tag using JSX</h2>
//     <h3 style={{color:"green"}}>I'm h3 tag using JSX</h3>
//     <FunComp/>
// </div>);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeaderJSX/>);



/*
Q: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/


const imgPath = "C:\Users\gaurav.baghel\Downloads\icons8-user-50 (1).png";


const Header = () => (
    <header className="header">
        <div className="left">
            <img src="https://github.com/gaurav-baghel/gaurav-baghel.github.io/blob/main/images/gaurav%20logo%20transparent.png?raw=true"/>
        </div>

        <div className="mid">
            <input className="input" type="text" placeholder="search here..."></input>
            <button type="submit">
                <i class="fa-search">Submit</i>
            </button>
        </div>

        <div className="right">
            <img src="{userIcon}" alt="userIcon"/>
        </div>
    </header>

    );

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Header/>);
