import { http, HttpResponse } from "msw";
import { topRatedMovies } from "./movies.handler";

export const topRatedMovie = topRatedMovies.results[0];

export const credits = {
  id: 278,
  cast: [
    {
      adult: false,
      gender: 2,
      id: 504,
      known_for_department: "Acting",
      name: "Tim Robbins",
      original_name: "Tim Robbins",
      popularity: 48.535,
      profile_path: "/A4fHNLX73EQs78f2G6ObfKZnvp4.jpg",
      cast_id: 3,
      character: "Andy Dufresne",
      credit_id: "52fe4231c3a36847f800b131",
      order: 0,
    },
    {
      adult: false,
      gender: 2,
      id: 192,
      known_for_department: "Acting",
      name: "Morgan Freeman",
      original_name: "Morgan Freeman",
      popularity: 119.671,
      profile_path: "/jPsLqiYGSofU4s6BjrxnefMfabb.jpg",
      cast_id: 4,
      character: "Ellis Boyd 'Red' Redding",
      credit_id: "52fe4231c3a36847f800b135",
      order: 1,
    },
    {
      adult: false,
      gender: 2,
      id: 4029,
      known_for_department: "Acting",
      name: "Bob Gunton",
      original_name: "Bob Gunton",
      popularity: 25.777,
      profile_path: "/rr2KDCKK4t0f5YhZibCpLCAsJxc.jpg",
      cast_id: 5,
      character: "Warden Norton",
      credit_id: "52fe4231c3a36847f800b139",
      order: 2,
    },
  ],
};

export const happyCaseHandlers = [
  http.get(`/movie/${topRatedMovie.id}`, () => {
    // Response resolver allows you to react to captured requests,
    // respond with mock responses or passthrough requests entirely.
    // For now, let's just print a message to the console.
    return HttpResponse.json(topRatedMovie);
  }),
  http.get(`/movie/${topRatedMovie.id}/credits`, () => {
    // Response resolver allows you to react to captured requests,
    // respond with mock responses or passthrough requests entirely.
    // For now, let's just print a message to the console.
    return HttpResponse.json(credits);
  }),
];
