import React from "react"
import UserClass from "./UserClass"
import User from "./User";
// const About = () =>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Zaikadham which Delivers food and Love</h2>
//         </div>
//     )
// }

// export default About

class About extends React.Component {
    constructor (props){
        super(props)
        
    }
    componentDidMount(){
        console.log("Parent Component mounted.")
    }

    render() {
        
        return (
            <div>
             <h1>About</h1>
             <h2>This is Zaikadham which Delivers food and Love</h2>
             {/* <User name={"Ram Niwash Pandey (Function)"} location={"Deoria Function"}/> */}
             <UserClass name={"Ram Niwash Pandey (Class)"} location={"Deoria Class"}/>
         </div>
         
        )
    }
}

export default About;