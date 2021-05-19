/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react'
import { Helmet } from 'react-helmet-async'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyle } from 'styles/global-styles'
import { useTranslation } from 'react-i18next'

import { HomePage } from './pages/HomePage/Loadable'
import { NotFoundPage } from './components/NotFoundPage/Loadable'
import { TopProgressBar } from './components'
import { BooksPage } from './pages/BooksPage'
import { ChatPage } from './pages/ChatPage'

/*
 * Create a query client
 */
const queryClient = new QueryClient()

export function App() {
  const { i18n } = useTranslation()
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
        <link rel="stylesheet" href="nprogress.css" />
      </Helmet>
      <TopProgressBar />
      {/* Provide the client to your App */}
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/books" component={BooksPage} />
          <Route exact path="/chat" component={ChatPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </QueryClientProvider>
      <GlobalStyle />
    </BrowserRouter>
  )
}
