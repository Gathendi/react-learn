# React Learning Journey 🚀

Welcome to my **React Learning Journey**! This repository is where I document my daily progress as I learn **React**. Follow along as I dive deeper into React's core concepts and build projects along the way.

Each day, I update this with the new topics I've learned, challenges I've faced, and projects I've built. This is my way of mastering React one step at a time.

---

## Getting Started

### Prerequisites

Before getting started, make sure you have the following installed:

- **Node.js** (v16 or later recommended)
- A code editor like **VSCode**
- **Git** for version control
- Basic knowledge of **HTML**, **CSS**, and **JavaScript**

### Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-learn.git
   ```

2. Navigate into the project directory:

   ```bash
   cd react-learn
   ```

3. Install the necessary dependencies using `pnpm`:

   ```bash
   pnpm install
   ```

4. Start the development server:
   ```bash
   pnpm run dev
   ```

You're now ready to start exploring React!

---

## Learning Plan

Here's the roadmap I'll follow to learn React, and I'll be updating it as I progress:

### 1. **React Basics**

- JSX syntax
- Functional Components
- Props and State
- Event Handling
- Conditional Rendering

### 2. **Advanced Concepts**

- Component Lifecycle
- useState and useEffect Hooks
- Component Composition

### 3. **Routing**

- React Router for navigation
- Multiple Pages Setup

### 4. **State Management**

- Context API
- Redux

### 5. **Form Handling**

- Controlled Components
- Form Validation

### 6. **Styling**

- Tailwind CSS with React
- CSS-in-JS (Styled Components)

### 7. **Testing**

- Unit Testing with Jest
- React Testing Library

### 8. **Building Projects**

- To-Do List App
- Weather App with API Integration

---

## Progress and Topics Learned

### Day 1: **Introduction to React and Components**

**What I Learned:**
- Learned JSX syntax and how it relates to HTML.
- Built my first functional component.
- Passed props to components and managed state.

**Challenges Faced:**
- Struggled with understanding the difference between JSX and HTML, especially when it came to className vs class and camelCase attributes.
- Had difficulty setting up the initial project structure until I found a good template.
- Took some time to grasp the concept of props being read-only and how to properly pass them down.

**Solutions:**
- Created a cheat sheet to help remember JSX differences from HTML.
- Used Create React App to simplify the initial setup process.
- Drew diagrams illustrating prop flow between components to visualize the data direction better.

### Day 2: **State and Props**

**What I Learned:**
- Delved deeper into the `useState` hook.
- Practiced passing props between components.
- Managed state within components.

**Challenges Faced:**
- Encountered state updates not reflecting immediately due to React's asynchronous nature.
- Got confused about when to use props vs state in my components.
- Had trouble with state changes not triggering re-renders as expected.

**Solutions:**
- Learned about the useEffect dependency array and how to properly handle state updates.
- Created a decision tree for when to use props (external data) vs state (internal data).
- Used React DevTools to inspect component state and props to debug render issues.

### Day 3: **Event Handling and Conditional Rendering**

**What I Learned:**
- Implemented event handling (e.g., button click events).
- Used conditional rendering to display different UI elements based on state.

**Challenges Faced:**
- Event handlers losing their 'this' context in class components.
- Conditional rendering creating complex, hard-to-read JSX.
- Had to refactor code multiple times to handle edge cases in my conditional logic.

**Solutions:**
- Switched to arrow functions for class methods to preserve 'this' binding.
- Extracted conditional rendering logic into separate helper functions for cleaner JSX.
- Created unit tests for each conditional branch to ensure all paths work as expected.

---

## Completed Projects

Here are the small projects I've built as I learn:

1. **Project 1: Simple Counter** *(Completed on Day 2)*

   - A basic counter app that increments and decrements a count on button clicks.
   - [View Code](/projects/counter)
   - **Key Challenges:** 
     - Preventing the counter from going below zero
     - Adding a reset button that only appears when count isn't zero

2. **Project 2: Todo List** *(Completed on Day 3)*
   - A todo list where you can add, remove, and mark tasks as complete.
   - [View Code](/projects/todo-list)
   - **Key Challenges:** 
     - Managing unique IDs for each todo item
     - Implementing the edit functionality without losing focus
     - Persisting todos between page refreshes using localStorage

---

## Resources

Here's a list of the resources that are helping me along the way:

- [React Official Docs](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com/)
- [JavaScript to Know for React](https://kentcdodds.com/blog/javascript-to-know-for-react)
- [Common React Mistakes](https://ui.dev/common-mistakes-with-react/)

---

## Weekly Reflections

### Week 1 Reflection:

After my first week of learning React, I'm starting to understand the component-based architecture. The mental model of "UI as a function of state" is beginning to click. I initially struggled with the unidirectional data flow, but drawing out component hierarchies has helped tremendously.

My biggest challenge has been thinking in terms of immutability when updating state. I keep wanting to directly modify arrays and objects, which has caused some bugs. For next week, I need to focus more on proper state management patterns.

---

*This README is a living document and will be updated daily as I progress through my React learning journey.*