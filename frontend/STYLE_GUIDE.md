## Code Guidelines for the project

This document outlines best practices for writing code in the project, covering folder structure, naming conventions, and style management in both TypeScript and SCSS. These guidelines aim to maintain consistency, improve readability, and facilitate collaboration across the team.

https://nextjs.org/docs/app/building-your-application/routing/colocation

## 1. Folder Structure

We organize components and styles in a structured manner:

- Common components are placed in the Components folder.
- Subcomponents are organized within their respective folders along with their styles.

```
/Components
/Footer
Footer.tsx
footer.module.scss
/FooterBanner
FooterBanner.tsx
footerBanner.module.scss
```

### Next.js Specific Folder Structure

Following Next.js best practices, the app folder is strictly for pages, layouts, and routing. Other components or logical entities are placed in src under appropriate directories, such as components.

## 2. Naming Conventions

- Component file names: **UpperCamelCase** (e.g., FooterBanner.tsx).
- Hook file names: **lowerCamelCase** (e.g., useSomething.tsx).
- Other file names: **kebab-case**

For more details, refer to this [common practice](https://medium.com/@hiro08gh/next-js-naming-conventions-are-checked-with-eslint-rules-946371d67882#:~:text=Component%20Naming%20Conventions,name%20of%20%20the%20folder%20path.).

## 3. TypeScript Naming Conventions

- Classes, interfaces, types, enums, decorators, type parameters: **UpperCamelCase**.
- Variables, parameters, functions, methods, properties, module aliases: **lowerCamelCase**.
- Global constants (including enum elements): **CONSTANT_CASE**.

### Prop Types

- Props types are declared directly in the component file.
- General or reusable types are placed in a dedicated constants directory.

## 4. SCSS Modules

We use SCSS modules to style components, following these key principles:

### 4.1. Mixins for Reusable Styles

Frequent or repeated styles should be extracted into @mixins to avoid duplication.

```scss
@mixin title {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: $black;
}
```

### 4.2. Use of Variables

Avoid "magic numbers." Use variables for colors, spacing, and dimensions wherever possible:

```scss
$light-green: #3adcb3;
$green: #2ea98a;
$dark-green: #237761;
$mobile: 360px;
$large-mobile: 560px;

.button {
  width: $mobil;
  background: $light-green;
}
```

### 4.3. Combining Styles

To minimize code duplication, styles that share properties should be grouped:

```scss
.header,
.text {
  font-size: 24px;
  color: red;
}
```

### 4.4. Group Media Queries

Instead of scattering media queries within individual selectors, group them together for clarity:

```scss
.button {
  padding: 10px 20px;
  background-color: blue;
}

.header {
  font-size: 24px;
  margin-bottom: 20px;
}

.container {
  max-width: 1200px;
}

@media (max-width: $phone) {
  .button {
    font-size: 10px;
    padding: 4px 8px;
  }

  .header {
    font-size: 18px;
  }

  .container,
  .button {
    max-width: 100%;
  }
}
```

By adhering to these guidelines, we aim to maintain clean, maintainable, and scalable code throughout the project. Consistency in both naming and structure helps improve development speed and collaboration among team members.
