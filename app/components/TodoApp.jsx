var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'clean the house'
        },
        {
          id: 3,
          text: 'leave mail on porch'
        },
        {
          id: 4,
          text: 'play video games'
        }
      ]
    };
  },
  handleAddTodo: function(text){
    alert('new todo:' + text);
  },
  render: function(){
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
