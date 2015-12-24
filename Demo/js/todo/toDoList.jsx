var ToDoItem = require('./toDoItem.jsx');

var ToDoList = React.createClass({
    render: function () {
        return (<div>
                {
                    this.props.data.map(function (data, key){
                        return (<ToDoItem data={data} key={key} onUpdate={this.props.onUpdate} onEdit={this.props.onEdit} />)
                    }.bind(this))
                }
                </div>);
    }
});