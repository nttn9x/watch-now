import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "@hello/layout";
import { Movie, Movies, Series, NoMatch } from "@hello/pages";
import { APP_URLS } from "@hello/constants/navigation.constant";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<>Loading</>}>
              <Layout />
            </React.Suspense>
          }
        >
          <Route index element={<Navigate to="/movies" replace />} />
          <Route path={APP_URLS.Movies} element={<Movies />} />
          <Route path={APP_URLS.Movie} element={<Movie />} />
          <Route path={APP_URLS.Series} element={<Series />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
