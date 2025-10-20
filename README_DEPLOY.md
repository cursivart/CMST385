Azure deployment instructions for this repository

This repository contains several small web projects. The `project1` folder is a static HTML/CSS site and can be hosted on Azure Static Web Apps.

Prerequisites
- An Azure account
- GitHub repository with this code pushed to the `main` branch

Create an Azure Static Web App (recommended)
1. In the Azure portal, create a new Static Web App resource.
   - Choose "GitHub" as the deployment source and authenticate.
   - Select the repository `cursivart/CMST385` and the `main` branch.
   - For Build details:
     - App location: /project1
+    - Api location: (leave blank)
+    - App artifact location: (leave blank)
2. Finish creating the resource. Azure will create a GitHub Actions workflow automatically. If you prefer to use the included workflow file, make sure the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret is set in your repository settings.

Using the provided GitHub Actions workflow
- The workflow file is at `.github/workflows/azure-static-web-apps.yml` and will deploy `project1` on push to `main`.
- Add a repository secret named `AZURE_STATIC_WEB_APPS_API_TOKEN` with the deployment token from the Azure Static Web Apps resource (Deployment Center -> Manage deployment token).

Manual deployment using Azure CLI (optional)

# Create a resource group and static web app (example)
az login
az group create --name cmst385-rg --location eastus
az staticwebapp create -n cmst385-swa -g cmst385-rg --source https://github.com/cursivart/CMST385 --location eastus --branch main --app-location project1

Notes
- If your project needs a build step (node, react, etc.) update `app_location` and `output_location` accordingly in the workflow.
- The included workflow uses the official `Azure/static-web-apps-deploy` Action.

Troubleshooting
- If deployment fails, check Actions logs in GitHub and the Deployment Center in the Azure portal.
- Ensure the repo and branch selection in the Azure portal match your GitHub repository.
