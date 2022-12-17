import React from 'react'
import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ user, children }) => {
    if (Object.entries(user).length === 0 ) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };