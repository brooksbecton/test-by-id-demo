import React from "react";
import { fireEvent, render, waitForElement } from "@testing-library/react";

import { LoginFormContainer } from "./../../LoginFormContainer";

describe("<LoginFormContainer/>", () => {
  it("renders", () => {
    render(<LoginFormContainer />);
  });
  it("lets a user enter a username", () => {
    const { getByTestId } = render(<LoginFormContainer />);
    const usernameInput = getByTestId("login-username-input");
    const testUsername = "DarkKnight34";

    //Type in username box
    fireEvent.change(usernameInput, {
      target: { value: testUsername }
    });

    // See if username input value equals what we typed in
    expect(usernameInput.value).toEqual(testUsername);
  });
  it("lets a user enter a password", () => {
    const { getByTestId } = render(<LoginFormContainer />);
    const passwordInput = getByTestId("login-password-input");
    const testPassword = "SupermanSucks6789o";

    //Type in password box
    fireEvent.change(passwordInput, {
      target: { value: testPassword }
    });

    // See if password input value equals what we typed in
    expect(passwordInput.value).toEqual(testPassword);
  });
  it("password input is hidden", () => {
    const { getByTestId } = render(<LoginFormContainer />);
    const passwordInput = getByTestId("login-password-input");

    expect(passwordInput.type).toEqual("password");
  });
  it("shows loading indicator when loading", async () => {
    const { getByTestId } = render(<LoginFormContainer />);

    fireEvent.click(getByTestId("login-submit"));
    
    await waitForElement(() => getByTestId("login-loading"));
  });
  it("shows success if user is logged in", () => {});
  it("shows error msg if there is one", () => {});
});
