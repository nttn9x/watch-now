import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NoMatch from "../../no-match";

describe("NoMatch Component", () => {
  it("Should render without crash", async () => {
    render(<NoMatch />);

    await screen.findByTestId("content");

    expect(screen.getByTestId("content")?.innerHTML).toEqual("NOT FOUND");
  });
});
