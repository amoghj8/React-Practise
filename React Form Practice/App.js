import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName : "",
            lastName : "",
            age : "",
            gender : "",
            destination : "",
            pizza: false,
            snackbar: false
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState( {
            [name]: checked
        }) :
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <main>
                <form>
                    <input placeholder="First Name" name="firstName" onChange={this.handleChange} /> <br />
                    <input placeholder="Last Name" name="lastName" onChange={this.handleChange}/> <br />
                    <input placeholder="Age" name="age" onChange={this.handleChange}/><br />
                    
                    {/* Create radio buttons for gender here */}
                    <input type="radio" name="gender" value="female" onChange={this.handleChange} checked={this.state.gender === "female"}/>
                    <label>Female</label>
                    <input type="radio" name="gender" value="male" onChange={this.handleChange} />
                    <label>Male</label>
                    <br />
                    
                    {/* Create select box for location here */}
                    <select name="destination" onChange={this.handleChange} value={this.state.destination}>
                        <option value="">Choose destination </option>
                        <option value="location 1">Location 1</option>
                        <option value="location 2">Location 2</option>
                    </select>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <input type="checkbox" name="pizza" onChange={this.handleChange} checked={this.state.pizza} />
                    <label>Pizza ? </label>
                    <input type="checkbox" name="snackbar" checked={this.state.snackbar} onChange={this.handleChange}/>
                    <label>Snackbar ? </label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p>
                    Your dietary restrictions: 
                  <br /> Pizza : {this.state.pizza ? "yes" : "no"}
                  <br /> Snackbar : {this.state.snackbar ? "yes" : "no"}
                </p>
            </main>
        )
    }
}

export default App
