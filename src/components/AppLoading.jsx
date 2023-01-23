import React from 'react'
import { Loading } from './Btn'

export default function AppLoading() {
  return (
    <div className="fixed z-50 left-0 top-0 w-full h-full bg-white flex items-center justify-center">
      <div className="flex items-center">
        <Loading /> Loading, please wait...
      </div>
    </div>
  )
}
