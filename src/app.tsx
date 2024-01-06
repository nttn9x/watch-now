import React, { useEffect, useState } from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { Layout } from "@hello/layout";
import { Movie, Movies, Series, NoMatch } from "@hello/pages";
import { APP_URLS } from "@hello/constants/navigation.constant";

import { initConfiguration } from "./utils";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initConfiguration();

    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return;
  }

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
          <Route path={APP_URLS.Movie} element={<Movies />} />
          <Route path={APP_URLS.Series} element={<Series />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
