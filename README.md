<div id="top" class="">

<div align="center" class="text-center">
<h1>RUTINAS</h1>
<p><em>Transforming routines into engaging, personalized experiences</em></p>

<img alt="last-commit" src="https://img.shields.io/github/last-commit/DavidBetancurRamirez/Rutinas?style=flat&amp;logo=git&amp;logoColor=white&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="repo-top-language" src="https://img.shields.io/github/languages/top/DavidBetancurRamirez/Rutinas?style=flat&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="repo-language-count" src="https://img.shields.io/github/languages/count/DavidBetancurRamirez/Rutinas?style=flat&amp;color=0080ff" class="inline-block mx-1" style="margin: 0px 2px;">
<p><em>Built with the tools and technologies:</em></p>
<img alt="JSON" src="https://img.shields.io/badge/JSON-000000.svg?style=flat&amp;logo=JSON&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Markdown" src="https://img.shields.io/badge/Markdown-000000.svg?style=flat&amp;logo=Markdown&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="npm" src="https://img.shields.io/badge/npm-CB3837.svg?style=flat&amp;logo=npm&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Prettier" src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&amp;logo=Prettier&amp;logoColor=black" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="React" src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&amp;logo=React&amp;logoColor=black" class="inline-block mx-1" style="margin: 0px 2px;">
<br>
<img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&amp;logo=TypeScript&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Expo" src="https://img.shields.io/badge/Expo-000020.svg?style=flat&amp;logo=Expo&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="ESLint" src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&amp;logo=ESLint&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
<img alt="Jest" src="https://img.shields.io/badge/Jest-C21325.svg?style=flat&amp;logo=Jest&amp;logoColor=white" class="inline-block mx-1" style="margin: 0px 2px;">
</div>
<br>

