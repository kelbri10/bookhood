import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route,
  redirect
} from "react-router-dom"; 
import Login from "./components/Login"; 
import Home from './pages/Home';
import './index.css'
import CreateAccount from './components/CreateAccount';
import Books from './pages/Books';
import { AuthProvider } from './AuthContext';
import Settings from './pages/Settings';
import EditForm from './pages/EditForm';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="login" 
        element={<Login />} 
        />
        <Route path="sign-up" element={<CreateAccount />} />
        <Route path="library" element={<Books />} />
        <Route path="settings" element={<Settings />} />
        <Route path="edit-book" element={<EditForm />}>
          <Route 
            path=":id" 
            element={<EditForm />}
            />
        </Route>
      </Route>
    
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
