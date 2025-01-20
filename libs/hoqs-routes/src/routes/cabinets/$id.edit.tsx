import { EditCabinet } from '@hoqs-features'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/cabinets/$id/edit')({
  component: EditCabinet,
})
