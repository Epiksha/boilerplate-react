import React from "react";
import { render } from "@testing-library/react";

import DateInput from "./index";

describe("DateInput component", () => {
    test("Renders correctly", () => {
        const { getByTestId } = render(
            <DateInput
                className="date-input--test"
                testId="date-input"
            />
        );

        const dateInput = getByTestId("date-input");

        expect(dateInput.textContent).toEqual("DateInput");
  });
});