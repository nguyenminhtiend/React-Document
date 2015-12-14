

    var DefaultNameMixin = {
        getDefaultProps: function () {
            return {
                name: "Messi"
            };
        }
    };

    var MyComponent = React.createClass({
        mixins: [DefaultNameMixin],
        render: function () {
            return (<h1>Hello {this.props.name}!</h1>);
        }
    });



    //var Counter = React.createClass({
    //    incrementCount: function(){
    //        this.setState({
    //            count: this.state.count + 1
    //        });
    //    },
    //    getInitialState: function(){
    //        return {
    //            count: 0
    //        }
    //    },
    //    render: function(){
    //        return (
    //          <div className="my-component">
    //            <h1>Count: {this.state.count}</h1>
    //            <button type="button" onClick={this.incrementCount}>Increment</button>
    //          </div>
    //      );
    //    }
    //});



React.render(<MyComponent />, document.getElementById("example"));