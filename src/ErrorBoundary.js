import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state={
            hasError:false
        }
    }

    componentDidCatch(error, info){   //if theres any error this lifecycle hook will run just like catch and throw in js
        this.setState({hasError:true})  //means if the component has error this method will return haserror to true which will then run in the if statement
    }

    render() {
        if(this.state.hasError){
            return <h1>there is some error.Wait...!</h1>
        }
        return this.props.children
    }
}
