// @flow
// -------------------------------------
// Base reset and setup

export const baseStyles: string = `
*,
*::before,
*::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}
html {
  font: normal 400 100% / 1.5 -apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
}
body {
  position: relative;
  margin: 0;
  overflow-x: hidden;
  color: #333;
  background-color: #fff;
}
main {
  display: block;
}
::selection {
  color: #fff;
  text-shadow: none;
  background: #000;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  line-height: 1.25;
}
a {
  display: inline-block;
  color: inherit;
  text-decoration: none;
  background: transparent;
  transition: color 0.25s;
}
a:hover {
  color: #0074D9;
}
p a,
li a {
  border-bottom: 1px dotted;
}
`.replace(/\n/g, '')

// -------------------------------------
// Markdown documents (resume)

export const proseStyles: string = `
h1 {
  position: -webkit-sticky;
  position: sticky;
  top: 0.75rem;
  z-index: 2;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
}
h2 {
  padding-top: 1.125rem;
  border-bottom: 1px solid;
  font-weight: 700;
  font-size: 1.125rem;
}
h2 ~ h2 {
  margin-top: 1.5rem;
}
h3 {
  position: relative;
  padding-top: 1rem;
  font-weight: 700;
  font-size: 1rem;
}
h4 {
  font-weight: 400;
  font-size: 0.875rem;
}
p, ul {
  font-size: 0.875rem;
  margin: 1em 0;
  padding: 0;
}
ul {
  margin-left: 1.2em;
  list-style-type: square;
}
p a,
li a {
  font-weight: 500;
}
#ello,
#mode-set,
#factory-labs,
#the-firm-graphics,
#ello + h4,
#mode-set + h4,
#factory-labs + h4,
#the-firm-graphics + h4 {
  padding-left: 2.5rem;
}
#ello:before,
#mode-set:before,
#factory-labs:before,
#the-firm-graphics:before {
  position: absolute;
  top: 1.25rem;
  left: 0;
  width: 1.875rem;
  height: 1.875rem;
  background: transparent no-repeat top left;
  content: '';
}
#ello:before {
  background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><circle fill='#333' cx='15' cy='15' r='15'/><path fill='#fff' d='M15,24c-4.1,0-7.7-2.8-8.7-6.8c-0.1-0.5,0.2-0.9,0.6-1c0.5-0.1,0.9,0.2,1,0.6c0.8,3.2,3.7,5.5,7,5.5 c3.3,0,6.2-2.2,7-5.5c0.1-0.5,0.6-0.7,1-0.6c0.5,0.1,0.7,0.6,0.6,1C22.7,21.2,19.1,24,15,24z'/></svg>");
}
#mode-set:before {
  background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><polygon fill='#333' points='22.5,3.4 22.5,8.2 21.2,9.5 21.2,6.7 17.9,9.8 11.9,1.2 11.9,9.8 5.8,0.8 5.8,8.2 4,10.2 4,20.1 6.8,24.2 6.8,19.6 13.1,28.7 13.1,22.1 14.8,20 14.8,30 21.2,23.9 21.2,18.9 22.5,17.7 22.5,20.4 26,17.2 26,0'/></svg>");
}
#factory-labs:before {
  background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><path fill='#333' d='M28.3,0H11.2L10,0C5.4,0,1.7,3.8,1.7,8.4l0,0.6v2.8l17.2,0v0l0,0l1.1,0c4.6,0,8.4-3.7,8.4-8.4L28.3,0z'/><path fill='#333' d='M19.1,21.1c4.5,0,8.1-3.6,8.1-8.1l-16.2,0c-4.3,0-7.8,3.4-8.1,7.6l0,0.2c0,0.1,0,9.1,0,9.1h6.7l1.4,0c4.5,0,8.1-3.5,8.1-8 L19.1,21.1z'/></svg>");
}
#the-firm-graphics:before {
  background-image: url("data:image/svg+xml;charset=utf8,<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><path fill='#333' d='M0,15c0,8.3,6.7,15,15,15s15-6.7,15-15S23.3,0,15,0C6.7,0,0,6.7,0,15z M2.9,15C2.9,8.3,8.3,2.9,15,2.9 c6.7,0,12.1,5.4,12.1,12.1c0,6.7-5.4,12.1-12.1,12.1C8.3,27.1,2.9,21.7,2.9,15z'/><polygon fill='#333' points='8.4,12.2 5,15.6 14.1,24.8 19.4,24.8 20.2,24 13.3,17.1 25.1,17.1 25.1,12.2'/><polygon fill='#333' points='8.2,11.7 6.1,9.7 8.8,7 12,7 12.4,7.5 11.1,8.8 18.6,8.8 18.6,11.7'/><circle fill='#333' cx='5.3' cy='12.1' r='1.5'/></svg>");
}
`.replace(/\n/g, '')

