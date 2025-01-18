import { QueryClient } from '@tanstack/react-query'
import { createRootRoute, Navigate, Outlet, redirect } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useState } from 'react'

export const Route = createRootRoute<{queryClient: QueryClient}>({
  component: Outlet,
  notFoundComponent: () => <Navigate to='/'/>,
})

const TanStackDevtools = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TanStackRouterDevtools containerElement="div" position='bottom-right'/>
      { /* <div className="position-fixed bottom-0 w-100">
      {open ? (<>
        <div className="ms-auto me-2 text-center rounded-top-2" style={{background: "#191c24", width: "22px", height: "15px", cursor: "pointer"}} onClick={() => setOpen(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none" viewBox="0 0 10 6" color="#ccc" className="mb-2"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" d="M1 1l4 4 4-4"></path></svg>
        </div>
        <ReactQueryDevtoolsPanel/>
        </>
      ) : (
        <div className="m-2 mb-7 px-5 rounded-2 fs-8 fw-bold" style={{background: "#191c24", width: "152px", height: "30px", cursor: "pointer"}} onClick={() => setOpen(true)}>
          <div 
            className="m-auto pt-1"
            style={{WebkitTextFillColor: "transparent", background: "linear-gradient(to right, #98f30c, #00f4a3)", WebkitBackgroundClip: "text", backgroundClip: "text", }}
          >
            TanStack Query
          </div>
        </div>
      )}
      </div> */}
    </>
  );

}
