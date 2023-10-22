// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'router';

global.render = render;
global.page = screen;

global.visit = (location = '/') => {
  history.pushState({}, '', location);
  const { container } = render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
  return { container, user: userEvent.setup() };
};
