# Hereford Handyman - Self-Hosting Guide

## 📦 What You Have

Complete website codebase for **herefordhandyman.co.uk** including:
- React 19 + Tailwind CSS 4 frontend
- 4 pages (Home, Home Adaptations, Media Walls, B2B)
- SEO optimization (meta tags, schema markup)
- Responsive mobile design
- Professional navy/amber color scheme

---

## 🚀 Quick Start - Deploy in 5 Minutes

### Option 1: Vercel (Recommended - FREE)

**Why Vercel?**
- Free hosting with custom domain
- Automatic HTTPS/SSL
- Global CDN
- Zero configuration needed

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to project folder:**
   ```bash
   cd hereford-handyman
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   - Follow prompts (login with GitHub/email)
   - Accept defaults
   - Get instant live URL

4. **Add custom domain:**
   ```bash
   vercel domains add herefordhandyman.co.uk
   ```
   - Vercel will give you DNS records
   - Add to Namecheap (I can help with this)

**Done!** Your site is live with automatic deployments.

---

### Option 2: Netlify (Also FREE)

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Deploy:**
   ```bash
   cd hereford-handyman
   netlify deploy --prod
   ```

3. **Add custom domain in Netlify dashboard**

---

### Option 3: Your Own VPS (DigitalOcean, Linode, etc.)

**Requirements:**
- Ubuntu 22.04+ server
- Node.js 22+
- Nginx

**Steps:**

1. **Upload files to server:**
   ```bash
   scp -r hereford-handyman/ user@your-server:/var/www/
   ```

2. **Install dependencies:**
   ```bash
   cd /var/www/hereford-handyman
   pnpm install
   ```

3. **Build for production:**
   ```bash
   pnpm build
   ```

4. **Configure Nginx:**
   ```nginx
   server {
       listen 80;
       server_name herefordhandyman.co.uk www.herefordhandyman.co.uk;
       
       root /var/www/hereford-handyman/dist/public;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

5. **Get SSL certificate (free):**
   ```bash
   sudo certbot --nginx -d herefordhandyman.co.uk -d www.herefordhandyman.co.uk
   ```

---

## 🔧 Local Development

**Run locally to test changes:**

```bash
cd hereford-handyman
pnpm install
pnpm dev
```

Open http://localhost:3000

**Make changes:**
- Edit files in `client/src/`
- Pages: `client/src/pages/`
- Components: `client/src/components/`
- Styles: `client/src/index.css`

---

## 📝 DNS Configuration for Custom Domain

**In Namecheap Advanced DNS:**

### For Vercel/Netlify:
They will provide specific records like:
```
Type: CNAME
Host: www
Value: cname.vercel-dns.com

Type: A
Host: @
Value: 76.76.21.21
```

### Current Setup:
✅ **Email (Gmail/Google Workspace)** - Already configured!
- MX records are set
- You can create hello@herefordhandyman.co.uk in Google Workspace

---

## 🎨 Customization Guide

### Change Colors:
Edit `client/src/index.css`:
```css
:root {
  --primary: oklch(0.4 0.15 240);  /* Navy blue */
  --accent: oklch(0.7 0.15 60);    /* Amber */
}
```

### Add More Images:
1. Place images in `client/public/images/`
2. Reference in code: `/images/your-image.jpg`
3. For large images, use CDN (I can help upload to S3)

### Update Content:
- **Homepage:** `client/src/pages/Home.tsx`
- **Services:** `client/src/pages/ElderlyCare.tsx`, `MediaWalls.tsx`
- **B2B:** `client/src/pages/B2B.tsx`

---

## 📊 What's Included

```
hereford-handyman/
├── client/
│   ├── public/
│   │   └── images/          # Your service photos
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # All 4 pages
│   │   ├── index.css        # Global styles & colors
│   │   └── App.tsx          # Routes & navigation
│   └── index.html           # SEO meta tags
├── package.json             # Dependencies
└── vite.config.ts           # Build configuration
```

---

## 🆘 Troubleshooting

**Build fails?**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

**Images not showing?**
- Check paths start with `/images/`
- Verify files exist in `client/public/images/`

**Domain not working?**
- DNS takes 1-48 hours to propagate
- Check DNS with: `dig herefordhandyman.co.uk`
- Verify A/CNAME records in Namecheap

---

## 💡 Recommended: Vercel

**Why I recommend Vercel for you:**
1. **Free forever** for static sites
2. **Automatic HTTPS** - no SSL setup needed
3. **Global CDN** - fast loading worldwide
4. **Easy updates** - just run `vercel` again to deploy changes
5. **Custom domain** - herefordhandyman.co.uk works perfectly
6. **Zero maintenance** - no server to manage

**Cost comparison:**
- Vercel: £0/month
- Netlify: £0/month
- DigitalOcean VPS: £5-12/month + your time
- Namecheap hosting: £2-8/month (slower)

---

## 📧 Email Setup (Already Done!)

Your Google Workspace email is configured in Namecheap DNS.

**To activate:**
1. Go to [Google Workspace](https://workspace.google.com)
2. Add domain: herefordhandyman.co.uk
3. Create mailboxes:
   - hello@herefordhandyman.co.uk
   - info@herefordhandyman.co.uk
   - quotes@herefordhandyman.co.uk

MX records are already set - email will work immediately!

---

## 🎯 Next Steps

1. **Deploy to Vercel** (5 minutes)
2. **Add custom domain** in Vercel dashboard
3. **Update Namecheap DNS** with Vercel's records (I can help)
4. **Set up Google Workspace** email
5. **Add more service photos** from your portfolio
6. **Get real customer testimonials** to replace placeholders

---

## 📞 Need Help?

If you get stuck:
1. Check the troubleshooting section above
2. Vercel has excellent docs: https://vercel.com/docs
3. I can help with DNS configuration in Namecheap

**Your website is ready to go live!** 🚀
