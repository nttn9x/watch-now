import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "./app";

describe("App Component", () => {
  it("Should render without crash", async () => {
    render(<App />);
  });
});
