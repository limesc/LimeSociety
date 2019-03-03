export const forbidden = (ctx): number => {
  const { res } = ctx || { res: undefined }
  const statusCode = 403
  if (res) {
    res.writeHead(statusCode)
    res.end()
    res.finished = true
  }
  return statusCode
}
