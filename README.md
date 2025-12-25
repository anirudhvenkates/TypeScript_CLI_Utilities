# TypeScript Programs

This repository contains two simple TypeScript programs: `hello_world.ts` and `calculator.ts`.

## Setup

Before running these programs, you need to have Node.js and TypeScript installed. If you don't have them, you can install Node.js from [nodejs.org](https://nodejs.org/). Once Node.js is installed, you can install TypeScript globally using npm:

```bash
npm install -g typescript
```

Additionally, for the `hello_world.ts` program to compile without errors regarding `require` and `process`, you need to install Node.js type definitions:

```bash
npm install --save-dev @types/node
```

## Programs

### `hello_world.ts`

This program first prints "Hello World!" to the console. Then, it prompts the user for their name and location, and prints a personalized greeting.

#### How to run:

1. Compile the TypeScript file:
   ```bash
   tsc hello_world.ts
   ```
2. Run the compiled JavaScript file:
   ```bash
   node hello_world.js
   ```

### `calculator.ts`

This program is a simple command-line calculator that supports addition, subtraction, multiplication, division, and exponentiation. It prompts the user for two numbers and an operator, then displays the result.

#### Supported Operators:
- `+`: Addition
- `-`: Subtraction
- `*`: Multiplication
- `/`: Division (handles division by zero)
- `^` or `**`: Exponentiation

#### How to run:

1. Compile the TypeScript file:
   ```bash
   tsc calculator.ts
   ```
2. Run the compiled JavaScript file:
   ```bash
   node calculator.js
   ```

