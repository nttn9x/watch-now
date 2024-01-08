import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Series from "../../series";

describe("Series Component", () => {
  it("Should render without crash", async () => {
    render(<Series />);

    await screen.findByTestId("content");

    expect(screen.getByTestId("content")?.innerHTML).toEqual(
      "This is Series Page"
    );
  });
});
