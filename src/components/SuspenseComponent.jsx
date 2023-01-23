import React, { Suspense } from "react";
import AppLoading from "./AppLoading";

export default function SuspenseComponent({ Component }) {
  return (
    <Suspense fallback={<AppLoading />}>
      <Component />
    </Suspense>
  )
}