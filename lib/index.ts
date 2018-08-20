export const getViewer = (ctx) => {
  const { reduxStore } = ctx
  const viewer = reduxStore ? reduxStore.getState().viewer : null
  return viewer
}
