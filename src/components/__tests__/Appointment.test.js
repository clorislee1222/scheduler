/*
  We are rendering `<Appointment />` down below, so we need React.createElement
*/
import React from "react";

/*
  We import our helper functions from the react-testing-library
  The render function allows us to render Components
*/
import { render } from "@testing-library/react";

/*
  We import the component that we are testing
*/
import Appointment from "components/Appointment";

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

  // To skip a test, use xit or test.skip:
  xit("does something it is supposed to do", () => {
    // ...
  });

  // or if using test
  test.skip("does something it is supposed to do", () => {
    // ...
  });
});