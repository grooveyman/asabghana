import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {  RouterProvider } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { router } from './routes/index.tsx'

const queryClient = new QueryClient();


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
        <App />
    </QueryClientProvider>

  </StrictMode>,
)
