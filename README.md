# BackOffice de Gestión de Usuarios

An admin dashboard for managing student meal attendance across multiple schools, built for **Grupo L Argentina**, a group that operates several educational institutions in Buenos Aires. Data shown throughout the app (school names, users, records) is fictional demo data, used only to illustrate the product.

## Scope

This repository contains the **UI/UX design and front-end implementation**. The visual design, component library, and Angular application were built end-to-end as part of a UI Designer & UI Developer engagement.

## Tech Stack

- **Angular 18** + **TypeScript**
- **Tailwind CSS** — utility-first styling
- **RxJS** — reactive state and data flow
- **angular-datatables** — tabular data views (employees, batches, reports)
- **angular-feather** — icon set

## Features

- **Authentication**: login, password recovery, password change, route
  guards (`is-authenticated`, `is-not-authenticated`) protecting
  authorized vs. anonymous layouts
- **Dashboard**: overview of key metrics
- **Employees**: user management, with modal and drawer-based
  create/edit flows
- **Batches**: attendance batch tracking and detail views
- **Consumption reports**: usage/attendance reporting
- **Company**: organization-level settings
- **Template**: an internal showcase of the UI component library
  (inputs, buttons, tables, etc.) used across the app
- Custom error pages (404, 500)

## Project Structure

```
src/app/
  auth/              Login, password recovery/change, guards, services
  dashboard/         Main dashboard view
  employees/         User management (list, modals, drawers)
  batches/           Attendance batches
  company/           Company/organization settings
  consumption-reports/  Reporting views
  error-pages/       404 and 500 pages
  template/          Component library showcase
  shared/            Reusable components, directives, models, services,
                     utils and validators used across features
  _layout/           Authorized / anonymous / error page layout shells
```

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:4200)
npm start

# Production build
npm run build
```

## Notes

A third-party reCAPTCHA integration originally present in the login
and password-recovery flows was removed for this public demo, since
its site key was tied to a domain outside this project's control (see
commit history). The rest of the authentication flow is unaffected.
