# My Personal Website
This is a [Next.js](https://nextjs.org/) project; a React based web app, styled using [tailwindcss](https://tailwindcss.com/).

## Deployment
The `.github/workflows/` directory contains a workflow which builds this project via GitHub Actions. 

The `docker/` directory contains a `Dockerfile` which is required to build the web app. The `docker-compose.yml` file is used to run it in combination with [nginx](https://www.nginx.com/).

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.