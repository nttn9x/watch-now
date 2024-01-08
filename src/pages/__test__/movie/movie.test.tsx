import { Route } from "react-router";
import { describe, expect, it } from "vitest";
import { server as happyServer } from "@hello/__mocks__/server-happy-case";
import { renderWithRouter, screen, waitFor } from "@hello/test/test-utils";
import "@testing-library/jest-dom";
import Movie from "../../movie";
import { credits, topRatedMovie } from "@hello/__mocks__/movie.handler";

beforeEach(() => {
  import.meta.env.VITE_ENV === "test";
});

describe("Movies - Happy Case", () => {
  // Start server before all tests
  beforeAll(() => happyServer.listen({ onUnhandledRequest: "error" }));

  it("Should render without crash", async () => {
    renderWithRouter(<Route path="/movies/:id" element={<Movie />} />, [
      `/movies/${topRatedMovie.id}`,
    ]);

    await screen.findByTestId("movie-dialog");

    expect(screen.getByTestId("movie-dialog")).toBeDefined();
  });

  it("Should render banner", async () => {
    renderWithRouter(<Route path="/movies/:id" element={<Movie />} />, [
      `/movies/${topRatedMovie.id}`,
    ]);

    await screen.findByTestId("banner");

    expect((screen.getByTestId("banner") as HTMLImageElement).src).toEqual(
      import.meta.env.VITE_IMAGE_URL + topRatedMovie.backdrop_path
    );
  });

  it("Should render right number of series cast", async () => {
    const { container } = renderWithRouter(
      <Route path="/movies/:id" element={<Movie />} />,
      [`/movies/${topRatedMovie.id}`]
    );

    await screen.findByTestId("information");

    expect(
      container.querySelectorAll("[data-testid='cast-item']")
    ).toHaveLength(credits.cast.length);
  });

  it("Should render right number of company", async () => {
    const { container } = renderWithRouter(
      <Route path="/movies/:id" element={<Movie />} />,
      [`/movies/${topRatedMovie.id}`]
    );

    await screen.findByTestId("information");

    expect(
      container.querySelectorAll("[data-testid='company-name']")
    ).toHaveLength(topRatedMovie?.production_companies!.length);
  });

  it("Should render right number of country", async () => {
    const { container } = renderWithRouter(
      <Route path="/movies/:id" element={<Movie />} />,
      [`/movies/${topRatedMovie.id}`]
    );

    await screen.findByTestId("information");

    expect(
      container.querySelectorAll("[data-testid='country-name']")
    ).toHaveLength(topRatedMovie.production_countries!.length);
  });

  it("Should render right number of keyword", async () => {
    const { container } = renderWithRouter(
      <Route path="/movies/:id" element={<Movie />} />,
      [`/movies/${topRatedMovie.id}`]
    );

    await screen.findByTestId("information");

    expect(
      container.querySelectorAll("[data-testid='genre-name']")
    ).toHaveLength(topRatedMovie.genres!.length);
  });
});
