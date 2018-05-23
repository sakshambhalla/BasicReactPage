import React,{Component} from "react";
import Hobby from './Hobby.js';

class Content extends Component {

    state = {
        hobbies:[
            {name:"Coding"},
            {name:"Acting"},
            {name:"Mathematics"},
            {name:"Singing",},
            {name:"Problem Solving"},
            {name:"Chess"},
            {name:"Watching Movies"}
        ]
    };

    delHobby = (index, e)=>{
        let newList = Object.assign([],this.state.hobbies);
        newList.splice(index,1);
        this.setState({hobbies:newList});
    };

    changeHobby = (index, e)=>{
        let changedHobbies = Object.assign([],this.state.hobbies);
        changedHobbies[index].name= e.target.value;
        this.setState({changedHobbies});

    };

    render() {
        return (
            <div style={{border:'2px solid red'}} className="App">

                <h1>My Hobbies:</h1>
                <ul>
                    {
                        this.state.hobbies.map((hobby, index)=>{
                            return(
                                <Hobby changeHobby={this.changeHobby.bind(this,index)} delHobby={this.delHobby.bind(this,index)} >{hobby.name}</Hobby>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Content;