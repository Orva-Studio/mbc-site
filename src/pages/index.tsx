import Blurb from "../components/blurb";
import BookImage from "../components/bookimage";
import Hero from "../components/hero";
import About from "../components/about";
import KitForm from "../components/kitform";
import Faq from "../components/faq";


export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <Hero />
      <BookImage />
      <Blurb />
      <About />
      <KitForm />
      <Faq />
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
