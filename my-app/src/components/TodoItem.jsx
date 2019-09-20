import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

    getStyle = () => {
        return {
            background: 'black',
            color: 'white',
            padding: '20px',
            margin: '10px 0',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <h3>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{' '}
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>Delete</button>
                </h3>
            </div >
        );
    }
}

const btnStyle = {
    background: 'white',
    borderRadius: '4xp',
    cursor: 'pointer',
    border: '0',
    padding: '4px',
    margin: '0 20px',
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default TodoItem;
