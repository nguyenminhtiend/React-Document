var Component = React.createClass({
    getDefaultProps: function(){
        console.log('getDefaultProps');
        return {
            name: 'Messi'
        };
    },
    getInitialState: function(){
        console.log('getInitialState');
        return {
            number: 0
        };
    },
    componentWillMount: function(){
        console.log('componentWillMount');
    },
    shouldComponentUpdate: function(nextProps, nextState){
        // return a boolean value
        return true;
    },
    render: function () {
        console.log('render');
        return (<div>
                    <h1>{this.state.number}</h1>
                    <button onClick={this.countMe}>Count me</button>
                </div>);
    },
    componentDidMount: function () {
        console.log('componentDidMount ');
    },
    countMe: function () {
        this.setState({number: this.state.number + 1});
    }
});

React.render(<Component />, document.getElementById("example"));