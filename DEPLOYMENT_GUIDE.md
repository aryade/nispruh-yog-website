# 🚀 Website Deployment & Publishing Guide

This guide explains how to publish your Nispruh Yog website to the internet so anyone can access it.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Deployment Options](#deployment-options)
4. [Step-by-Step Deployment](#step-by-step-deployment)
5. [Domain Setup](#domain-setup)
6. [After Publishing](#after-publishing)
7. [Troubleshooting](#troubleshooting)

---

## Overview

Your website is currently running **locally** (on your computer only). Publishing means uploading it to a **hosting service** so it's accessible from anywhere on the internet.

### Current Status
- ✅ Website built and working locally
- ✅ All pages created
- ✅ All tests passing (40/40)
- ✅ Ready for deployment

### After Publishing
- ✅ Website live on the internet
- ✅ Accessible via custom domain (yourwebsite.com)
- ✅ Can be shared with anyone
- ✅ SEO visible (appears in Google)

---

## Prerequisites

Before publishing, make sure you have:

### ✅ Required
- [ ] GitHub account (free: https://github.com)
- [ ] Vercel or other hosting account (see options below)
- [ ] Your website files ready
- [ ] Domain name (optional but recommended)

### ✅ Good to Have
- [ ] Google Analytics account
- [ ] SSL certificate (usually automatic)
- [ ] Email for notifications

---

## Deployment Options

### 🥇 **Option 1: VERCEL (Recommended) ⭐**

**Best for:** Next.js websites (this is a Next.js site)

**Pros:**
- ✅ Easiest deployment (1 click)
- ✅ Automatic updates from GitHub
- ✅ Free tier available
- ✅ Fast performance
- ✅ Free SSL certificate
- ✅ Custom domain support
- ✅ Automatic backups

**Cons:**
- Paid tier for high traffic

**Cost:**
- Free tier: Great for small sites
- Pro tier: $20/month for advanced features

**Link:** https://vercel.com

---

### 🥈 **Option 2: Netlify**

**Best for:** Static sites or JAMstack

**Pros:**
- ✅ Easy deployment
- ✅ Free tier available
- ✅ Good for testing
- ✅ Good customer support

**Cons:**
- Slightly less optimized for Next.js than Vercel
- Limited free tier

**Cost:**
- Free tier: 300 minutes/month build time
- Pro: $19/month

**Link:** https://netlify.com

---

### 🥉 **Option 3: AWS (Amplify)**

**Best for:** Enterprise/complex applications

**Pros:**
- ✅ Very powerful
- ✅ Scalable
- ✅ AWS ecosystem integration

**Cons:**
- More complex setup
- Can be expensive if not careful
- Steep learning curve

**Cost:**
- Free tier: Limited
- Pay-as-you-go: Variable

**Link:** https://aws.amazon.com/amplify

---

### **Option 4: DigitalOcean / Linode**

**Best for:** Developers with server experience

**Pros:**
- ✅ Affordable
- ✅ Full control
- ✅ Good documentation

**Cons:**
- Requires server management knowledge
- More setup steps

**Cost:**
- $5-20/month for basic VPS

**Link:** https://digitalocean.com

---

## ✅ RECOMMENDED: Deploy with Vercel (Easiest)

Vercel is the company that created Next.js and it's optimized for your website.

---

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Create new repository named `nispruh-yog-website`
3. Choose "Public" (or Private if you prefer)
4. Click "Create repository"

### Step 2: Upload Your Website Code to GitHub

**On your computer, open terminal/command prompt:**

```bash
# Navigate to your website folder
cd /Users/aryadevi/programs/kriyayoga_website

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Nispruh Yog website"

# Add GitHub as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/nispruh-yog-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Connect to Vercel

1. Go to https://vercel.com
2. Click "Sign up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub account
4. Click "New Project"
5. Find and select "nispruh-yog-website" repository
6. Click "Import"

### Step 4: Configure Project

1. **Framework Preset:** Select "Next.js"
2. **Root Directory:** Leave as default `.`
3. **Build Command:** Leave as default `next build`
4. **Output Directory:** Leave as default `.next`

Click "Deploy" button

### Step 5: Wait for Deployment

Vercel will:
1. Build your website (2-3 minutes)
2. Deploy it live
3. Provide you a live URL

**You're done!** 🎉

Your website is now live at: `https://[project-name].vercel.app`

---

## Domain Setup

### Add Your Own Domain

After deployment, you can connect a custom domain like `nispruhyog.com`

#### **Step 1: Buy Domain**

Popular domain registrars:
- GoDaddy: https://godaddy.com
- Namecheap: https://namecheap.com
- Google Domains: https://domains.google
- Domain.com: https://domain.com

**Cost:** $10-15/year typically

#### **Step 2: Connect to Vercel**

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Enter your domain name (e.g., `nispruhyog.com`)
3. Choose one of these options:

**Option A: Use Vercel's Nameservers (Easiest)**
1. Copy Vercel's nameserver addresses
2. Go to your domain registrar
3. Update DNS settings with Vercel's nameservers
4. Wait 24-48 hours for changes to propagate

**Option B: Use CNAME Record (Faster)**
1. Copy the CNAME value from Vercel
2. Go to domain registrar DNS settings
3. Add CNAME record pointing to Vercel
4. Changes take effect in a few hours

#### **Step 3: Verify Domain**

After DNS updates:
1. Vercel will automatically verify
2. Website now accessible at `your-domain.com`
3. Takes 24-48 hours to fully propagate globall

---

## After Publishing

### ✅ Things to Do After Going Live

#### 1. **Test Everything**
- [ ] Visit your domain in browser
- [ ] Test all pages load
- [ ] Test mobile view
- [ ] Test contact form
- [ ] Check images load correctly
- [ ] Test dark mode

#### 2. **Set Up Analytics**
1. Create Google Analytics account: https://analytics.google.com
2. Get tracking ID
3. Add to website (ask developer to add this line to `<head>`)
4. Monitor traffic

#### 3. **Set Up SSL Certificate**
- Vercel automatically provides this
- Ensures `https://` (secure)
- Shows green lock in browser

#### 4. **Set Up Email**
- For contact form submissions
- Most hosting platforms provide email forwarding
- Or use third-party like Mailgun or SendGrid

#### 5. **Create Backup**
- Keep copy of all files locally
- GitHub automatically backs up code
- Vercel stores deployments

#### 6. **Set Up Monitoring**
- Vercel provides uptime monitoring
- Set up alerts if site goes down
- Monitor performance metrics

---

## After Publication: Making Updates

### How to Update Your Website

Once published, updating is easy:

#### **Method 1: Edit Files Locally (Recommended)**

1. Edit files on your computer
2. Test locally with `npm run dev`
3. Commit changes to GitHub
4. Push to GitHub
5. Vercel automatically redeploys (1-2 minutes)

```bash
# After making edits:
git add .
git commit -m "Updated teacher photo and homepage text"
git push origin main

# Vercel will automatically redeploy!
```

#### **Method 2: Direct Edits (Not Recommended)**

Some hosting services allow editing directly, but version control is better.

---

## Continuous Deployment

**What happens after publication:**

```
You edit files locally
        ↓
Commit to GitHub
        ↓
Push to GitHub (`git push`)
        ↓
Vercel receives notification
        ↓
Vercel automatically builds & deploys
        ↓
Your website updates live (1-2 min)
        ↓
Changes visible to everyone
```

No manual uploading needed! Automatic after each commit.

---

## Troubleshooting

### ❌ **"Build Failed" Error**

**Causes:**
- Syntax error in code
- Missing file
- Import error

**Fix:**
1. Check error message in Vercel logs
2. Fix the error locally
3. Test with `npm run dev`
4. Commit and push again

### ❌ **"Website Not Loading"**

**Causes:**
- Domain not fully propagated (24-48 hours)
- DNS not configured correctly
- Build still in progress

**Fix:**
1. Wait 24-48 hours if domain just propagated
2. Check Vercel dashboard → Deployments
3. Verify DNS settings
4. Try clearing browser cache (Ctrl+Shift+Delete)

### ❌ **"Images Not Showing"**

**Causes:**
- Image file path incorrect
- Image not in `public/images/` folder
- Wrong file name

**Fix:**
1. Verify image exists in `/public/images/`
2. Check file path is correct
3. Ensure filename matches exactly (case-sensitive)
4. Commit and push changes

### ❌ **"Contact Form Not Working"**

**Causes:**
- API endpoint not deployed
- Email configuration not set
- CORS issues

**Fix:**
1. Check Vercel logs for errors
2. Verify API route deployed
3. Ask developer to configure email service

### ❌ **"Site Very Slow"**

**Causes:**
- Large uncompressed images
- Too many requests
- Network issues

**Fix:**
1. Compress images with TinyPNG
2. Optimize large files
3. Wait (it's usually just initial load)

---

## Performance Monitoring

### Monitor Your Site

**In Vercel Dashboard:**
1. **Deployments** tab - see all deployments
2. **Analytics** tab - see performance metrics
3. **Logs** tab - see errors and issues
4. **Settings** → **Environment** - manage variables

**External Tools:**
- Google Analytics: https://analytics.google.com
- Uptime Robot: https://uptimerobot.com (free monitoring)
- Pingdom: https://pingdom.com (paid uptime monitoring)

---

## Costs & Billing

### Vercel Pricing

| Plan | Price | Best For | Includes |
|------|-------|----------|----------|
| Hobby (Free) | $0 | Small sites | 100GB bandwidth, 1000 function invocations |
| Pro | $20/mo | Growing sites | 1TB bandwidth, analytics |
| Enterprise | Custom | Large sites | Custom SLA, support |

**Your website:**
- Free tier should be enough to start
- Upgrade to Pro only if needed

### Domain Pricing
- **Domain name:** $10-15/year
- **Usually only one-time initial purchase**
- Then annual renewal fee

### Total First Year Cost
- Free tier Vercel: $0
- Custom domain: ~$15
- **Total: ~$15 for first year**

---

## Maintenance Checklist

### Daily
- [ ] Monitor contacts/emails
- [ ] Check no errors in logs

### Weekly
- [ ] Review analytics
- [ ] Check performance metrics
- [ ] Verify all pages work

### Monthly
- [ ] Backup files
- [ ] Review and update content
- [ ] Check for security updates

### Yearly
- [ ] Renew domain
- [ ] Review costs
- [ ] Plan improvements

---

## Security Essentials

### ✅ Already Protected
- ✅ SSL/HTTPS (automatic with Vercel)
- ✅ DDoS protection (Vercel provides)
- ✅ Automatic backups (using GitHub)

### ⚠️ Keep Secure
- Never commit `.env` files with secrets
- Keep dependencies updated
- Monitor for vulnerabilities
- Use strong GitHub password

### 🔒 Environment Variables

For sensitive data (like API keys):

1. Create `.env.local` file (never commit to GitHub)
2. In Vercel dashboard → Settings → Environment Variables
3. Add sensitive values there
4. They're automatically injected at build time

---

## Quick Reference: Deployment Steps

1. **Create GitHub account** (5 min)
2. **Push code to GitHub** (10 min)
3. **Create Vercel account** (5 min)
4. **Connect to Vercel** (5 min)
5. **Deploy** (2-3 min automatic)
6. **Optional: Add custom domain** (5 min setup + 24-48h wait)

**Total time:** ~30-45 minutes to go live! 🚀

---

## FAQ

### Q: Do I need GitHub to deploy?
**A:** Most hosting services use Git/GitHub for deployments. It's the standard practice and provides version control.

### Q: Can I keep my website private?
**A:** Yes, make the GitHub repository private, but it will still be live on your domain.

### Q: What if I need to make updates?
**A:** Just edit files, commit to GitHub, and push. Vercel automatically redeploys (1-2 minutes).

### Q: How long before website ranks in Google?
**A:** Usually 2-4 weeks. Submit your sitemap to Google Search Console to speed up.

### Q: Can I use my own server?
**A:** Yes, but requires server management knowledge. Vercel is easier for beginners.

### Q: Is there a free option?
**A:** Yes! Vercel Hobby plan is free for small sites. Domain name costs about $15/year.

### Q: What if something breaks after deployment?
**A:** Simply fix it locally, test with `npm run dev`, commit, and push. Vercel will redeploy.

---

## Next Steps

1. **Create GitHub account** if you don't have one
2. **Create Vercel account** (connect with GitHub)
3. **Follow steps above** to deploy
4. **Test your live website**
5. **Add custom domain** (optional but recommended)
6. **Share your website** with the world! 🌍

---

## Additional Resources

### Hosting Platforms
- Vercel: https://vercel.com
- Netlify: https://netlify.com
- AWS Amplify: https://aws.amazon.com/amplify
- DigitalOcean: https://digitalocean.com

### Domain Registrars
- GoDaddy: https://godaddy.com
- Namecheap: https://namecheap.com
- Google Domains: https://domains.google

### Monitoring Tools
- Uptime Robot: https://uptimerobot.com
- Google Analytics: https://analytics.google.com
- Vercel Dashboard: https://vercel.com/dashboard

### Documentation
- Next.js Deployment: https://nextjs.org/learn/basics/deploying-nextjs-app
- Vercel Docs: https://vercel.com/docs
- GitHub Guide: https://docs.github.com

---

## Support

**If you get stuck:**

1. Check error message carefully
2. Review the troubleshooting section above
3. Check Vercel documentation
4. Contact your developer with error message

---

**Ready to go live? Follow the steps above and your website will be published in under an hour!** 🎉

**Last Updated:** April 4, 2026
**Version:** 1.0
