import React from 'react';
import { IntlProvider } from 'react-intl';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import { ThemeProvider } from 'theme-ui'
import Dashboard from './components/Dashboard';
import { theme } from './theme';

export const App = () => {
  const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <IntlProvider locale="en" defaultLocale="en">
                    <ThemeProvider theme={theme}>
                        <Dashboard/>  
                    </ThemeProvider>
                </IntlProvider>
            ),
        },
    ]);
    return (
        <RouterProvider router={router} />
    );
}

export default App;
