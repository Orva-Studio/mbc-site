
export default async function ContactPage() {
  const data = await getData();

  return (
    <div className="container mx-auto px-4 py-8">
      <title>{data.title}</title>

      <article className="my-8 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8 text-primary-900">{data.headline}</h1>
        <p className="text-primary-600 mb-8">If you're looking for any kind of help with growing your audience through video, don't hesitate to reach out.</p>
        <p className="text-primary-600 mb-8">rich.bray[at]orva.studio</p>
      </article>
    </div>
  );
}

const getData = async () => {
  const data = {
    title: 'Contact - Make Better Content',
    headline: 'Contact',
    description: 'The minimal React framework',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
