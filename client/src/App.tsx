import { QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes } from 'react-router-dom'
import { queryClient } from '@/lib'
import { DashboardPage, HomePage, NotFoundPage } from '@/containers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
