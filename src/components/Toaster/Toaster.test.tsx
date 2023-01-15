import React from "react";
import { render } from "@testing-library/react";

import Toaster from "./index";

describe("Toaster component", () => {
    test("Renders correctly", () => {
        const { getByTestId } = render(
            <Toaster
                className="toaster--test"
                testId="toaster"
            />
        );

        const toaster = getByTestId("toaster");

        expect(toaster.textContent).toEqual("Toaster");
  });
});