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
    componentWillReceiveProps: function (nextProps) {
        this.setState({ number: this.state.number + 2 });
        console.log('componentWillReceiveProps');
    },
    componentWillMount: function(){
        console.log('componentWillMount');
    },
    shouldComponentUpdate: function(nextProps, nextState){
        // return a boolean value
        console.log('shouldComponentUpdate');
        return true;
    },
    componentWillUpdate: function(nextProps, nextState){
        console.log('componentWillUpdate');
    },
    render: function () {
        console.log('render');
        return (<div>
                    <h1>{this.props.name}: {this.state.number}</h1>
                    <button onClick={this.countMe}>Count me</button>
                </div>);
    },
    componentDidMount: function () {
        console.log('componentDidMount ');
    },
    componentDidUpdate: function(prevProps, prevState){
        console.log('componentDidUpdate');
    },
    countMe: function () {
        this.setState({number: this.state.number + 1});
    }
});

var App = React.createClass({
    getInitialState: function () {
        return {
            name: "Test"
        };
    },
    render: function () {
        return (<div>
            <button onClick={this.changeProps}>Change props</button>
            <button onClick={this.unMount}>Unmount</button>
            <Component name={this.state.name} />
        </div>);
    },
    componentWillUnmount: function(){
        console.log('componentWillUnmount');
    },
    changeProps: function () {
        this.setState({name: "Test 1"});
    },
    unMount: function () {
        React.unmountComponentAtNode(document.getElementById("example"));
    }
});


React.render(<App />, document.getElementById("example"));