import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Image from "./image.component";

describe("Image Component", () => {
  it("Should render without crash", async () => {
    render(<Image />);

    await screen.findByTestId("image");

    expect(screen.getByTestId("image")).toBeDefined();
  });

  it("Should show alt when src is empty", async () => {
    const sampleText = "This is an avatar";
    render(<Image alt={sampleText} />);

    await screen.findByTestId("image");

    expect(screen.getByAltText(sampleText)).toBeDefined();
  });
});
