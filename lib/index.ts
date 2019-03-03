import Router from 'next/router'

export function getViewer (ctx) {
  const { mobxStore } = ctx
  const viewer = mobxStore ? mobxStore.viewer : null
  return viewer
}

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
