import React from "react";

class Contact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  sayHi() {
    console.log("Hi there.");
  }

  render() {
    return (
      <>
        <div className="flex flex-col min-h-screen">
          <div className="text-center m-auto text-xl">
            Hello World {this.state.firstName}.
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
