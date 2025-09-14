import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface MDXRendererProps {
  content: string;
}

export function MDXRenderer({ content }: MDXRendererProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeHighlight, rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => {
          const id = children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
            <h1 id={id} className="text-3xl mt-8 mb-4 text-primary-900 font-bold scroll-mt-20 group flex items-center">
              <span>{children}</span>
              <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-primary-500 hover:text-primary-700">
                #
              </a>
            </h1>
          );
        },
        h2: ({ children }) => {
          const id = children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
            <h2 id={id} className="text-2xl mt-8 mb-4 text-primary-900 font-semibold scroll-mt-20 group flex items-center">
              <span>{children}</span>
              <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-primary-500 hover:text-primary-700">
                #
              </a>
            </h2>
          );
        },
        h3: ({ children }) => {
          const id = children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
            <h3 id={id} className="text-xl mt-6 mb-3 text-primary-900 font-semibold scroll-mt-20 group flex items-center">
              <span>{children}</span>
              <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-primary-500 hover:text-primary-700">
                #
              </a>
            </h3>
          );
        },
        h4: ({ children }) => {
          const id = children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
            <h4 id={id} className="text-lg mt-6 mb-3 text-primary-900 font-semibold scroll-mt-20 group flex items-center">
              <span>{children}</span>
              <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-primary-500 hover:text-primary-700">
                #
              </a>
            </h4>
          );
        },
        h5: ({ children }) => {
          const id = children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
            <h5 id={id} className="text-base mt-4 mb-2 text-primary-900 font-semibold scroll-mt-20 group flex items-center">
              <span>{children}</span>
              <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-primary-500 hover:text-primary-700">
                #
              </a>
            </h5>
          );
        },
        h6: ({ children }) => {
          const id = children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return (
            <h6 id={id} className="text-sm mt-4 mb-2 text-primary-900 font-semibold scroll-mt-20 group flex items-center">
              <span>{children}</span>
              <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-primary-500 hover:text-primary-700">
                #
              </a>
            </h6>
          );
        },
        p: ({ children }) => (
          <p className="text-primary-700 mb-4 leading-loose">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-bold text-primary-900">
            {children}
          </strong>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-4 space-y-2">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-primary-700">
            {children}
          </li>
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary-300 pl-4 italic text-primary-600 mb-4">
            {children}
          </blockquote>
        ),
        code: ({ children, className }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="bg-primary-100 text-primary-800 px-1 py-0.5 rounded text-sm font-mono">
                {children}
              </code>
            );
          }
          return (
            <code className={className}>
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
            {children}
          </pre>
        ),
        img: ({ src, alt }) => (
          <img 
            src={src} 
            alt={alt} 
            className="w-full mb-8 rounded-lg" 
          />
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            className="text-blue-600 hover:text-blue-800 underline"
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
          >
            {children}
          </a>
        ),
        hr: () => (
          <hr className="border-primary-200 my-8" />
        ),
        table: ({ children }) => (
          <div className="w-full overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-gray-300">
              {children}
            </table>
          </div>
        ),
        th: ({ children }) => (
          <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="border border-gray-300 px-4 py-2">
            {children}
          </td>
        ),
        thead: ({ children }) => (
          <thead>
            {children}
          </thead>
        ),
        tbody: ({ children }) => (
          <tbody>
            {children}
          </tbody>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
