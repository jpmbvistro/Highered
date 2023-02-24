import React from 'react';

import { IntlProvider } from 'react-intl';
import { createBrowserRouter, createMemoryRouter, RouterProvider, RouterProviderProps} from 'react-router-dom';
import { ThemeProvider, Theme  } from 'theme-ui'
import { theme } from '../theme';

type childrenProps = {
    children: React.ReactNode;
}

type routerWrapperProps = {
    router?: RouterProviderProps['router']
}

type intlWrapperProps = {
    locale?: string;
    defaultLocale?: string;
}

type themeWrapperProps = {
    theme?: Theme;
}

type wrapProvidersOptionalParams = routerWrapperProps & intlWrapperProps & themeWrapperProps


/**
 * Helper function to wrap a default react-router RouterProvider around * a component.
 * Use for tests and storybook
 */
export const wrapDefaultRouterProvider: React.FC<routerWrapperProps & childrenProps> = ({children, router}) => 
    <RouterProvider router={ router ||
        createMemoryRouter(
            [{
                path: "/",
                element: (children),
                loader: () => null,
            }],
            {
                initialEntries: ["/"],
                initialIndex: 1,
            }
        )
    }/>

/**
 * Helper function to wrap a default english localed IntlProvider around 
 * a component.
 * Use for tests and storybook.
 */
export const wrapDefaultIntlProvider:React.FC<intlWrapperProps & childrenProps> = ({children, locale='en', defaultLocale='en'}) => 
    <IntlProvider locale={locale} defaultLocale={defaultLocale}>
        {children}
    </IntlProvider>

/**
 * Helper function to wrap a default theme-ui ThemeProvider using the  
 * Highered theme around a component.
 * Use for tests and storybook.
 */
export const wrapDefaultThemeProvider: React.FC<themeWrapperProps & childrenProps> = ({children}) => <ThemeProvider theme={theme} >
    {children}
</ThemeProvider>

/**
 * Helper function to wrap providers around a component.
 * Use for for tests or for storybook stories.
 * 
 * @param {React.ReactNode} component - component to wrap
 * @param {Object} [options] - optional modifications to router, theme, locale, or defaultLocale
 * @param {RouterProviderProps['router']} [options.router] - Optional override for router passed to RouterProvider
 * @param {Theme} [options.theme] - Optional override for theme passed to ThemeProvider
 * @param {string} [options.locale] - Optional override for locale passed to IntlProvider
 * @param {string} [options.defaultLocale] - Optional override for defaultLocale passed to IntlProvider
 */
export const wrapProviders= (component: React.ReactNode, options?: wrapProvidersOptionalParams) => {
    const {router, theme, locale, defaultLocale} = options || {}
    if(component === undefined || component === null) {
        return component
    }
    return wrapDefaultRouterProvider({
        children: wrapDefaultIntlProvider({
            children: wrapDefaultThemeProvider({
                children: component, 
                theme
            }), 
            locale, 
            defaultLocale
        }), 
        router
    })
}

wrapProviders(<div/>)