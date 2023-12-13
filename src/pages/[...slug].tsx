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
  return <p>Dynamic Route from [...slug]: {JSON.stringify(router.query.slug)}</p>
}