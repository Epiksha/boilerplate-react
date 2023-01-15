import React from "react";
import { render } from "@testing-library/react";

import Radios from "./index";

describe("Radios component", () => {
    test("Renders correctly", () => {
        const { getByTestId } = render(
            <Radios
                className="radios--test"
                testId="radios"
            />
        );

        const radios = getByTestId("radios");

        expect(radios.textContent).toEqual("Radios");
  });
});