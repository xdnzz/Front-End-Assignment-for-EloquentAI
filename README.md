# Eloquent AI -- Embeddable Chat Widget

A modern, responsive, and easy-to-embed chat widget built with **React**
and **TypeScript**.\
Created as part of a technical assessment for a **Senior Front-End
Developer** position.

![Version](https://img.shields.io/badge/version-0.0.1-blue)\
![License](https://img.shields.io/badge/license-UNLICENSED-red)

## 🚀 Features

-   **Easy Integration:** Plug-and-play component with minimal setup.\
-   **Style Isolation:** CSS Modules with fully scoped styling to avoid
    conflicts with host websites.\
-   **Zero-Config Styling:** Styles are injected automatically via
    JavaScript---no need to import CSS files.\
-   **Maintenance Mode:** Visual banner and input blocking when the
    system is offline or under maintenance.\
-   **TypeScript Support:** Fully typed with generated `.d.ts` files.\
-   **Mocked LLM:** Simulated asynchronous AI responses for testing and
    development.

## 📦 Installation

Since this is a private evaluation package, installation must be done
via a `.tgz` file or local linking.

### Option A: Install via Tarball (Recommended)

1.  Locate the generated `.tgz` file in the project root.\
2.  Install it using:

``` bash
npm install ./path/to/eloquent-chat-widget-0.0.1.tgz
```

### Option B: Local Development

Clone the repository and install dependencies:

``` bash
npm install
```

Build the library:

``` bash
npm run build
```

Generate the `.tgz` package:

``` bash
npm pack
```

## 💻 Usage

Import the widget inside your React application:

``` tsx
import { ChatWidget } from 'eloquent-chat-widget';

function App() {
  return (
    <div>
      <h1>My Website</h1>

      {/* The widget will appear fixed at the bottom-right corner */}
      <ChatWidget />
    </div>
  );
}

export default App;
```

## 🧩 Props

  | Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `maintenanceMode` | `boolean` | `false` | Shows a warning banner and disables user input when `true`. |

### Example with Maintenance Mode

``` tsx
<ChatWidget maintenanceMode={true} />
```

## 🛠 Development Scripts

Start the development environment:

``` bash
npm run dev
```

Build for distribution:

``` bash
npm run build
```


## 🧠 Architecture & Decisions

### Approach
The goal was to build a widget that provides a **seamless Developer Experience (DX)** while ensuring robustness for the end-user. The project was structured as a monorepo-style library using **Vite in Library Mode**, ensuring optimal bundling and tree-shaking.

### Key Architectural Decisions
1.  **CSS Injection Strategy:** Instead of forcing the consumer to import a separate CSS file (which is often forgotten), I utilized `vite-plugin-lib-inject-css`. This bundles the styles directly into the JS logic, making the widget truly "plug-and-play".
2.  **Style Isolation:** To strictly adhere to the requirement of not conflicting with host styles, I used **CSS Modules**. This scopes all class names (e.g., `_button_xyz`), guaranteeing that the host's global CSS doesn't break the widget's layout and vice-versa.
3.  **Mocking Strategy:** Implemented a realistic asynchronous layer to mimic LLM latency, ensuring the UI handles loading states and user feedback loops correctly before a real backend is attached.
4.  **Legal Protection:** Configured the `package.json` and internal components to explicitly state the code is for evaluation purposes only, protecting intellectual property.

### Challenges Faced
* **Asset Bundling:** Ensuring that assets (icons) and styles were correctly packaged without external dependencies required fine-tuning the Vite Rollup configuration.
* **Type Definitions:** Generating proper `.d.ts` files for a library requires specific TSConfig settings to ensure the consumer receives full IntelliSense support.


## 📄 License & Notice

**UNLICENSED --- Evaluation Purposes Only**

This software is a technical assignment submitted by **Danilo Diniz**.\
It is provided strictly for evaluation during a recruitment process.\
Commercial use, modification, distribution, or integration into
production environments is strictly prohibited without prior written
consent.


