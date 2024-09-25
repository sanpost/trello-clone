# Trello Clone
This project is a clone of the popular task management tool, Trello.

## Live Demo
You can view the live demo of the project [here](https://trello-clone-seven-lake.vercel.app/).

### Features
- Organization creation: Create and manage organizations using Clerk.
- Personal boards: Set up your own boards to manage tasks.
- Task management: Organize tasks within boards, providing a clear overview of what needs to be done.
- User-friendly interface: Designed to be intuitive and easy to use.

### Technologies used
- **Next.js**: A React framework for server-side rendering and generating static websites.
- **React**: A JavaScript library for building user interfaces.
- **Prisma**: An ORM (Object-Relational Mapping) tool for database management.
- **Stripe**: Integrated for handling payments.
- **MySQL**: A relational database management system.
- **Tailwind CSS**: A utility-first CSS framework for styling the application.

## Getting Started
Make sure you have the following installed on your machine:
- Node.js
- npm (Node Package Manager) or yarn
- MySQL

### Instalation
1. Clone the repository:
```sh
git clone https://github.com/sanpost/trello-clone.git
cd trello-clone
```
2. Install dependencies:
```sh
npm install
or
yarn install
```
3. Set up the database:
- Create a MySQL database.
- Configure your database connection in the .env file.
4. Run database migrations:
```sh
npx prisma migrate dev
```
5. Start the development server:
```sh
npm run dev
or
yarn dev
```
Open http://localhost:3000 to view it in the browser.

### Prisma Studio
1. Start Prisma Studio:
```sh
npx prisma studio
```
2. Open http://localhost:5555 to access Prisma Studio in the browser.

## Usage
- **Creating organizations**: Use Clerk to register and manage organizations.
- **Managing boards**: Create boards within your organization to categorize tasks.
- **Organizing tasks**: Add, edit, and move tasks across different boards to keep track of your progress.



