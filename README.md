# COMS6998-Chain

The prompt chain tool of Designing for GenAI: The Humor Project (Columbia University, Fall 2026). A Next.js front end over the COMS6998 backend.

## Tech Stack

- **Front End**: Node.js, React.js, Next.js, Tailwind CSS, MUI
- **Authentication**: Google Sign-In
- **DevOps**: GitHub Actions

## Live Demo

[https://chain-coms6998.windsnow1025.com/](https://chain-coms6998.windsnow1025.com/)

## Setup

### Deployment

The app is deployed by the COMS6998 repository's cluster: its `kubernetes/chain-next/` manifests run the image this repository publishes, and its cluster Nginx serves the domain.

#### Google Auth

In Google Auth Platform, for App

- Clients
  - Authorized JavaScript origins
    - https://<chain_domain_name>

### Development

Run the COMS6998 Nest.js backend on port 3001, then `pnpm run dev` in `next/`.

#### CI/CD

GitHub >> Repository >> Settings >> Security >> Secrets and variables >> Actions

- Secrets >> Repository secrets: add `DOCKERHUB_TOKEN`
- Variables >> Repository variables: add `DOCKERHUB_USERNAME`
