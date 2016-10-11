var He = React.createClass({
  render: function() {
      return <div>Hello {this.props.name}</div>;
}
});

ReactDOM.render(
  <He name="World" />,
  document.getElementById('container')
);
