import React from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox.js'
// import {robo} from './robo'
import { Component } from 'react';
import './App.css'
import Scroll from '../Components/Scroll'
import ErrorBoundary from '../ErrorBoundary'
// const state={  to use state you need to create a constructor and specify this.state
//     robo: robo,
//     Searchbox:''
// }

class App extends Component{
    constructor(){
        super() // to use'this' you have to use super() which calls the constructor of the parent class which is component here
        this.state={
            robo:[],
            Search:''
        }
        console.log('Constructor');
    }
    componentDidMount(){ //gets called after render  This says that yes, the app component is mounted on the web page, and it is rendered, that is it's displaying something.
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            return response.json();
        })
        .then(users=>{
            this.setState({robo:users})
        })
       
        console.log('ComponentdidMount')
    }   

    // we passed down "onSearchChange" to the "SearchBox", 
    // and in the "SearchBox", every time there's an "onChange" on the input,
    // it lets the app know "Hey, there was a change"
    // "Run this function"
    // It runs the function with the event and updates the state of the "searchBox" to whatever we type
        //remember with an event there is always event.target.value
    onSearchChange=(event)=>{ 
        //also in react whenevr you want to change state use this.setState
        this.setState({Search:event.target.value})
        //we cant access filterSearch in seachbox from here so insteead we use it inside render
        // const filterSearch= this.state.robo.filter((robot)=>{ //here the value of'this is not refering to the App class as the event happend in the input of Searchbox component and input doesnt have state.robot so we instead use arrow function and it will work fine and always use arrow function only while creating a method
        //     return robot.name.toLowerCase().includes(this.state.Searchbox.toLowerCase())
        // })
    }

    render() {
        //now we can pass filetrSearch as property instead of passing this.state.robot
        // Now with the information that we have from the search box we can now communicate to the card list and
        // tell it "Hey, I want to filter the "robots" state to now have only what includes in the "searchBox"
       
       //instead of using this.state again and again
        const { robo, Search }=this.state;       
        const filterSearch= robo.filter((robot)=>{ //here the value of'this is not refering to the App class as the event happend in the input of Searchbox component and input doesnt have state.robot so we instead use arrow function and it will work fine and always use arrow function only while creating a method
            return robot.name.toLowerCase().includes(Search.toLowerCase())
        })
        console.log('render')
        return (
            <div className= 'tc'>
                <h1>ROBOfRIENDS</h1>
                <Searchbox searchChange={this.state.onSearchChange}/>
                {/* <Cardlist robo={robo}/> So now we can acces robo simply with the help of this.state */}
                <Scroll> {/* by wrapping cardlist inside scroll you can create a scroll comp which helps ypir card to be scrolable */}
                   <ErrorBoundary>
                    <Cardlist robo={filterSearch}/>{/*now robo is passed down as props with the help of state */}
                   </ErrorBoundary> 
                </Scroll>
            </div>
        );
};
}
export default App;



// We have our "App" component that has two states - "robots" and "searchfield"
// And because "App" owns the state, any component that has "state" uses the "class" syntax so they can use the
// "constructor" function to create "this.state", and this "state" is what changes in an app
// It's what describes the app
// We manage this state in here, the app is the only thing that can change this state
// But it can pass down things such as props, so we passed down "onSearchChange" to the "SearchBox", 
// and in the "SearchBox", every time there's an "onChange" on the input,
// it lets the app know "Hey, there was a change"
// "Run this function"
// It runs the function with the event and updates the state of the "searchfield" to whatever we type
// Now with the information that we have from the search box we can now communicate to the card list and
// tell it "Hey, I want to filter the "robots" state to now have only what includes in the "searchfield"
// and instead of passing that "this.state" to our "robots" we just passed the "filteredRobots"



// MOUNTING =basically measn replacing the root in div with the app when you refresh the page
// These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

// constructor()
// static getDerivedStateFromProps()
// render()
// componentDidMount()


// Updating
// An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered(when we change thhe search content)

// static getDerivedStateFromProps()
// shouldComponentUpdate()
// render()
// getSnapshotBeforeUpdate()
// componentDidUpdate()


// Unmounting
// This method is called when a component is being removed from the DOM:

// componentWillUnmount()
