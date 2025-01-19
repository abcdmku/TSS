import { Login } from '@hoqs-features'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_content/login')({
  component: Login,
})

