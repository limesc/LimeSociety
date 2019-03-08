export const performScroll = (top) => {
    window.scrollTo ({
      behavior: 'smooth',
      top
    })
}

export const scrollToHref = (herf) => {
  const destinationElement = document.querySelector(herf)

  performScroll(destinationElement.offsetTop)
}