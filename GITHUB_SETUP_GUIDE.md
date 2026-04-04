# 🐙 GitHub Setup Guide - Step by Step

This guide helps you upload your website code to GitHub so you can deploy it to Vercel.

---

## 📋 Step-by-Step Instructions

### **Step 1: Create GitHub Account (If You Don't Have One)**

1. Go to https://github.com
2. Click **"Sign up"**
3. Enter your email address
4. Create a password
5. Enter a username (example: `your-name` or `nispruh-yog`)
6. Click "Create account"
7. Verify your email
8. **Done!** You now have a GitHub account

---

### **Step 2: Create New Repository on GitHub**

1. Go to https://github.com/new
2. Fill in the form:
   - **Repository name:** `nispruh-yog-website` (or similar)
   - **Description:** `Nispruh Yog Meditation Website` (optional but nice)
   - **Public/Private:** Choose **"Public"** (so anyone can view)
   - **Do NOT check** "Initialize with README" (we have code already)
3. Click **"Create repository"**

You'll see a page with commands to run. Keep this page open.

---

### **Step 3: Upload Code to GitHub**

Open **Terminal** or **Command Prompt** on your computer and follow these commands:

#### **3a. Navigate to Your Website Folder**

```bash
cd /Users/aryadevi/programs/kriyayoga_website
```

*(Replace with your actual folder path if different)*

#### **3b. Check Git is Installed**

```bash
git --version
```

If you see a version number, Git is installed. If not, download it from https://git-scm.com

#### **3c. Initialize Git Repository Locally**

```bash
git init
```

This creates a hidden `.git` folder that tracks changes.

#### **3d. Add All Your Files**

```bash
git add .
```

The `.` means "add everything". This stages all files for commit.

#### **3e. Create Your First Commit**

```bash
git commit -m "Initial commit: Nispruh Yog website"
```

This saves a snapshot of your code with a message explaining what changed.

#### **3f. Connect to Your GitHub Repository**

Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/nispruh-yog-website.git
```

Example:
```bash
git remote add origin https://github.com/john-smith/nispruh-yog-website.git
```

#### **3g. Rename Branch (If Needed)**

```bash
git branch -M main
```

This renames your main branch to `main` (GitHub's standard).

#### **3h: Push Code to GitHub**

```bash
git push -u origin main
```

This uploads all your code to GitHub. You may be asked for your GitHub username and password.

**That's it!** Your code is now on GitHub! 🎉

---

## 📝 How to Find Your Username

If you forgot your GitHub username:

1. Go to https://github.com (logged in)
2. Click your profile icon (top right)
3. Click "Your profile"
4. Look at the URL: `https://github.com/YOUR_USERNAME`
5. Your username is in the URL

---

## ✅ Verify It Worked

1. Go to https://github.com/YOUR_USERNAME/nispruh-yog-website
2. You should see all your website files:
   - `src/` folder
   - `public/` folder
   - `package.json`
   - All documentation files
   - etc.

If you see your files, **Success!** ✨

---

## 🆘 Troubleshooting

### ❌ Error: "fatal: not a git repository"

**Problem:** Git not initialized
**Solution:** Run `git init` first

### ❌ Error: "git command not found"

**Problem:** Git not installed
**Solution:** Download from https://git-scm.com and install

### ❌ Error: "Authentication failed"

**Problem:** Wrong GitHub credentials
**Solution:**
1. Generate a Personal Access Token:
   - Go to https://github.com/settings/tokens
   - Click "Generate new token"
   - Select all checkboxes
   - Copy the token
2. When asked for password, paste the token instead

### ❌ Files not appearing on GitHub

**Problem:** Push didn't complete
**Solution:**
```bash
git push -u origin main
```
(Run again to retry)

### ❌ "Repository already exists"

**Problem:** Git already initialized
**Solution:**
```bash
rm -rf .git
git init
```
(Start fresh)

---

## 🚀 Next Steps After GitHub Upload

Once your code is on GitHub:

1. **Go to Vercel:** https://vercel.com
2. **Click "New Project"**
3. **Select GitHub**
4. **Choose your repository** `nispruh-yog-website`
5. **Click Deploy**
6. **Your site goes LIVE!** ✨

*See DEPLOYMENT_GUIDE.md for detailed Vercel instructions*

---

## 💡 Quick Command Reference

```bash
# Check if Git is installed
git --version

# Initialize repository
git init

# Add all files
git add .

# Create commit
git commit -m "Your message here"

# Connect to GitHub (replace USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/nispruh-yog-website.git

# Rename branch
git branch -M main

# Push to GitHub
git push -u origin main

# View status
git status

# View commit history
git log
```

---

## 📖 Important Notes

### ✅ DO
- Use clear commit messages describing changes
- Commit regularly after making changes
- Keep your repository public (for Vercel free tier)
- Push to GitHub before deploying to Vercel

### ❌ DON'T
- Don't commit `node_modules` folder (too large)
- Don't commit `.env` files with secrets
- Don't commit IDE configuration files
- Don't use special characters in repository name

---

## ✨ After First Upload

**For future updates:**

1. Edit files locally
2. Run: `git add .`
3. Run: `git commit -m "Description of changes"`
4. Run: `git push origin main`
5. Vercel automatically deploys!

That's it! Updates happen automatically.

---

## 📞 Need Help?

### Common Issues

**Q: What if I made a mistake?**
A: Commits are reversible. Each commit is a save point.

**Q: What if I forgot the GitHub repository URL?**
A: Go to your repository on GitHub and click green "Code" button.

**Q: What if files are missing from GitHub?**
A: Run `git add .` and `git push origin main` again.

**Q: Can I delete and start over?**
A: Yes, delete the repository on GitHub and create a new one.

---

## 📝 Complete Workflow Summary

```
1. Create GitHub account
        ↓
2. Create repository on GitHub
        ↓
3. Open Terminal/Command Prompt
        ↓
4. Navigate to website folder
        ↓
5. Run: git init
        ↓
6. Run: git add .
        ↓
7. Run: git commit -m "Initial commit: Nispruh Yog website"
        ↓
8. Run: git remote add origin https://github.com/USERNAME/nispruh-yog-website.git
        ↓
9. Run: git branch -M main
        ↓
10. Run: git push -u origin main
        ↓
11. ✅ Code is on GitHub!
        ↓
12. Ready for Vercel deployment
```

---

## 🎉 You're Almost There!

Once this is complete, you can deploy to Vercel in just a few clicks. See **DEPLOYMENT_GUIDE.md** for the next steps!

---

**Last Updated:** April 4, 2026
**Version:** 1.0
