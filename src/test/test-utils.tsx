import { render, RenderOptions } from "@testing-library/react";
import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";

import { MemoryRouter, Routes } from "react-router";
import "../i18n";

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null,
});
window.IntersectionObserver = vi
  .fn()
  .mockImplementation(intersectionObserverMock);

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export function renderWithRouter(
  children: React.ReactNode,
  routes: string[] = []
) {
  return render(
    <MemoryRouter initialEntries={routes}>
      <Routes>{children}</Routes>
    </MemoryRouter>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { customRender as render };
