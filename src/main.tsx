import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProfileProvider } from './context/ProfileContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </AuthProvider>
  </StrictMode>,
)
