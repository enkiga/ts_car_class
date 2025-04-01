# TypeScript Vehicle Interface and Car Class

This repository demonstrates the implementation of a TypeScript interface `Vehicle` and a class `Car` that implements it.

## Overview

This project was created as an exercise to demonstrate proficiency in:

* Defining TypeScript interfaces.
* Implementing interfaces in classes.
* Using constructors to initialize class properties.
* Compiling TypeScript to JavaScript.
* Running JavaScript code.

## Functionality

The application defines a `Vehicle` interface with properties for `make`, `model`, and `year`, and a `start` method. The `Car` class implements this interface and provides a concrete implementation of the `start` method, logging "Car engine started" to the console.

## Technologies Used

* TypeScript
* Node.js (for running the JavaScript output)

## Setup Instructions

To run this application locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3. **Install TypeScript (if not already installed):**

    ```bash
    npm install -g typescript
    ```

4. **Save the code in a file named `vehicle.ts`**

5. **Compile TypeScript to JavaScript:**

    ```bash
    tsc vehicle.ts
    ```

    This will create a `vehicle.js` file in the same directory.

6. **Run the JavaScript:**

    ```bash
    node vehicle.js
    ```

    This will execute the JavaScript code and output "Car engine started" to the console.

## File Structure

* `vehicle.ts`: Contains the TypeScript code defining the `Vehicle` interface and the `Car` class.
* `vehicle.js`: The JavaScript output after compiling `vehicle.ts`.
* `README.md`: This file.

## Usage

After running the JavaScript code, you will see the output "Car engine started" in your console. This verifies that the `Car` class correctly implements the `Vehicle` interface and the `start` method.
