/** @jsx React.DOM */

var React = require('react');

var Index = React.createClass({
  render: function () {
    return (
      <div className="index">
        <header>Header</header>
      </div>
    );
  }
});
React.renderComponent(
    <Index /> , document.querySelector('.appl'));
