import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ModalState } from './context/ModalContext'
import { BrowserRouter } from 'react-router-dom'
import { TRPCProvider } from "./lib/trpc"
import { QueryClient, QueryClientProvider } from 'react-query';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <TRPCProvider>
      <BrowserRouter>
        <ModalState>
          <App />
        </ModalState>
      </BrowserRouter>
    </TRPCProvider>
  </QueryClientProvider>
);
