# GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when code is pushed to the `main` branch.

## Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Repository Name Configuration:**
   - If your repository is named `jome-landing` and it's NOT your main GitHub Pages site, you may need to set the `basePath` in `next.config.ts`
   - Uncomment and set: `basePath: '/jome-landing'`
   - If this is your main GitHub Pages site (username.github.io), leave `basePath` commented out

3. **Push to main branch:**
   - The workflow will automatically trigger on push to `main`
   - You can also manually trigger it from the "Actions" tab using "workflow_dispatch"

## How It Works

- The GitHub Actions workflow (`.github/workflows/deploy.yml`) will:
  1. Build the Next.js app as a static export
  2. Generate static pages for both `/en` and `/fa` locales
  3. Deploy the `out` directory to GitHub Pages

## Local Testing

To test the static export locally:

```bash
npm run build
npx serve out
```

Then visit `http://localhost:3000` to preview the static build.
