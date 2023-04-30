import { Component } from "react";

class Argument extends Component{
    // state={
    //     id:101,
    //     username:"Arfah Ali"
    // }
    // handleState =(id)=>{
    //  console.log(id);
    // }


    // render() {
    //     return (
    //         <div>
    //             <h3>Student Module</h3>
    //             <button >Check student </button>
    //         </div>
    //     );
    // }


    handleClick = (str, str2, str3) => {
        console.log(str);
        console.log(str2);
        console.log(str3);
        const salary= str+str2+str3;
        console.log(salary);

    };
render(){
    return (
        <div>
            <button onClick={() => this.handleClick(2, 2, 3)}>class click</button>
            <button onClick={e => {this.handleClick("Arfah Ali", "Sofia Amir", "Mahnoor")}}>class 2nd click</button>
            <button onClick={e => {this.handleClick(2, 2, 3)}}>class 3rd click</button>

        </div>
        );
    }
}
export default Argument;