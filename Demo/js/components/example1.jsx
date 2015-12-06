var MyComponent = React.createClass({
    render: function () {
        return (<div>
           
                <a href="#" class="normal">abc</a>&nbsp;&nbsp;&nbsp;
                <a href="#">abc</a>&nbsp;&nbsp;&nbsp;
                <a href="#">abc</a>&nbsp;&nbsp;&nbsp;
                <a href="#">abc</a>&nbsp;&nbsp;&nbsp;
                <a href="#">abc</a>&nbsp;&nbsp;&nbsp;
                <a href="#">abc</a>&nbsp;&nbsp;&nbsp;

                <a href="#" class="showmore">abc</a>&nbsp;&nbsp;&nbsp;
    <a href="#" class="showmore">abc</a>&nbsp;&nbsp;&nbsp;
    <a href="#" class="showmore">abc</a>&nbsp;&nbsp;&nbsp;
    <a href="#" class="showmore">abc</a>&nbsp;&nbsp;&nbsp;

    <a href="#" class="showmore">abc</a>&nbsp;&nbsp;&nbsp;
    <a href="#" class="showmore">abc</a>&nbsp;&nbsp;&nbsp;
    <a href="#" class="showmore">abc</a>&nbsp;&nbsp;&nbsp;
                <a href="#" clas>abc</a>&nbsp;&nbsp;&nbsp;
                
            </div>);
    }
});

ReactDOM.render(<MyComponent />, document.getElementById("example"));