import Blurb from "../components/blurb";
import BookImage from "../components/bookimage";
import Hero from "../components/hero";
import Signup from "../components/signup";
import About from "../components/about";
import KitForm from "../components/kitform";


export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <Hero />
      <BookImage />
      <Blurb />
      <Signup />
      <KitForm />
      <About />
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Waku',
    headline: 'Waku',
    body: 'Hello world!',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
