export const pagesPath = {
  $url: (url?: { hash?: string }) => ({
    hash: url?.hash,
    pathname: '/' as const,
  }),
}

export type PagesPath = typeof pagesPath
