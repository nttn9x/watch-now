import "@testing-library/jest-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Dialog from "./dialog.component";

describe("Dialog Component", () => {
  it("Should render without crash", async () => {
    render(<Dialog visible onClose={() => {}} />);

    await screen.findByTestId("dialog");

    expect(screen.getByTestId("dialog")).toBeDefined();
  });

  it("Should not render while visible is false", async () => {
    render(<Dialog visible={false} onClose={() => {}} />);

    await waitFor(() => {
      expect(screen.queryByTestId("dialog")).toBeNull();
    });
  });

  it("should be able to click close button", async () => {
    const onClose = vi.fn();

    render(<Dialog visible onClose={onClose} />);

    await screen.findByTestId("close-button");

    fireEvent.click(screen.getByTestId("close-button"));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
