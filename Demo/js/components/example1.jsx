

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
                        <HeaderComponent />
                        <BodyComponent />
                        <FooterComponent />
                    </div>);
        }
    });



React.render(<App />, document.getElementById("example"));