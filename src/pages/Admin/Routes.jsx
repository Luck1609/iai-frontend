import AdminLayout from '@layouts/AdminLayout'
import AdminGuestLayout from '@pages/auth'
import ForgotPassword from '@pages/auth/ForgotPassword'
import Login from '@pages/auth/Login'
import ResetPassword from '@pages/auth/ResetPassword'
import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Admins from './Admins'
import Applications from './Applications'
import Approved from './Approved'
import Dashboard from './Dashboard'
import Management from './Management'
import News from './News'
import Payments from './Payments'
import Settings from './Settings'
import Updates from './Updates'
import Users from './Users'

export default function AdminRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AdminGuestLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/approvals" element={<Approved />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/management" element={<Management />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/news" element={<News />} />
          <Route path="/users" element={<Users />} />
          <Route path="/admins" element={<Admins />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
