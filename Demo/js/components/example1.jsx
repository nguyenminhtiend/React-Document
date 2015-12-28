
var Input = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
    },
    render: function () {
        return (<div>This is {this.props.name}</div>);
    }
});

var HeaderComponent = React.createClass({
    render: function () {
        console.log('Header render');
        return (<div>This is header</div>);
    }
});

var BodyComponent = React.createClass({
    render: function () {
        console.log('Body render');
        return (<div>This is body</div>);
    }
});

var FooterComponent = React.createClass({
    render: function () {
        console.log('Footer render');
        return (<div>This is footer</div>);
    }
});

    var App = React.createClass({
        render: function () {
            return (<div>
                        <Input />
                        <HeaderComponent />
                        <BodyComponent />
                        <FooterComponent />
                    </div>);
        }
    });



React.render(<Input />, document.getElementById("example"));          