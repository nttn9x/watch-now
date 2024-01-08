import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Skeleton from "./skeleton.component";

describe("Skeleton Component", () => {
  it("Should render without crash", async () => {
    render(<Skeleton />);

    await screen.findByTestId("skeleton");

    expect(screen.getByTestId("skeleton")).toBeDefined();
  });
});
