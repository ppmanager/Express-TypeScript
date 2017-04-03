# Express-TypeScript
Simple project bootstrap for ExpressJS made of TypeScript

## Installation

```shell
# Install 'express' and '@types/express'
# '@types/express' is for TypeScript recognition of the express package
npm install

# Build the project (compile TypeScript files in 'src' folder to JavaScript into the 'bin' folder)
npm run build
```

## Usage

### One-shot Compilation

Compile the project and leave :

```shell
npm run build
```

### Automatic Compilation (watch)

Compile the project everytime a file is changed :

```shell
npm run dev
```

### Run the server

```shell
npm start
```

## Project details

```shell
src            # Source files (TS)
|- app         # Classes and functions specific for this project
|- framework   # Common classes and functions for use in different projects
|- index.ts    # Entry point of the server
config.json    # Configuration file of the server
```

You can look at the files in `src/app` and `app/framework`, they are very simple and light, feel free to edit them.
