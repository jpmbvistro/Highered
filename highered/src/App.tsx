import React from 'react';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui'
import Dashboard from './components/Dashboard';
import { theme } from './theme';

export const App = () => {
  const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ThemeProvider theme={theme}>
                    <Dashboard/>  
                </ThemeProvider>
            ),
        },
    ]);
    return (
        <RouterProvider router={router} />
    );
}

export default App;
