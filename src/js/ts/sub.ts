export const hello = () => {
  const el = <HTMLElement> document.querySelector('#title')
  el.innerHTML = 'Hello!'
}
