import type { Meta, StoryObj } from "@storybook/react";
import { popularMovies } from "@hello/__mocks__/movies.handler";

import { MovieCard } from "@hello/components/molecule";
import { Movie } from "@hello/models/movie.model";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Molecule/MovieCard",
  component: MovieCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof MovieCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const movie = popularMovies.results[0] as Movie;

export const Default: Story = {
  args: {
    movie,
  },
};

const movieHasEmptyImage = { ...movie, poster_path: null } as Movie;
export const EmptyImage: Story = {
  args: {
    movie: movieHasEmptyImage,
  },
};
