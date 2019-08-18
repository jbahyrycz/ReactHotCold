import React from "react";
import { shallow, mount } from "enzyme";

import UserInput from "./UserInput";

describe("<UserInput />", () => {
  it("Renders without crashing", () => {
    shallow(<UserInput />);
  });

  it("Should fire the enterInput callback when the form is submitted", () => {
    const callback = jest.fn();
    const wrapper = mount(<UserInput enterInput={callback} />);
    const value1 = { inputs: NaN };
    wrapper.update();
    wrapper.find('input[type="number"]').instance().value = value1;
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalledWith(value1);
  });

  it("Should not fire enterInput if the input is empty", () => {
    const callback = jest.fn();
    const wrapper = mount(<UserInput enterInput={callback} />);
    const value1 = { inputs: NaN };
    wrapper.simulate("submit");
    expect(callback).toHaveBeenCalledWith(value1);
  });
});
