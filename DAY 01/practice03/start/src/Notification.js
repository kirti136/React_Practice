// Component class is needed when you have to create a class component and react needs to be in the scope of files when they have components using JSX in their render method
import React, { Component } from "react";

const NotificationText = ({ text }) => {
  return <div className="notification-text">{text || "No Notifications"}</div>;
};

class Notification extends Component {
  state = {
    show: true,
  };

  toggleDisplay = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  // Render method allow you to define a jsx template which generate react elements when a component renders
  render() {
    return (
      <div className="notification-widget">
        <div className="toggle-btn" onClick={this.toggleDisplay}>
          N
        </div>
        {this.state.show ? <NotificationText text={this.props.text} /> : null}
      </div>
    );
  }
}

export default Notification;
