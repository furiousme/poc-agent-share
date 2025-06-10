import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agent Details',
  description: 'View agent details'
}

export default async function AgentPage({
  params,
}) {
  const { id } = await params;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Agent Details</h1>
      <p>Agent ID: {id}</p>
    </main>
  )
}
