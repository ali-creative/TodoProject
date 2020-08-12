import React from 'react';

class TodoHeader extends React.Component {
   
    render() {
        const date = new Date()
        const hours = date.getHours()
        const minutes = date.getMinutes()
        return (
            <div className="headertodo">
                <h1>Todo List as at {hours % 12} : {minutes} </h1>
            </div>
        )
    }
}

export default TodoHeader;