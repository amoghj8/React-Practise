import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component{
    
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleLog = this.handleLog.bind(this)
    }
    
    handleLog() {
        this.setState(prevState => {
            return {
               isLoggedIn : !prevState.isLoggedIn
                }
            }  
        )
    }
    
    render() {
        let buttonText = this.state.isLoggedIn ? 'Log out' : 'Log in'
    return (
        
        <div>
            <button type='button' onClick={this.handleLog}>{buttonText} </button>
           <p>{this.state.isLoggedIn ? 'LoggedIn' : 'LoggedOut'}</p>
        </div>
    )
    }
}

export default App
