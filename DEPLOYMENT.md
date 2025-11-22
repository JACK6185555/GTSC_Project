# Deployment Instructions for Personalization Website

This document describes how to deploy the frontend and backend components of the Personalization Website online.

## Frontend Deployment (React)

Recommended hosts: Vercel, Netlify, or any static site hosting

### Steps:
1. In the `frontend` directory, install dependencies:
   ```bash
   npm install
   ```

2. Build the production bundle:
   ```bash
   npm run build
   ```

3. Deploy the generated `build` folder to your static file host.
   - For Vercel or Netlify, you can connect your GitHub repo and they will build and deploy automatically.
   - Alternatively, upload the `build` directory contents manually.

Make sure the frontend app can access the backend API by configuring the backend URL correctly in the frontend requests (currently using `http://localhost:5000` for development).

## Backend Deployment (Node.js/Express)

Recommended hosts: Heroku, Render, Railway, AWS Elastic Beanstalk, DigitalOcean

### Steps:
1. In the `backend` directory, install dependencies:
   ```bash
   npm install
   ```

2. Start your backend server:
   ```bash
   npm start
   ```

3. For deployment:
   - Push your code to your chosen hosting platform after setting up the project.
   - Set environment variable for `PORT` if needed.
   - Ensure CORS is configured if frontend and backend are hosted on different domains.

## Additional Considerations
- To use Grok AI integration, configure API keys and integrations as required (this is currently a placeholder).
- Update frontend API endpoints to point to the deployed backend URL.
- Enable HTTPS for security in production.

---

Follow the platform-specific instructions for detailed deployment steps.
