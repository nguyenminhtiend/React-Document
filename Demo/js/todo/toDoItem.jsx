var ToDoItem = React.createClass({
    getInitialState: function () {
        return {
            text: this.props.data.name
        };
    },
    _onChange: function(event){
        this.setState({ text: event.target.value });
    },
    _update: function(e){
        if (e.keyCode == 13) {
            var data = this.props.data;
            data.name = this.state.text;
            this.props.onUpdate(data);
        }
    },
    _edit: function(){
        this.props.onEdit(this.props.data.id);
    },
    render: function () {
        var item;
        if (this.props.data.editMode) {
            item = <input type="text" value={this.state.text} onChange={this._onChange} onKeyDown={this._update} />
        } else {
            item = <h1 onDoubleClick={this._edit}>{this.props.data.name}</h1>
        }
        return (<div>
            {item}
        </div>);
    }
});