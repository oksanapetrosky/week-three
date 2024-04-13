import { Component } from "react";
import check from './check.png'

export class GroceryList extends Component {
    state = {
         userInput: "",
         groceryList: []
        }
       onChangeEvent(e) {
        this.setState({userInput: e});
       }

       addItem(input) {
        if (input === '') {
            alert("Please, enter an item!")
        } else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''})
       }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = []; 
        this.setState({groceryList: listArray})
    }
       crossWord(event) {
        const li = event.target;
        li.classList.toggle("crossed");
       }

       onFormSubmit(e) {
        e.preventDefault();
       }
            render() {
                return (
                    <div>
                        <form onSubmit={this.onFormSubmit}>
                    <div className="container">
                        <input placeholder="Add grociries"
                        type="text"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    </div>
                    <div className="container">
                        <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
                    </div>
                    <ul>
                        {/* this method will help with error when we use map(), using index we make a "key" for each child in our array */}
                        {this.state.groceryList.map((item, index) => (
                            <li onClick={this.crossWord} key={index}>
                           <img src={check} alt="basket" width="20px" />
                                {item}</li>
                        ))}
                    </ul>
                    <div className="container">
                    <button onClick={() => this.deleteItem()} className="btn delete">Remove</button>
                    </div>
                    </form>
                    </div>
                )
    }

}