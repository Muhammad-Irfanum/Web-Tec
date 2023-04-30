const { Component } = require("react");

class Logic extends Component {
    state={
        name:'Ali',
        id: 110

    }

    changeState=(name,id)=>{
        // console.Log({name});
        // console.log({id});
        this.setState({name})
        this.setState({id})
    }
    render(){
        return(
            <div>
                <h1>this is passing parameiter</h1>
                <h2>Name:{this.state.name}</h2>
                <h2>ID: {this.state.id}</h2>
                <button onClick={()=>this.changeState("bangash","777")} >Change</button>
            </div>
        );
    }
}
export default Logic;