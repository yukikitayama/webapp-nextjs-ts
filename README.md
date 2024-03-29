
## Initial setup

- Next.js
  - [TypeScript](https://nextjs.org/docs/basic-features/typescript)
- MUI
  - [Getting started with MUI and Next.js](https://blog.logrocket.com/getting-started-with-mui-and-next-js/)
  - [Installation](https://mui.com/material-ui/getting-started/installation/)
  - [TypeScript](https://mui.com/material-ui/guides/typescript/)
  - [CSS Baseline](https://mui.com/material-ui/react-css-baseline/)
- Font
  - [Getting Started](https://fontsource.org/docs/getting-started)

## Command

`npm run dev` runs the development server.

`npm run build` builds the production application in the `.next` folder

`npm run start` starts a Node.js server which serves both statically generated and server-side rendered pages.

## Layout

Every page has a nevigation at the top and a footer at the bottom.

In PC display, menu button appears in the nevigation. In mobile screen, the navigation has title and menu icon, and when click the icon, menu slides from the side to appear.

The footer contains the icons to social media such as LinkedIn, GitHub, Instagram.

## Flexbox

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox](https://mui.com/system/flexbox/)

## Next.js

- [A 2021 guide about structuring your Next.js project in a flexible and efficient way](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472)

### Image

- Fill an image with the aspect ration preserved by using `position`, `fill`, and `object-fit`
  - [fill](https://nextjs.org/docs/api-reference/next/image#fill)
  - [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
  - [style](https://reactjs.org/docs/dom-elements.html#style)

### getStaticProps

- [How to make Next.js getStaticProps work with typescript](https://stackoverflow.com/questions/65078245/how-to-make-next-js-getstaticprops-work-with-typescript)

## Components

### Navigation bar

- [App bar with responsive menu](https://mui.com/material-ui/react-app-bar/#app-bar-with-responsive-menu)

## React Markdown

- [SyntaxError: Unexpected token export when using NextJS](https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230)
  - Use `cjs` instead of `esm`

## MUI

- [Component prop](https://mui.com/material-ui/guides/composition/#component-prop)

## File size

### Initial state

Route (pages)                              Size     First Load JS
┌ ○ /                                      4.32 kB        77.5 kB
├   └ css/ae0e3e027412e072.css             707 B
├   /_app                                  0 B            73.1 kB
├ ○ /404                                   181 B          73.3 kB
└ λ /api/hello                             0 B            73.1 kB
+ First Load JS shared by all              73.4 kB
  ├ chunks/framework-8c5acb0054140387.js   45.4 kB
  ├ chunks/main-b482fffd82fa7e1c.js        26.7 kB
  ├ chunks/pages/_app-3893aca8cac41098.js  296 B
  ├ chunks/webpack-8fa1640cc84ba8fe.js     750 B
  └ css/ab44ce7add5c3d11.css               247 B

λ  (Server)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
○  (Static)  automatically rendered as static HTML (uses no initial props)