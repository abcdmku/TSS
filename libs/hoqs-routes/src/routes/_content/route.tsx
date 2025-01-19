import { Navbar } from '@hoqs-features'
import { MainContent } from '@hoqs/core-components'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_content')({
  component: () => {return <><Navbar/><MainContent/></>},
})

