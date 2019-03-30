import Router from 'next/router'

export function nextReplace (ctx, url: string) {
  const { res } = ctx || { res: undefined }

  if (res) {
    res.writeHead(302, { Location: url })
    res.end()
    res.finished = true
  } else {
    Router.replace(url).catch()
  }
}
