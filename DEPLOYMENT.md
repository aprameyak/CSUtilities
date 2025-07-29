# Deployment Guide

This guide covers deploying CSUtilities to various platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your CSUtilities repository

2. **Configure Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live at `https://your-project.vercel.app`

### Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "New site from Git"

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 (or higher)

3. **Deploy**
   - Click "Deploy site"
   - Your site will be live at `https://your-site.netlify.app`

### GitHub Pages

1. **Build the Project**
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Source: "Deploy from a branch"
   - Branch: `main` or `gh-pages`
   - Folder: `/docs` or `/dist`

3. **Alternative: GitHub Actions**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## 🔧 Environment Variables

### Production Environment

Create a `.env.production` file:
```env
VITE_APP_TITLE=CSUtilities
VITE_APP_DESCRIPTION=Computer Science Learning Platform
VITE_APP_URL=https://csutilities.com
```

### Development Environment

Create a `.env.development` file:
```env
VITE_APP_TITLE=CSUtilities (Dev)
VITE_APP_DESCRIPTION=Computer Science Learning Platform - Development
VITE_APP_URL=http://localhost:5173
```

## 📊 Performance Optimization

### Build Optimization

1. **Enable Gzip Compression**
   - Vercel: Automatic
   - Netlify: Add `_headers` file:
     ```
     /*
       Content-Encoding: gzip
     ```

2. **Image Optimization**
   - Use WebP format
   - Implement lazy loading
   - Optimize image sizes

3. **Bundle Analysis**
   ```bash
   npm install --save-dev vite-bundle-analyzer
   ```

### SEO Optimization

1. **Meta Tags**: Already configured in `index.html`
2. **Sitemap**: Available at `/sitemap.xml`
3. **Robots.txt**: Available at `/robots.txt`
4. **Structured Data**: Implemented in HTML

## 🔒 Security Headers

The `vercel.json` file includes security headers:
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## 📱 PWA Support

The app includes PWA features:
- `manifest.json` for app installation
- Service worker ready
- Offline support capabilities

## 🚨 Troubleshooting

### Build Failures

1. **Node Version**
   - Ensure Node.js 18+ is installed
   - Use `.nvmrc` file to specify version

2. **Dependencies**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript Errors**
   ```bash
   npm run type-check
   ```

### Deployment Issues

1. **Vercel**
   - Check build logs in Vercel dashboard
   - Verify `vercel.json` configuration
   - Ensure all dependencies are in `package.json`

2. **Netlify**
   - Check build logs in Netlify dashboard
   - Verify build command and publish directory
   - Check for environment variables

3. **GitHub Pages**
   - Ensure repository is public
   - Check GitHub Actions logs
   - Verify branch and folder settings

## 📈 Monitoring

### Analytics Setup

1. **Google Analytics**
   - Add GA4 tracking code
   - Configure events for user interactions

2. **Performance Monitoring**
   - Use Vercel Analytics
   - Implement Core Web Vitals tracking

### Error Tracking

1. **Sentry Integration**
   ```bash
   npm install @sentry/react @sentry/tracing
   ```

2. **Custom Error Boundary**
   - Implement React error boundaries
   - Log errors to external service

## 🔄 Continuous Deployment

### Automatic Deployments

1. **Vercel**: Automatic on push to main branch
2. **Netlify**: Automatic on push to main branch
3. **GitHub Pages**: Use GitHub Actions workflow

### Manual Deployments

```bash
# Build for production
npm run build

# Preview build
npm run preview

# Deploy to specific platform
# (Follow platform-specific instructions)
```

## 📋 Pre-Deployment Checklist

- [ ] All tests pass
- [ ] Build completes successfully
- [ ] SEO meta tags are correct
- [ ] Sitemap is up to date
- [ ] Robots.txt is configured
- [ ] PWA manifest is valid
- [ ] Security headers are set
- [ ] Performance is optimized
- [ ] Mobile responsiveness tested
- [ ] Cross-browser compatibility verified

## 🎯 Post-Deployment

1. **Verify Deployment**
   - Check all pages load correctly
   - Test all functionality
   - Verify SEO elements

2. **Monitor Performance**
   - Use Lighthouse for performance audit
   - Monitor Core Web Vitals
   - Track user engagement

3. **Set Up Monitoring**
   - Configure error tracking
   - Set up performance monitoring
   - Implement analytics

---

**Ready to deploy! 🚀** 