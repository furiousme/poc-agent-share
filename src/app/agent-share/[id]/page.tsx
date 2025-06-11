import { Metadata } from 'next'

type Props = {
  params: Promise<any>
  searchParams: Promise<any>
}

export async function generateMetadata(
  { searchParams }: Props,
): Promise<Metadata> {
  const { banner } = await searchParams;
 
  return {
    title: 'Agent Share',
    description: `1,2,3 - Sold!
  תנו למקצוענים לעשות את העבודה ותוכלו לסגור עסקה זריזה בה כל הצדדים מרוצים!
   פרטים ונכסים נוספים בעמוד המתווך במדלן >>`,
    openGraph: {
      title: 'Agent Share',
      description: `1,2,3 - Sold!
  תנו למקצוענים לעשות את העבודה ותוכלו לסגור עסקה זריזה בה כל הצדדים מרוצים!
   פרטים ונכסים נוספים בעמוד המתווך במדלן >>`,
      images: [{
        url: banner,
        width: 1200,
        height: 500,
        alt: 'Agent Share Preview'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Agent Share',
      description: 'Share your agent with others',
      images: [banner]
    }
  }
}

export default async function AgentSharePage({
  params,
}: Props) {
  const { id } = await params;
 
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Agent Share</h1>
      <p>Agent ID: {id}</p>
    </main>
  )
}
