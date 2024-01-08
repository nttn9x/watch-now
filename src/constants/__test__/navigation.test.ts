import { APP_URLS } from "../navigation.constant";
import { describe, it, expect } from "vitest";

describe("Navigation Constant", () => {
  it("Should have three items with right value", () => {
    expect(APP_URLS.Movie).toEqual("/movies/:id?");
    expect(APP_URLS.Movies).toEqual("/movies");
    expect(APP_URLS.Series).toEqual("/series");
  });
});
