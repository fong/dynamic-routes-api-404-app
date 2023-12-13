import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export const runtime = 'experimental-edge';

export const getStaticPaths: GetStaticPaths = async () => {
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

  return {
    paths: paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {props: { params }}
};

export default function Page() {
  const router = useRouter()
  return <div>
      <p>Platform: {process.env.NEXT_PUBLIC_CF_PAGES === "1" ? 'Cloudflare Pages' : 'Vercel'}</p>
      <p>Commit: {process.env.NEXT_PUBLIC_CF_PAGES_COMMIT_SHA || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA }</p>
      <p>Branch: {process.env.NEXT_PUBLIC_CF_PAGES_BRANCH || process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF}</p>
      <p>Dynamic Route from [...slug]: {JSON.stringify(router.query.slug)}</p>
    </div>
    
}