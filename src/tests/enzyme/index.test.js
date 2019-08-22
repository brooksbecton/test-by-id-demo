//Setup
import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { LoginFormContainer } from "../../LoginFormContainer";

configure({ adapter: new Adapter() });

describe("Login Page", () => {
  it("renders", () => {
    mount(<LoginFormContainer />);
  });

  it("lets a user enter a username", () => {
    const wrapper = mount(<LoginFormContainer />);
    const testUsername = "DarkKnight34";

    wrapper.find(`[data-testid="login-username-input"]`).simulate("change", {
      target: { value: testUsername }
    });

    expect(
      wrapper.find(`[data-testid="login-username-input"]`).props().value
    ).toEqual(testUsername);
  });
  it("lets a user enter a password", () => {
    const wrapper = mount(<LoginFormContainer />);
    const testPassword = "SupermanSucks6789o";

    wrapper.find(`[data-testid="login-password-input"]`).simulate("change", {
      target: { value: testPassword }
    });

    expect(
      wrapper.find(`[data-testid="login-password-input"]`).props().value
    ).toEqual(testPassword);
  });
  it("password input is hidden", () => {
    const wrapper = mount(<LoginFormContainer />);
    const testPassword = "SupermanSucks6789o";

    expect(
      wrapper.find(`[data-testid="login-password-input"]`).props().type
    ).toEqual(`password`);
  });
  it("shows loading indicator when loading", () => {
    const wrapper = mount(<LoginFormContainer />);

    wrapper.find(`[data-testid="login-submit"]`).simulate("click");

    expect(
      // hostNodes() is needed here b/c Enzyme renders out parent
      // nodes even if they don't have any jsx???
      // https://github.com/airbnb/enzyme/issues/1253
      wrapper.find(`[data-testid="login-loading"]`).hostNodes().length
    ).toEqual(1);
  });
  it("shows success if user is logged in", () => {});
  it("shows error msg if there is one", () => {});
});
