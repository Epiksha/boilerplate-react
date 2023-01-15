import React from "react";
import { render } from "@testing-library/react";

import Swatch from "./index";

describe("Swatch component", () => {
    test("Renders correctly", () => {
        const { getByTestId } = render(
            <Swatch
                className="swatch--test"
                testId="swatch"
            />
        );

        const swatch = getByTestId("swatch");

        expect(swatch.textContent).toEqual("Swatch");
  });
});