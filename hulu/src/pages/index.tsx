import requests from "../utils/requests";
import Body from "../layout/Body";
import Header from "../layout/Header";
import NavBar from "../layout/NavBar";
import { Props } from "../interface/result";
const Home = ({ results }: Props) => {
  return (
    <div>
      <Header />
      <NavBar />
      <Body results={results} />
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre as keyof typeof requests]?.url ||
      requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
