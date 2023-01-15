import React from "react";
import { render } from "@testing-library/react";

import Checkboxes from "./index";

describe("Checkboxes component", () => {
    test("Renders correctly", () => {
        const { getByTestId } = render(
            <Checkboxes
                className="checkboxes--test"
                testId="checkboxes"
            />
        );

        const checkboxes = getByTestId("checkboxes");

        expect(checkboxes.textContent).toEqual("Checkboxes");
    });
});