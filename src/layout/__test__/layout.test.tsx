import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { Layout } from "../index";

beforeEach(() => {
  import.meta.env.VITE_ENV === "test";
});

describe("Layout Component", () => {
  it("Should render without crash", async () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    await screen.findByTestId("header");
    await screen.findByTestId("body");
    await screen.findByTestId("footer");

    expect(screen.getByTestId("header")).toBeDefined();
    expect(screen.getByTestId("body")).toBeDefined();
    expect(screen.getByTestId("footer")).toBeDefined();
  });

  it("Header should have logo, nav", async () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    await screen.findByTestId("logo");
    await screen.findByTestId("nav");

    expect(screen.getByTestId("logo")).toBeDefined();
    expect(screen.getByTestId("nav")).toBeDefined();
  });

  it("Footer should display right profile link", async () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    await screen.findByTestId("profile-link");

    expect(
      (screen.getByTestId("profile-link") as HTMLAnchorElement)?.href
    ).toEqual(import.meta.env.VITE_PROFILE_URL);
  });
});
