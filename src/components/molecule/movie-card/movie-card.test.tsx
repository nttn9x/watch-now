import { movieFixture } from "@hello/__fixtures__/movie.fixture";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MovieCard from "./movie-card.component";

beforeEach(() => {
  import.meta.env.VITE_ENV === "test";
});

describe("MovieCard Component", () => {
  it("Should render without crash", async () => {
    const movie = movieFixture();
    render(<MovieCard movie={movie} />);

    await screen.findByTestId("movie-card");

    expect(screen.getByTestId("movie-card")).toBeDefined();
  });

  it("Should render right value", async () => {
    const movie = movieFixture();
    const { container } = render(<MovieCard movie={movie} />);

    await screen.findByTestId("movie-card");

    expect(container.querySelector("img")?.src).toEqual(
      `${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`
    );

    expect(container.querySelector("img")?.alt).toEqual(movie.original_title);
  });
});
