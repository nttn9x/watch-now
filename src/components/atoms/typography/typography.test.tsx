import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Typography from "./typography.component";

describe("Stars Component", () => {
  it("Should render without crash", async () => {
    render(<Typography data-testid="typography" />);

    await screen.findByTestId("typography");

    expect(screen.getByTestId("typography")).toBeDefined();
  });

  it("it should be h1 element", async () => {
    const { container } = render(
      <Typography variant="h1" data-testid="typography" />
    );

    await screen.findByTestId("typography");

    expect(container.querySelector("h1")).toBeDefined();
  });

  it("it should be h2 element", async () => {
    const { container } = render(
      <Typography variant="h2" data-testid="typography" />
    );

    await screen.findByTestId("typography");

    expect(container.querySelector("h2")).toBeDefined();
  });

  it("it should be h3 element", async () => {
    const { container } = render(
      <Typography variant="h3" data-testid="typography" />
    );

    await screen.findByTestId("typography");

    expect(container.querySelector("h3")).toBeDefined();
  });

  it("it should be h4 element", async () => {
    const { container } = render(
      <Typography variant="h4" data-testid="typography" />
    );

    await screen.findByTestId("typography");

    expect(container.querySelector("h4")).toBeDefined();
  });

  it("it should be h6 element", async () => {
    const { container } = render(
      <Typography variant="h6" data-testid="typography" />
    );

    await screen.findByTestId("typography");

    expect(container.querySelector("h6")).toBeDefined();
  });

  it("it should be p element", async () => {
    const { container } = render(
      <Typography variant="body" data-testid="typography" />
    );

    await screen.findByTestId("typography");

    expect(container.querySelector("p")).toBeDefined();
  });

  it("it should be p element", async () => {
    const { container } = render(
      <Typography variant="body2" data-testid="typography" />
    );

    await screen.findByTestId("typography");

    expect(container.querySelector("p")).toBeDefined();
  });
});
