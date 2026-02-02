---
description: How to deploy the Lunex Web Studio website to a custom domain
---

# Deployment & Domain Launch Guide

Follow these steps to take **Lunex Web Studio** live on your custom domain.

## Phase 1: Preparation
Before launching, ensure the production build is working correctly.
// turbo
1. Run a fresh build:
   ```powershell
   npm run build
   ```
   *This creates a `dist` folder with optimized files.*

## Phase 2: Choosing a Hosting Provider
Since this is a Vite (React) application, we recommend **Vercel** or **Netlify** for their speed and ease of use.

### Option A: Vercel (Recommended)
1. **Create Account**: Go to [vercel.com](https://vercel.com) and sign up.
2. **Connect Git**: Upload your code to a GitHub repository and import it into Vercel.
3. **Deploy**: Vercel will automatically detect Vite and deploy your site.

### Option B: Traditional Hosting (Hostinger, Bluehost, etc.)
1. **Access File Manager**: Log in to your hosting cPanel.
2. **Upload**: Upload the *contents* of the `dist/` folder to the `public_html` directory via FTP or File Manager.

## Phase 3: Connecting Your Domain
1. **Purchase Domain**: If you haven't already, buy your domain (e.g., `lunex.studio`).
2. **Setup DNS**:
   - In your Domain Registrar (GoDaddy, Namecheap, etc.), change the **A Record** to point to your hosting IP, OR
   - Change **Nameservers** if using Vercel/Netlify (they will provide the exact nameservers).
3. **SSL (HTTPS)**: Ensure SSL is active (Vercel and Netlify provide this for free automatically).

## Phase 4: Final Testing
Once the domain is connected:
1. Check all links (WhatsApp, Instagram, Email).
2. Test the **AI Inquiry Terminal** to ensure it sends messages correctly.
3. Verify the **Loading Screen** appears correctly on the live URL.

---
**Status**: Site is optimized and ready for deployment.
