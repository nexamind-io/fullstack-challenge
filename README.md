# Nexamind Fullstack Challenge

This repository contains a starter template for a fullstack challenge. The goal is to implement a Todo application with specific features and requirements.

## Challenge Overview

Your task is to implement a Todo application with the following features:

### Core Features

1. **Todo Overview**

   - Display a list of all tasks
   - Show task details including title, description, due date, status, and priority
   - Implement filtering and sorting capabilities

2. **Task Management**
   - Create new tasks
   - Edit existing tasks
   - Delete tasks
   - Mark tasks as complete/incomplete

### Task Properties

Each task should include:

- Title (required)
- Description (required)
- Due Date (optional)
- Status (Todo/Done)
- Priority (High/Medium/Low)

### Technical Requirements

- Use the existing Next.js setup with App Router
- Implement proper form validation
- Follow Next.js and TypeScript best practices
- Implement proper error handling
- Add loading states for better UX

### Time Constraints

The challenge is designed to be completed within 4-6 hours. This timebox includes:

- Setting up the development environment
- Implementing all required features
- Testing the application
- Creating the video demonstration
- Preparing the submission

While we understand that candidates may need more time due to personal circumstances, we recommend staying within this timeframe to ensure a fair evaluation process.

## Getting Started

1. Clone this repository
2. Create a new private repository on your GitHub account
3. Push the code to your private repository
4. Install dependencies:
   ```bash
   pnpm install
   ```
5. Set up your database:
   ```bash
   cp .env.example .env
   docker compose up -d
   pnpm migrate:dev
   pnpm prisma:seed
   ```
6. Start the development server:
   ```bash
   pnpm dev
   ```

### Available Commands

- `pnpm dev` - Start the development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check for code issues
- `pnpm migrate:dev` - Run Prisma migrations in development
- `pnpm prisma:seed` - Seed the database with initial data
- `pnpm prisma:generate` - Generate Prisma client

## Submission Process

1. **Code Submission**

   - Keep your repository private
   - Ensure all your code is committed and pushed
   - Make sure your repository is clean and well-organized

2. **Video Demonstration**
   Create a concise screen recording video that demonstrates your implementation. Focus on:

   - A brief overview of the implemented features
   - Key technical decisions and their rationale
   - Quick demonstration of the main user flows
   - Any notable improvements or additional features

   Keep your video focused and efficient - demonstrate your ability to communicate technical concepts clearly and concisely.

3. **Submission Details**
   Send the following to the hiring team:
   - Link to your private GitHub repository (invite @sebastianhoitz as collaborator)
   - Link to your video demonstration
   - Any additional notes or documentation you'd like to include

## Evaluation Criteria

Your submission will be evaluated based on:

- Implementation of all required features
- Code quality and organization
- User experience and interface design
- Technical decisions and architecture
- Video demonstration quality and clarity

Good luck with the challenge!
