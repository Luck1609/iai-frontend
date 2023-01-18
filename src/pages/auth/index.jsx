import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AdminGuestLayout() {
  return (
    <main className="w-screen h-screen bg-drawing-board bg-cover grid place-items-end">
      <Outlet />
    </main>
  )
}
