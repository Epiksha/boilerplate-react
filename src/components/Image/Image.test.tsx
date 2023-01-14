import React from "react";
import { render, screen } from "@testing-library/react";

import Image from "./index";

describe("Image component", () => {
    let imageElement: Element;

    beforeEach(() => {
        render(<Image src="react.png" />);

        imageElement = screen.getByTestId("image");
    });

    it("Mounts properly", () => {
        expect(imageElement).toBeInTheDocument();
    });
});
