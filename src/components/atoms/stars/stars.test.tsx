import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Stars from "./stars.component";

describe("Stars Component", () => {
  it("Should render without crash", async () => {
    render(<Stars />);
  });

  it("Should display right number of stars", async () => {
    render(<Stars count={6} />);
    waitFor(() => {
      expect(screen.queryAllByText("★").length).toBe(6);
    });

    render(<Stars count={3} />);
    waitFor(() => {
      expect(screen.queryAllByText("★").length).toBe(3);
    });
  });
});
