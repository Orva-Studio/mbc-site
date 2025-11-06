// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as File_Root_getConfig } from './pages/_root';
// prettier-ignore
import type { getConfig as File_BlogSlug_getConfig } from './pages/blog/[slug]';
// prettier-ignore
import type { getConfig as File_Blog_getConfig } from './pages/blog';
// prettier-ignore
import type { getConfig as File_Book_getConfig } from './pages/book';
// prettier-ignore
import type { getConfig as File_Contact_getConfig } from './pages/contact';
// prettier-ignore
import type { getConfig as File_Index_getConfig } from './pages/index';
// prettier-ignore
import type { getConfig as File_Track_getConfig } from './pages/track';

// prettier-ignore
type Page =
| ({ path: '/_root' } & GetConfigResponse<typeof File_Root_getConfig>)
| ({ path: '/blog/[slug]' } & GetConfigResponse<typeof File_BlogSlug_getConfig>)
| ({ path: '/blog' } & GetConfigResponse<typeof File_Blog_getConfig>)
| ({ path: '/book' } & GetConfigResponse<typeof File_Book_getConfig>)
| ({ path: '/contact' } & GetConfigResponse<typeof File_Contact_getConfig>)
| ({ path: '/' } & GetConfigResponse<typeof File_Index_getConfig>)
| ({ path: '/track' } & GetConfigResponse<typeof File_Track_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
