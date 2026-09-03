# Hostinger SPA Deployment Guide - Ricky's Ice Cream

This React application uses **Vite** and **React Router DOM** with HTML5 `BrowserRouter` for clean URLs (`/`, `/about`, `/services`, `/contact`).

To deploy this project to Hostinger without broken routes on page refresh or direct URL access, follow these instructions:

---

### 1. Build the Production Files
Run the production build command in your terminal:
```bash
npm run build
```
This generates an optimized static bundle in the `dist/` directory, including the `dist/.htaccess` file.

---

### 2. Upload to Hostinger File Manager
1. Log into your **Hostinger hPanel**.
2. Navigate to **Websites** → click **Manage** on your domain.
3. Open **File Manager** (or connect via FTP / FileZilla).
4. Navigate into the **`public_html`** root directory.
5. Upload all the contents inside your local `dist/` folder directly into `public_html/`.
   - Ensure `index.html`, `assets/`, and `.htaccess` are directly inside `public_html/`.

---

### 3. Verify the `.htaccess` File
Hostinger uses Apache / LiteSpeed web servers. The included `.htaccess` file ensures all clean route requests (`/about`, `/services`, `/contact`) are rewritten to `index.html` so React Router can handle them:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

> **Note:** In Hostinger File Manager, make sure **"Show Hidden Files (dotfiles)"** is enabled in settings so `.htaccess` is visible.

---

### 4. Direct URL & Refresh Verification
Once uploaded, test:
- Navigating to `https://yourdomain.com/about` directly in your browser.
- Refreshing the page while on `https://yourdomain.com/services`.
- Submitting a catering request or testing links.
- Everything will load smoothly without 404 Not Found errors!
