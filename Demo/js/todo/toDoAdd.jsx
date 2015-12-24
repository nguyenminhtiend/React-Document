var ToDoAdd = React.createClass({
    render: function () {
        return (<form onSubmit={this.props.onSubmit}>
                <input type="text" onChange={this.props.onChange} value={this.props.text} />
        </form>);
    }
});