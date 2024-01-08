import { setupServer } from "msw/node";

import { happyCaseHandlers as moviesHappyCaseHandlers } from "./movies.handler";
import { happyCaseHandlers as movieHappyCaseHandlers } from "./movie.handler";

// This configures a Service Worker with the given request handlers.
export const server = setupServer(
  ...moviesHappyCaseHandlers,
  ...movieHappyCaseHandlers
);
