
var MyComponent = React.createClass({
    getDefaultProps: function(){
        return {
            name: "messi"
        };
    },
    render: function () {
        return (<h1>Hello {this.props.name}!</h1>);
    }
});

    var Counter = React.createClass({
        incrementCount: function(){
            this.setState({
                count: this.state.count + 1
            });
        },
        getInitialState: function(){
            return {
                count: 0
            }
        },
        render: function(){
            return (
              <div className="my-component">
                <h1>Count: {this.state.count}</h1>
                <button type="button" onClick={this.incrementCount}>Increment</button>
              </div>
          );
        }
    });



React.render(<Counter />, document.getElementById("example"));