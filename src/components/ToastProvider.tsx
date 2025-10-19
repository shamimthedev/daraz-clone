// components/ToastProvider.tsx
'use client';
import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        duration: 3000,
        style: {
          background: '#fff',
          color: '#333',
          borderRadius: '2px',
          padding: '16px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
        success: {
          iconTheme: {
            primary: '#f57224',
            secondary: '#fff',
          },
        },
      }}
    />
  );
}