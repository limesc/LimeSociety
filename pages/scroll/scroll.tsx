export const performScroll = top => {
  window.scrollTo({
    behavior: 'smooth',
    top
  })
}

export const scrollToHref = href => {
  const destinationElement = document.querySelector(href)

  performScroll(destinationElement.offsetTop)
}
