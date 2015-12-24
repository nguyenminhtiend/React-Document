var list = [{ id: 1, name: "To do 1", editMode: true }, { id: 2, name: "Do to 2"}];

var ToDoApp = React.createClass({
    getInitialState: function () {
        return {
            list: list,
            text: ""
        };
    },
    _onChange: function (event) {
        this.setState({ text: event.target.value });
    },
    _onSubmit: function (event) {
        event.preventDefault();
        if (this.state.text !== "") {
            var listTemp = this.state.list;
            listTemp.push({ id: new Date().getTime(), name: this.state.text });
            this.setState({ list: listTemp, text: "" });
        }
    },
    _update: function (item) {
        var listItems = this.state.list;
        for (var i in this.state.list) {
            if (listItems[i].id == item.id) {
                item.editMode = false;
                listItems[i] = item;
                this.setState({list: listItems});
                break;
            }
        }
    },
    _edit: function (id) {
        var listItems = this.state.list;
        for (var i in this.state.list) {
            if (listItems[i].id == id) {
                listItems[i].editMode = true;
                this.setState({ list: listItems });
                break;
            }
        }
    },
    render: function () {
        return (<div>
                    <ToDoAdd onChange={this._onChange}
                             onSubmit={this._onSubmit}
                             text={this.state.text} />
                    <ToDoList data={this.state.list} 
                              onUpdate={this._update}
                              onEdit={this._edit} />
               </div>);
    }
});

ReactDOM.render(<ToDoApp />, document.getElementById("app"));