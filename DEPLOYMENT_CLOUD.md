# Cloud Deployment Guide for Personalization Website

This guide explains how to deploy the frontend and backend of your website on free cloud platforms without needing local Node.js/npm setup.

---

## Frontend Deployment on Vercel

1. **Create a Vercel account** at https://vercel.com/signup

2. **Connect your GitHub repository** where your frontend resides (or push frontend code to GitHub).

3. **Configure the project:**
   - Set the root directory to `/frontend`
   - Framework preset: React
   - Build command: `npm run build`
   - Output directory: `build`

4. **Environment variables:**
   - Define the backend API base URL if different from localhost.

5. **Deploy:**
   - Trigger deployment from the dashboard.
   - After deployment, your frontend site URL will be provided.

---

## Backend Deployment on Render or Railway

### Render

1. **Create an account** at https://render.com/signup

2. **Create a new Web Service:**
   - Connect your GitHub repository containing the backend code.
   - Root directory: `/backend`
   - Build command: `npm install`
   - Start command: `npm start`
   - Environment: Node

3. **Configure environment variables** if needed.

4. **Deploy service and note the DNS URL.**

### Railway

1. **Sign up** at https://railway.app/

2. **Create a new project & link your backend Git repo.**

3. **Set up deploy:**
   - Use build/start commands same as above.

4. **Deploy and get your backend service URL.**

---

## Update Frontend API URLs

- Replace all occurrences of `http://localhost:5000` in frontend fetch calls with your deployed backend URL.

---

## Final Testing

- Visit the deployed frontend URL.
- Verify templates, user works, editor features, AI chat function.
- Confirm backend API responses work correctly.

---

This cloud deployment avoids local node.js/npm installation and enables access to your project from anywhere online.