> Part of the documentation in this README has been sourced from [Deep Wiki](https://deepwiki.com/DavidBetancurRamirez/Rutinas).
> For more details about the project, you can visit the link above for extended and updated information.


<h2>Table of Contents</h2>
<ul class="list-disc pl-4 my-0">
<li class="my-0"><a href="#overview">Overview</a></li>
<li class="my-0"><a href="#getting-started">Getting Started</a>
<ul class="list-disc pl-4 my-0">
<li class="my-0"><a href="#prerequisites">Prerequisites</a></li>
<li class="my-0"><a href="#installation">Installation</a></li>
<li class="my-0"><a href="#usage">Usage</a></li>
</ul>
</li>

<li class="my-0"><a href="#application-architecture">Application Architecture</a>
<ul class="list-disc pl-4 my-0">
<li class="my-0"><a href="#technology-stack">Technology Stack</a></li>
<li class="my-0"><a href="#screen-organization">Screen Organization</a></li>
</ul>

<li class="my-0"><a href="#user-profile-integration">User Profile Integration</a>
<ul class="list-disc pl-4 my-0">
<li class="my-0"><a href="#data-structure-mapping">Data Structure Mapping</a></li>
</ul>

<li class="my-0"><a href="#routines">Routines</a>
<ul class="list-disc pl-4 my-0">
<li class="my-0"><a href="#educational-content-structure">Educational Content Structure</a></li>
</ul>

<li class="my-0"><a href="#getting-started">Game Systems</a>
</ul>

<hr>
<h2>Overview</h2>
<p>The Rutinas application is a cross-platform mobile app that helps children learn personal hygiene routines through gamified experiences. The app personalizes content based on user demographics (age and gender) and provides three distinct game types for educational engagement. This overview covers the application's architecture, core systems, and component structure.

For detailed information about specific game mechanics, see Quiz Games, Sort Games, and Interactive Games. For navigation and user flow details, see Architecture & Navigation. For component implementation details, see UI Components & Theming.</p>

<hr>
<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<p>This project requires the following dependencies:</p>
<ul class="list-disc pl-4 my-0">
<li class="my-0"><strong>Programming Language:</strong> TypeScript</li>
<li class="my-0"><strong>Package Manager:</strong> Npm</li>
</ul>

<h3>Installation</h3>
<p>Build Rutinas from the source and install dependencies:</p>
<ol>
<li class="my-0">
<p><strong>Clone the repository:</strong></p>
<pre><code class="language-sh">❯ git clone https://github.com/DavidBetancurRamirez/Rutinas
</code></pre>
</li>
<li class="my-0">
<p><strong>Navigate to the project directory:</strong></p>
<pre><code class="language-sh">❯ cd Rutinas
</code></pre>
</li>
<li class="my-0">
<p><strong>Install the dependencies:</strong></p>
</li>
</ol>

<p><strong>Using <a href="https://www.npmjs.com/">npm</a>:</strong></p>
<pre><code class="language-sh">❯ npm install
</code></pre>

<h3>Usage</h3>
<p>Run the project with:</p>
<p><strong>Using <a href="https://www.npmjs.com/">npm</a>:</strong></p>
<pre><code class="language-sh">npm start
</code></pre>
</div>

<hr>
<h2>Application Architecture</h2>
<p>The Rutinas application follows a modern React Native architecture pattern using Expo as the development framework. The application is structured around a file-based routing system with centralized state management.</p>

<h3>Technology Stack</h3>
<table><thead><tr><th>Technology</th><th>Purpose</th><th>Version</th></tr></thead><tbody><tr><td><strong>Expo</strong></td><td>Development framework</td><td>~53.0.0</td></tr><tr><td><strong>React Native</strong></td><td>Mobile framework</td><td>0.79.2</td></tr><tr><td><strong>TypeScript</strong></td><td>Type safety</td><td>~5.8.3</td></tr><tr><td><strong>Zustand</strong></td><td>State management</td><td>^5.0.3</td></tr><tr><td><strong>Expo Router</strong></td><td>Navigation</td><td>^5.1.2</td></tr><tr><td><strong>React Native Reanimated</strong></td><td>Animations</td><td>~3.17.4</td></tr><tr><td><strong>React Native Gesture Handler</strong></td><td>Touch interactions</td><td>~2.24.0</td></tr></tbody></table>

<h3>Screen Organization</h3>
<p>Screens are organized into logical sections with specific purposes and navigation patterns:</p>

<h4>Root Level Screens</h4>
<ul>
<li><strong>index</strong>: Welcome screen with app introduction</li>
<li><strong>options</strong>: User configuration (age, gender, routine selection)</li>
<li><strong>routine_viewer</strong>: Interactive routine step viewer with dynamic filtering</li>
</ul>

<h4>Nested Layouts</h4>
<ul>
<li><strong>routines/</strong>: Contains routine-specific screens for each hygiene type</li>
<li><strong>games/</strong>: Contains game-specific screens for different game types</li>
</ul>

<hr>
<h2>User Profile Integration</h2>
<p>All game types integrate with the global user profile stored in <code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">useAppStore()</code>. The profile consists of three key attributes:</p>

<ul>
<li><strong>Age</strong>: <code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">'teen'</code> (12+) or <code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">'child'</code> (0-11)</li>
<li><strong>Gender</strong>: <code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">'male'</code> or <code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">'female'</code></li>
<li><strong>Routine</strong>: <code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">'shower'</code>, <code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">'teeth'</code>, or <code class="rounded-sm bg-[#e5e5e5] px-[0.25rem] py-[0.20rem] text-xs font-normal leading-[15px] before:hidden after:hidden dark:bg-[#484848]/30">'bathroom'</code></li>
</ul>

<p>This profile data is used to:</p>
<ol>
<li>Route to appropriate Interactive components</li>
<li>Filter Quiz questions for age and gender appropriateness</li>
<li>Select relevant routine steps for Sort games</li>
<li>Apply routine-specific styling and colors</li>
</ol>

<h3>Data Structure Mapping</h3>
<p>The system creates 12 distinct routine variations by combining:</p>
<table><thead><tr><th>Age Group</th><th>Gender</th><th>Routine Types</th><th>Total Keys</th></tr></thead><tbody><tr><td>CHILD, TEEN</td><td>MALE, FEMALE</td><td>TEETH, SHOWER, BATHROOM</td><td>2 × 2 × 3 = 12</td></tr></tbody></table>
<p>Each combination maps to a specialized step sequence with demographic-appropriate content and images.</p>

<hr>
<h2>Routines</h2>
<p>The routine steps data is built around a strongly-typed system that combines user demographics with routine types to create specific step sequences. The core data structure consists of individual steps and demographic-specific step collections.</p>

<h3>Educational Content Structure</h3>
<p>The application organizes educational content around three main hygiene routines:</p>
<table><thead><tr><th>Routine</th><th>Color</th><th>Interactive Components</th><th>Quiz Content</th><th>Sort Activities</th></tr></thead><tbody><tr><td><strong>Shower (Ducha)</strong></td><td>Yellow</td><td>Drag-and-drop soap/character interactions</td><td>Hygiene knowledge questions</td><td>Step ordering activities</td></tr><tr><td><strong>Teeth Brushing (Dientes)</strong></td><td>Orange</td><td>Timer-based brushing simulation</td><td>Dental care quiz questions</td><td>Brushing sequence sorting</td></tr><tr><td><strong>Bathroom (Baño)</strong></td><td>YeGreenllow</td><td>Interactive bathroom routine</td><td>Hygiene safety questions</td><td>Bathroom step organization</td></tr></tbody></table>

<hr>
<h2>Game Systems</h2>
<p>The Rutinas application features three distinct game types, each designed to teach hygiene routines through different interaction methods:</p>

<table><thead><tr><th>Game Type</th><th>Purpose</th><th>User Interaction</th></tr></thead><tbody><tr><td>Interactive</td><td>Hands-on simulation</td><td>Drag-and-drop mechanics with visual feedback</td></tr><tr><td>Quiz</td><td>Knowledge assessment</td><td>Multiple choice questions with scoring</td></tr><tr><td>Sort</td><td>Sequence learning</td><td>Drag-and-drop ordering of routine steps</td></tr></tbody></table>
