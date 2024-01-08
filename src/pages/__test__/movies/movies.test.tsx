import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@hello/test/test-utils";
import { server as happyServer } from "@hello/__mocks__/server-happy-case";
import { server as badServer } from "@hello/__mocks__/server-bad-case";
import Movies from "../../movies";
import { MovieType } from "@hello/pages/movies/movies.constant";
import {
  nowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upComingMovies,
} from "@hello/__mocks__/movies.handler";

beforeEach(() => {
  import.meta.env.VITE_ENV === "test";
});

describe("Movies - Happy Case", () => {
  // Start server before all tests
  beforeAll(() => happyServer.listen({ onUnhandledRequest: "error" }));

  it("Should render without crash", async () => {
    render(<Movies />);

    await screen.findByTestId("movie-list");

    expect(screen.getByTestId("movie-list")).toBeDefined();
  });

  it("Top Rated should render right number of movies", async () => {
    render(<Movies />);

    await screen.findByTestId(MovieType.TopRated);

    expect(
      screen
        .getByTestId(MovieType.TopRated)
        .querySelectorAll("[data-testid='movie-card']").length
    ).toBe(topRatedMovies.results.length);

    const image = screen
      .getByTestId(MovieType.TopRated)
      ?.querySelectorAll("[data-testid='image']")?.[0] as HTMLImageElement;
    expect(image.src).toBe(
      import.meta.env.VITE_IMAGE_URL + topRatedMovies.results[0].poster_path
    );
  });

  it("Now Playing should render right number of movies", async () => {
    render(<Movies />);

    await screen.findByTestId(MovieType.NowPlaying);

    expect(
      screen
        .getByTestId(MovieType.NowPlaying)
        .querySelectorAll("[data-testid='movie-card']").length
    ).toBe(nowPlayingMovies.results.length);

    const image = screen
      .getByTestId(MovieType.NowPlaying)
      ?.querySelectorAll("[data-testid='image']")?.[0] as HTMLImageElement;
    expect(image.src).toBe(
      import.meta.env.VITE_IMAGE_URL + nowPlayingMovies.results[0].poster_path
    );
  });

  it("Upcoming should render right number of movies", async () => {
    render(<Movies />);

    await screen.findByTestId(MovieType.UpComing);

    expect(
      screen
        .getByTestId(MovieType.UpComing)
        .querySelectorAll("[data-testid='movie-card']").length
    ).toBe(upComingMovies.results.length);

    const image = screen
      .getByTestId(MovieType.UpComing)
      ?.querySelectorAll("[data-testid='image']")?.[0] as HTMLImageElement;
    expect(image.src).toBe(
      import.meta.env.VITE_IMAGE_URL + upComingMovies.results[0].poster_path
    );
  });

  it("Popular should render right number of movies", async () => {
    render(<Movies />);

    await screen.findByTestId(MovieType.Popular);

    expect(
      screen
        .getByTestId(MovieType.Popular)
        .querySelectorAll("[data-testid='movie-card']").length
    ).toBe(popularMovies.results.length);

    const image = screen
      .getByTestId(MovieType.Popular)
      ?.querySelectorAll("[data-testid='image']")?.[0] as HTMLImageElement;
    expect(image.src).toBe(
      import.meta.env.VITE_IMAGE_URL + popularMovies.results[0].poster_path
    );
  });

  it("Top Rated should render right number of movies", async () => {
    render(<Movies />);

    await screen.findByTestId(`link-${topRatedMovies.results[0].id}`);

    const link = screen.getByTestId(`link-${topRatedMovies.results[0].id}`);
    expect(link).toBeDefined();
    fireEvent.click(link);

    waitFor(() => {
      expect(screen.getByTestId("movie-dialog")).toBeDefined();
    });
  });

  //  Close server after all tests
  afterAll(() => happyServer.close());

  // Reset handlers after each test `important for test isolation`
  afterEach(() => happyServer.resetHandlers());
});

describe("Movies - Bad Case", () => {
  // Start server before all tests
  beforeAll(() => badServer.listen({ onUnhandledRequest: "error" }));

  it("Should render without crash", async () => {
    render(<Movies />);

    await screen.findByTestId("movie-list");

    expect(screen.getByTestId("movie-list")).toBeDefined();
  });

  it("Top Rated should be empty", async () => {
    render(<Movies />);

    await screen.findByTestId(MovieType.TopRated);

    expect(
      screen
        .getByTestId(MovieType.TopRated)
        .querySelectorAll("[data-testid='movie-card']").length
    ).toBe(0);
  });

  it("Now Playing should be empty", async () => {
    render(<Movies />);

    await screen.findByTestId(MovieType.NowPlaying);

    expect(
      screen
        .getByTestId(MovieType.NowPlaying)
        .querySelectorAll("[data-testid='movie-card']").length
    ).toBe(0);
  });

  it("Upcoming should be empty", async () => {
    render(<Movies />);

    await screen.findByTestId(MovieType.UpComing);

    expect(
      screen
        .getByTestId(MovieType.UpComing)
        .querySelectorAll("[data-testid='movie-card']").length
    ).toBe(0);
  });

  it("Popular should be empty", async () => {
    render(<Movies />);

    await screen.findByTestId(MovieType.Popular);

    expect(
      screen
        .getByTestId(MovieType.Popular)
        .querySelectorAll("[data-testid='movie-card']").length
    ).toBe(0);
  });
  //  Close server after all tests
  afterAll(() => badServer.close());

  // Reset handlers after each test `important for test isolation`
  afterEach(() => badServer.resetHandlers());
});
