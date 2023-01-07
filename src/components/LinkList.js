import Link from "./Link";
import { useQuery, gql } from "@apollo/client";

const FEED_QUERY = gql`
  {
    feed {
      id
      links {
        id
        createdAt
        url
        description
      }
    }
  }
`;
const LinkList = () => {
  const { data, loading, error } = useQuery(FEED_QUERY);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      {data && (
        <>
          {data.feed.links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};
export default LinkList;

const linksToRender = [
  {
    id: "link-id-1",
    description: "Prisma gives you a powerful database toolkit 😎",
    url: "https://prisma.io",
  },
  {
    id: "link-id-2",
    description: "The best GraphQL client",
    url: "https://www.apollographql.com/docs/react/",
  },
];
