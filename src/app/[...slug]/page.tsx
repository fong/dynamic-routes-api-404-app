import { GetStaticPaths, GetStaticProps } from 'next'

export const runtime = 'experimental-edge';

export const generateStaticParams = async () => {
    const paths = [
      {
        params: { slug: [] },
      },
      {
        params: { slug: ["home"] },
      },
      {
        params: { slug: ["home", "page"] },
      },
    ];

  return paths;
};

export const getProps: GetStaticProps = async ({ params }) => {
  return {props: { params }}
};

export default function Page({ params }: any) {
  return <div>
      <p>Platform: {process.env.NEXT_PUBLIC_CF_PAGES === "1" ? 'Cloudflare Pages' : 'Vercel'}</p>
      <p>Commit: {process.env.NEXT_PUBLIC_CF_PAGES_COMMIT_SHA || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA }</p>
      <p>Branch: {process.env.NEXT_PUBLIC_CF_PAGES_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}</p>
      <p>Dynamic Route from [...slug]: {JSON.stringify(params.slug)}</p>
    </div>
    
}