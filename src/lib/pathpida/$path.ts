export const pagesPath = {
  $url: (url?: { hash?: string }) => ({
    hash: url?.hash,
    pathname: '/' as const,
  }),
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  next_svg: '/next.svg',
  thirteen_svg: '/thirteen.svg',
  vercel_svg: '/vercel.svg',
} as const

export type StaticPath = typeof staticPath
