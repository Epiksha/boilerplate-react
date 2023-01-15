import React from "react";
import { render } from "@testing-library/react";

import Chips from "./index";

describe("Chips component", () => {
    test("Renders correctly", () => {
        const { getByTestId } = render(
            <Chips
                className="chips--test"
                testId="chips"
            />
        );

        const chips = getByTestId("chips");

        expect(chips.textContent).toEqual("Chips");
  });
});