
var MyComponent = React.createClass({
    propTypes: {
        requiredFunc: React.PropTypes.func.isRequired
    },
    //getDefaultProps: function(){
    //    return {
    //        name: "messi"
    //    };
    //},
    render: function () {
        return (<h1>Hello abc!</h1>);
    }
});

React.render(<MyComponent />, document.getElementById("example"));