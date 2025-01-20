import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/drivers/$id/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/drivers/edit"!</div>
}
