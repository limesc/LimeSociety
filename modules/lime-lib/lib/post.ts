export const post = (
  url: string,
  formData?: Array<any>,
  target?: string
): void => {
  const form = document.createElement('form')
  form.action = url
  form.method = 'post'
  if (target) {
    form.target = target
  }

  if (formData) {
    for (const pair of formData) {
      const input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', pair[0])
      input.setAttribute('value', pair[1])
      form.appendChild(input)
    }
  }

  document.body.appendChild(form)
  form.submit()
  document.body.removeChild(form)
}
