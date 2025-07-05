<div id="top">

<div align="center">
  <h1>RUTINAS</h1>
  <p><em>Transforming routines into engaging, personalized experiences</em></p>

  <img alt="last-commit" src="https://img.shields.io/github/last-commit/DavidBetancurRamirez/Rutinas?style=flat&logo=git&logoColor=white&color=0080ff">
  <img alt="repo-top-language" src="https://img.shields.io/github/languages/top/DavidBetancurRamirez/Rutinas?style=flat&color=0080ff">
  <img alt="repo-language-count" src="https://img.shields.io/github/languages/count/DavidBetancurRamirez/Rutinas?style=flat&color=0080ff">

  <p><em>Built with the tools and technologies:</em></p>
  <img alt="JSON" src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white">
  <img alt="Markdown" src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&logo=Markdown&logoColor=white">
  <img alt="npm" src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&logo=npm&logoColor=white">
  <img alt="Prettier" src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black">
  <img alt="React" src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black">
  <br>
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white">
  <img alt="Expo" src="https://img.shields.io/badge/Expo-000020.svg?style=flat&logo=Expo&logoColor=white">
  <img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white">
  <img alt="Jest" src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&logo=Jest&logoColor=white">
</div>

<br>

> Part of the documentation in this README has been sourced from [Deep Wiki](https://deepwiki.com/DavidBetancurRamirez/Rutinas).
> For more details about the project, you can visit the link above for extended and updated information.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
- [Application Architecture](#application-architecture)
  - [Technology Stack](#technology-stack)
  - [Screen Organization](#screen-organization)
- [User Profile Integration](#user-profile-integration)
  - [Data Structure Mapping](#data-structure-mapping)
- [Routines](#routines)
  - [Educational Content Structure](#educational-content-structure)
- [Game Systems](#game-systems)

---

## Overview

The Rutinas application is a cross-platform mobile app that helps children learn personal hygiene routines through gamified experiences. The app personalizes content based on user demographics (age and gender) and provides three distinct game types for educational engagement. This overview covers the application's architecture, core systems, and component structure.

For detailed information about specific game mechanics, see Quiz Games, Sort Games, and Interactive Games. For navigation and user flow details, see Architecture & Navigation. For component implementation details, see UI Components & Theming.

---

## Getting Started

### Prerequisites

This project requires the following dependencies:

- **Programming Language:** TypeScript
- **Package Manager:** Npm

### Installation

Build Rutinas from the source and install dependencies:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/DavidBetancurRamirez/Rutinas
   ```

2. **Clone the repository:**
   ```sh
   cd Rutinas
   ```

3. **Install the dependencies:** Using <a href="https://www.npmjs.com/">npm</a>:
   ```sh
   npm install
   ```

### Usage

Run the project with <a href="https://www.npmjs.com/">npm</a>:
   ```sh
   npm start
   ```

---

## Application Architecture

The Rutinas application follows a modern React Native architecture pattern using Expo as the development framework. The application is structured around a file-based routing system with centralized state management.

### Technology Stack

| Technology                  | Purpose                | Version     |
|-----------------------------|------------------------|-------------|
| **Expo**                    | Development framework  | ~53.0.0     |
| **React Native**            | Mobile framework       | 0.79.2      |
| **TypeScript**              | Type safety            | ~5.8.3      |
| **Zustand**                 | State management       | ^5.0.3      |
| **Expo Router**             | Navigation             | ^5.1.2      |
| **React Native Reanimated** | Animations             | ~3.17.4     |
| **React Native Gesture Handler** | Touch interactions | ~2.24.0     |

### Screen Organization

Screens are organized into logical sections with specific purposes and navigation patterns:

#### Root Level Screens

- **index**: Welcome screen with app introduction
- **options**: User configuration (age, gender, routine selection)
- **routine_viewer**: Interactive routine step viewer with dynamic filtering

#### Nested Layouts

- **routines/**: Contains routine-specific screens for each hygiene type
- **games/**: Contains game-specific screens for different game types

---

## User Profile Integration

All game types integrate with the global user profile stored in `useAppStore()`. The profile consists of three key attributes:

- **Age:** `'teen'` (12+) or `'child'` (0-11)
- **Gender:** `'male'` or `'female'`
- **Routine:** `'shower'`, `'teeth'`, or `'bathroom'`

This profile data is used to:

1. Route to appropriate Interactive components
2. Filter Quiz questions for age and gender appropriateness
3. Select relevant routine steps for Sort games
4. Apply routine-specific styling and colors

### Data Structure Mapping

The system creates 12 distinct routine variations by combining:

| Age Group   | Gender        | Routine Types              | Total Keys      |
|-------------|--------------|----------------------------|-----------------|
| CHILD, TEEN | MALE, FEMALE | TEETH, SHOWER, BATHROOM    | 2 × 2 × 3 = 12  |

Each combination maps to a specialized step sequence with demographic-appropriate content and images.

---

## Routines

The routine steps data is built around a strongly-typed system that combines user demographics with routine types to create specific step sequences. The core data structure consists of individual steps and demographic-specific step collections.

### Educational Content Structure

The application organizes educational content around three main hygiene routines:

| Routine                    | Color        | Interactive Components                | Quiz Content                | Sort Activities                  |
|----------------------------|--------------|---------------------------------------|-----------------------------|-----------------------------------|
| **Shower (Ducha)**         | Yellow       | Drag-and-drop soap/character interactions | Hygiene knowledge questions | Step ordering activities          |
| **Teeth Brushing (Dientes)** | Orange     | Timer-based brushing simulation       | Dental care quiz questions  | Brushing sequence sorting         |
| **Bathroom (Baño)**        | YeGreenllow  | Interactive bathroom routine          | Hygiene safety questions    | Bathroom step organization        |

---

## Game Systems

The Rutinas application features three distinct game types, each designed to teach hygiene routines through different interaction methods:

| Game Type   | Purpose              | User Interaction                                 |
|-------------|----------------------|--------------------------------------------------|
| Interactive | Hands-on simulation  | Drag-and-drop mechanics with visual feedback      |
| Quiz        | Knowledge assessment | Multiple choice questions with scoring           |
| Sort        | Sequence learning    | Drag-and-drop ordering of routine