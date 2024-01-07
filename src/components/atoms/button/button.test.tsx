import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Button from "./button.component";

describe("Navigation Constant", () => {
  it("Should render without crash", async () => {
    const { findByTestId, getByTestId } = render(<Button />);

    await findByTestId("button");

    expect(getByTestId("button")).toBeDefined();
  });

  it("Should render with primary background", async () => {
    const { findByTestId, getByTestId } = render(<Button variant="primary" />);

    await findByTestId("button");

    expect(getByTestId("button").className).contain("bg-primary-500");
  });
});
