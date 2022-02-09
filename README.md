---
lastmod: '2022-02-09T05:36:42.678Z'
---
# Personal Site

This is my personal site to play, learn, and maybe advertise myself.

This project has grown to include learning about integrating with SaaS services (MongodDB Atlas, CircleCI, Codecov, Vercel), testing (Jest, Cypress, CircleCI again), CSS, and of course React on NextJS. Right now, I'm just following wherever it leads, with no specific end goal in sight. I'm having a lot of fun and learning quite a bit as I go.

## Commands

| Command              | Description                                 |
| -------------------- | ------------------------------------------- |
| `npm run dev`        | Dev server w/ hot reloading                 |
| `npm run build`      | Build production version                    |
| `npm run test`       | run jest tests                              |
| `npm run test:watch` | run jest in watch mode                      |
| `npm test:ci`        | run jest in CI mode                         |
| `npm test:coverage`  | generate jest coverage report locally       |
| `npm cypress:open`   | run cypress in interactive mode             |
| `npm cypress:run`    | run cypress in headless mode                |
| `npm run cov`        | open coverage/index.html with Chrome on mac |

Note that code coverage reports are automatically generated and uploaded via CircleCI.

## Tech Stack

-   Framework: [NextJS](https://nextjs.org/)
-   Hosting: [Vercel](https://vercel.com)
-   Database: [MongoDB Atlas](https://www.mongodb.com/atlas/database)

## Testing

-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-   [Jest] (https://jestjs.io)
-   [Cypress] (https://www.cypress.io)
-   [Istanbul](https://istanbul.js.org)


## Continuous Integration

-   [CircleCI](https://circleci.com/)

## Authentication
- [Auth0](https://www.auth0.com/)
- [Auth0 Next.js SDK](https://github.com/auth0/nextjs-auth0)
  - Follow the instructions in the above repository to set up local authentication

## Utilities and other things

-   [animate.css](https://animate.style/) - Easy Small CSS animations
-   [Marx classless css](https://mblode.github.io/marx/) - Basic nice looking CSS as a baseline to iterate on
-   [Slick Gradient](https://slick-gradient.vercel.app/?ref=producthunt) - Generate nice gradients for the web
-   [React Icons](https://react-icons.github.io/react-icons/) - Easy, React-ish icons from various icon providers
-   [Tiptap Rich Text Editor Framework](https://tiptap.dev/) - Customizable editor framework for react. I use this for blog post drafting and display.
-   [Sematext Logs](https://sematext.com/) - Log aggregator and analysis platform that easily integrates with Vercel
