import { setupServer } from "msw/node";

import { badCaseHandlers as movieHandlers } from "./movies.handler";

// This configures a Service Worker with the given request handlers.
export const server = setupServer(...movieHandlers);
