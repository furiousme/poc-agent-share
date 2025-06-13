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
  //   openGraph: {
  //     title: 'Agent Share',
  //     description: `1,2,3 - Sold!
  // תנו למקצוענים לעשות את העבודה ותוכלו לסגור עסקה זריזה בה כל הצדדים מרוצים!
  //  פרטים ונכסים נוספים בעמוד המתווך במדלן >>`,
  //     images: [{
  //       url: banner,
  //       width: 700,
  //       height: 867,
  //       alt: 'Agent Share Preview'
  //     }]
  //   },
    twitter: {
      card: 'summary_large_image',
      title: 'Agent Share',
      description: `1,2,3 - Sold!
  תנו למקצוענים לעשות את העבודה ותוכלו לסגור עסקה זריזה בה כל הצדדים מרוצים!
   פרטים ונכסים נוספים בעמוד המתווך במדלן >>`,
      images: [banner]
    },
    openGraph: {
      title: 'Agent Share Title',
      description: `1,2,3 - Sold!
תנו למקצוענים לעשות את העבודה ותוכלו לסגור עסקה זריזה בה כל הצדדים מרוצים!
פרטים ונכסים נוספים בעמוד המתווך במדלן >>`,
      url: 'madlan.co.il',
      siteName: 'Madlan',
      images: [
        {
          url: banner, // Must be an absolute URL
          width: 500,
          height: 667,
        },
      ],
      type: 'website',
    },
  }
  
}

export default async function AgentSharePage({
  params,
}: Props) {
  const { id } = await params;
 
  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Agent Share</h1>
        <p>Agent ID: {id}</p>
      </main>
    </>
  )
}
