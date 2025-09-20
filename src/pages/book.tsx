import Blurb from "../components/blurb";
import BookImage from "../components/bookimage";
import Hero from "../components/hero";
import KitForm from "../components/kitform";
import Faq from "../components/faq";

export default async function BookPage() {

  return (
    <div>
      <Hero />
      <BookImage />
      <Blurb />
      <KitForm />
      <Faq />
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};