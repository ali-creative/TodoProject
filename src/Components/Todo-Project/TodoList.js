import React from 'react';
import TodoHeader from './TodoHeader';
import TodoItems from './TodoItems';
import './TodoList.css';

class TodoList extends React.Component {

    constructor(){
        super()
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    addItem(e){
        if(this.inputElement !== ""){
            var newItem = {
                text: this.inputElement.value,
                key: Date.now()
            }
            this.setState((prevState) => {
                return {
                    items : prevState.items.concat(newItem)
                }
            })
            this.inputElement.value = ""
        }
        e.preventDefault()
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function(item){
            return (item.key !== key)
        })

        this.setState({
            items : filteredItems
        })
    }

    render() {
        return(

            <div>
                <TodoHeader />
                <div className="mainContainer">
                    <div className="todoListMain">
                        <div className="header">
                            <form onSubmit={this.addItem}>
                                <input ref = {(a) => this.inputElement = a}
                                placeholder="Enter Task">
                                </input>
                                <button type="submit">Add</button>
                            </form>
                        </div>
                        <TodoItems entries = {this.state.items}
                                   delete = {this.deleteItem} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoList;