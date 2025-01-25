import React from "react";
import {createContext} from "react";
import UserContext from "../utils/UserContext";
// const UserClass = () => {
//     return <div className="user-card">
//         <h1>Name: Ram Niwash Pandey</h1>
//         <h2>Location: Deoria</h2>
//     </div>
// }

// class UserClass extends React.Component {
//     constructor(props){
//         super(props)
//         // console.log(props)
//     }
    
    
//     render(){

//         const {name, location} = this.props
//         return (
//             <div>
//                 <h3>Name: {name}</h3>
//                 <h3>Location: {location}</h3>
//             </div>
//         )
//     }
// }
const UserContext = createContext(UserContext)
class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userInfo: {
                
                name: "Default",
                location: "default"
            },
            
        }
        // console.log(this.props.name+ "Constructor Called")
    }
    componentDidMount(){
        // console.log(this.props.name+ "Child Component mounted") // Similar to useEffect() state variable
        
        this.timer = setInterval(()=>{
            console.log("API calling")
        }, 1000)
    }
    componentDidUpdate(){ //this is called when any compenent is updated which is given inaside the condition.
        console.log("Component updated")
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render(){
        
        const {name, location} = this.state.userInfo
        // const {count, count2} = this.state
        // console.log(name+ "Child Rendered");
        return (
            <div className="user-card">
                
            <h1>Name: {name}</h1>
            {/* <button onClick={() => {
                this.setState({
                    count: this.state.count+1
                })
            }}>Count++</button> */}
            <h2>Location: {location}</h2>
            
            </div>
        )
    }
}

export default UserClass