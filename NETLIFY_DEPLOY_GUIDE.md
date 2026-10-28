# ATX Technologies — Deployment Guide to Netlify

This project is built and optimized for production deployment on **Netlify**.

## Prerequisites
- A free or existing account at [Netlify](https://app.netlify.com/)
- Your code pushed to GitHub, GitLab, or Bitbucket (or direct manual drag-and-drop to Netlify)

---

## Method 1: Git-Connected Automated Deployment (Recommended)

1. Log in to your [Netlify Dashboard](https://app.netlify.com/).
2. Click **"Add new site"** → **"Import an existing project"**.
3. Select your Git provider (GitHub, etc.) and choose the **`ALX TECHNOLOGY`** repository.
4. Netlify will automatically detect the settings from [`netlify.toml`](./netlify.toml):
   - **Base directory:** `.`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy site"**.
6. Your website will be live in under 60 seconds with continuous auto-deployment whenever you push changes.

---

## Method 2: Instant Manual Drag-and-Drop Deploy

If you prefer to deploy immediately without setting up a remote Git repository:

1. The production build has already been generated in the **`dist`** folder:
   - Path: `c:\Users\Tayo\OneDrive - Webb Fontaine Group FZ-LLC\Documents\ALX TECHNOLOGY\dist`
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the **`dist`** folder directly into the browser upload box.
4. Netlify will deploy it instantly and provide you with a live URL (e.g. `atx-technologies.netlify.app`).

---

## Built-in Netlify Features Included:
- **Netlify Forms**: Pre-configured in [`index.html`](./index.html) and [`src/components/ContactForm.jsx`](./src/components/ContactForm.jsx). All inquiries submitted through the form will be captured automatically inside your Netlify dashboard under the **Forms** tab.
- **SPA Routing & Redirects**: Handled via [`netlify.toml`](./netlify.toml) ensuring no 404 errors on browser refresh.
- **Fast CDN & SSL**: Netlify automatically provisions a free HTTPS / SSL certificate.
