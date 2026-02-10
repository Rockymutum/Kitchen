#!/bin/bash
# Deployment Fix Script for Mom's Kitchen

echo "Setting up GitHub remote and pushing to repository..."

# What's your new repository URL?
# Replace this with your actual repository URL
REPO_URL="https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"

# Remove old remote if exists
git remote remove origin 2>/dev/null || true

# Add new remote
git remote add origin $REPO_URL

# Push all files
git push -u origin master --force

echo "Done! Check Vercel - it should deploy successfully now."
