import { Component } from "react";
import HomePage from "./HomePage";
class CONDITIONAL_RENDERING extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const { isLoggedIn } = this.state;

    // rendering using if else
    // if (isLoggedIn) {
    //   return <HomePage />;
    // }else{
    //    return <LoginPage/>
    // }

    //rendering using element
    // let element;
    // element = isLoggedIn ? <HomePage /> : <LoginPage />;
    // return <div>{element}</div>;

    //rendering using ternary
    //return <div>{isLoggedIn ? <HomePage /> : <LoginPage />}</div>;

    return <div>{isLoggedIn && <HomePage />}</div>;
  }
}

export default CONDITIONAL_RENDERING;
