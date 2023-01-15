import React from "react";
import { render } from "@testing-library/react";

import Checkbox from "./index";

describe("Checkbox component", () => {
    test("Renders correctly", () => {
        let isSelected = false;

        const onChange = () => {
            isSelected = !isSelected;
        };

        const { getByTestId } = render(
            <Checkbox
                id="test-checkbox"
                name="test-checkbox"
                className="checkbox--test"
                isSelected={false}
                onChange={onChange}
                testId="checkbox"
            />
        );

        const checkbox = getByTestId("checkbox");

        expect(checkbox.textContent).toEqual("Checkbox");
    });
});