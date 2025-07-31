# Contributing to CSUtilities

Thank you for your interest in contributing to CSUtilities! This document provides guidelines for contributing to the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Requesting Changes to Problem Tags](#requesting-changes-to-problem-tags)
- [Code Style Guidelines](#code-style-guidelines)
- [Submitting Changes](#submitting-changes)

## Getting Started

Before contributing, please:

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Test your changes locally
5. Submit a pull request

## Development Setup

1. **Clone your fork:**
   ```bash
   git clone https://github.com/aprameyak/CSUtilities.git
   cd CSUtilities
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## How to Contribute

We welcome contributions in the following areas:

### 🐛 Bug Fixes
- Fix issues in existing functionality
- Improve error handling
- Enhance performance

### ✨ New Features
- Add new DSA problems to the database
- Implement new filtering options
- Add new university or company data
- Create new UI components

### 📚 Documentation
- Improve README and documentation
- Add code comments
- Create tutorials or guides

### 🎨 UI/UX Improvements
- Enhance the visual design
- Improve accessibility
- Add responsive design improvements

## Requesting Changes to Problem Tags

Since problem tags (such as company tags on LeetCode problems) are managed manually to ensure accuracy, **please do not submit direct pull requests for tag changes**.

Instead, if you notice an issue or want to suggest a new tag or modification:

### How to Request Tag Changes

1. **Open a new issue** on this repository
2. **Use the "Problem Tag Request" template** (if available) or clearly specify:
   - The problem number and name
   - The current tags (if any)
   - The suggested tag changes or additions
   - Any relevant sources or reasoning for the change

### Example Issue Format

```
**Problem:** #1 Two Sum

**Current Tags:**
- Companies: Google, Amazon, Meta, Apple
- Topics: Array, Hash Table

**Suggested Changes:**
- Add "Microsoft" to company tags
- Add "Two Pointers" to topics

**Reasoning:**
- Microsoft frequently asks this problem in interviews
- Two Pointers is an alternative solution approach

**Sources:**
- LeetCode discussion forums
- Interview experiences shared on Reddit
```

### What Happens Next

1. **Review Process**: Maintainers will review your request
2. **Verification**: We'll verify the information against reliable sources
3. **Update**: If approved, we'll update the tags in the codebase
4. **Notification**: You'll be notified when the changes are made

### Guidelines for Tag Requests

- **Be specific**: Include problem numbers and exact names
- **Provide sources**: Link to reliable sources when possible
- **Explain reasoning**: Help us understand why the change is needed
- **Be patient**: Manual verification takes time to ensure accuracy

## Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` types when possible

### React Components
- Use functional components with hooks
- Follow the existing component structure
- Use proper prop typing

### Styling
- Use Tailwind CSS classes
- Follow the existing design system
- Ensure responsive design

### File Organization
- Keep components in `src/components/`
- Store types in `src/types/`
- Place data in `src/data/`

## Submitting Changes

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

2. **Push to your fork:**
   ```bash
   git push origin your-feature-branch
   ```

3. **Create a pull request:**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Select your feature branch
   - Fill out the PR template

### Commit Message Format

Use conventional commit format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `style:` for formatting changes
- `refactor:` for code refactoring
- `test:` for adding tests

## Questions or Need Help?

- Open an issue for questions or discussions
- Join our community discussions
- Check existing issues for similar questions

Thank you for contributing to CSUtilities! 🚀 