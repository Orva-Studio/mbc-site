import Blurb from "../components/blurb";
import BookImage from "../components/bookimage";
import Faq from "../components/faq";
import Hero from "../components/hero";
import Signup from "../components/signup";
import Testimonials from "../components/testimonials";
import About from "../components/about";


export default async function HomePage() {
  const data = await getData();

  return (
    <div>
      <title>{data.title}</title>
      <Hero />
      <BookImage />
      <Blurb />
      {/* <Testimonials /> */}
      <Signup />
      {/* <Faq /> */}
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
