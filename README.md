# [projects](http://idugalic.github.io/projects)/d-restaurant-fe-angular

This project is created for educational purposes only. There is no restaurant ;)

It was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx).

It is a front-end part of a 'Restaurant Food To Go' solution. It consumes REST API provided by [https://github.com/idugalic/digital-restaurant/drestaurant-apps/drestaurant-monolith](https://github.com/idugalic/digital-restaurant/tree/master/drestaurant-apps/drestaurant-monolith)

Customers use the website to place food orders at local restaurants. Application/s coordinates a network of couriers who deliver the orders.


## Nrwl Extensions for Angular (Nx)

Nx is an open source toolkit for enterprise Angular applications.

Nx is designed to help you create and build enterprise grade Angular applications. It provides an opinionated approach to application project structure and patterns.

## Architecture overview

Angular apps are modular, and Angular has its own modularity system called NgModules. An NgModule is a container for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities. It can contain components, service providers, and other code files whose scope is defined by the containing NgModule. It can import functionality that is exported from other NgModules, and export selected functionality for use by other NgModules.

NgModule metadata does the following:

 - Declares which components, directives, and pipes belong to the module.
 - Makes some of those components, directives, and pipes public (export) so that other module's component templates can use them.
 - Imports other modules with the components, directives, and pipes that components in the current module need.
 - Provides services that the other application components can use.

There are [five general categories of Angular modules](https://angular.io/guide/module-types):

 - Domain feature modules
 - Routed feature modules
 - Routing modules
 - Service feature modules
 - Widget feature modules

While the categorization describe the use of each type and their typical characteristics, in real world apps, you may see hybrids.

This application is using:

 - Routed (Domain) feature modules
 - Widget (UI) feature modules
 - Shared (Service & Data) feature module

### Routed (Domain) feature modules
Routed feature modules are domain feature modules whose top components are the targets of router navigation routes. 

Routed feature modules don’t export anything because their components never appear in the template of an external component.

 - [Restaurant module](libs/drestaurant-restaurant/src/lib/drestaurant-restaurant.module.ts) 
    - Managing restaurant menus and other information including location and opening hours
    - A restaurant view of an order  (managing the preparation of orders at a restaurant)
 - [Order module](libs/drestaurant-order/src/lib/drestaurant-order.module.ts)
    - Order taking and fulfillment management
 - [Customer module](libs/drestaurant-customer/src/lib/drestaurant-customer.module.ts) 
    - Managing information about customers/consumers
    - A customer view of an order (managing the orders-customer invariants: credit and order limits)
 - [Courier module](libs/drestaurant-courier/src/lib/drestaurant-courier.module.ts)
    - Managing courier information
    - A courier view of an order (managing the delivery of orders)

#### Pub-Sub communication model
The communication between routed (feature) components is event driven, and based on publish-subscribe model. For example a [customer-create.component](libs/drestaurant-customer/src/lib/customer-create/customer-create.component.ts) will trigger an event on successfull creation of a customer (or event will be sent over the 'web socket' from the backend), and [customer-list.component](libs/drestaurant-customer/src/lib/customer-list/customer-list.component.ts) is subscribed to it, so it can re-fetch and refresh a list of customers.

### Widget (UI) feature modules
A widget module makes components, directives, and pipes available to external modules. Many third-party UI component libraries are widget modules.

A widget module should consist entirely of declarations, most of them exported.

A widget module should rarely have providers.

Many, if not most UI Components, can be abstracted into a style guide or UI library for the project. Using a shared style guide for an organization or project improves reusability, increases the consistency between the different views that form a web application and encourages the communication between the different teams. It can also ensure that a unified brand is used across different products. To get ideas of component design and style guide maintainability I recommend Brad Frost’s book Atomic Design.

#### Parent-Child communication model
UI Components behave like pure functions taking in the data via @Input and emitting data via @Output. This allows the majority of our UI to not know the underlying implementation detail of where the data came from. For example a [side-menu-item.component](libs/drestaurant-ui/src/lib/side-menu-item/side-menu-item.component.ts) takes in a @Input of an item to display. This allows the side-menu-item.component component to have the only responsibility of rendering the item when the data is passed to it.

There are downsides to this though. As the feature grows in complexity we may have a deeply nested UI  component structure. Since UI component events only bubble up one level at a time we will have to manually pass up to each parent component. Introducing other sub routed (feature) components (customer-list.component, customer-detail.component, customer-create.component) can help elevate this.

 - [UI module](libs/drestaurant-ui/src/lib/drestaurant-ui.module.ts)


#### Theming our custom widget (UI) components
Our application supports use of potentially unlimited number of [different themes](apps/drestaurant-monolith/src/styles/_theme.scss). This is useful in itself but these themes will only style components provided by the Angular Material library itself.

To extend this functionality for our case, we put our general layout and styling to the [side-menu-item.component.scss](libs/drestaurant-ui/src/lib/side-menu-item/side-menu-item.component.scss), but we also create a new file [_side-menu-item.component.theme.scss](libs/drestaurant-ui/src/lib/side-menu-item/_side-menu-item.component.theme.scss) where we are using style rules which have something to do with the color. In our mixin, we retrieved all the necessary theme variables needed for the styling of our custom component.

To use our custom component theme, we have to include it in the application [styles.scss](apps/drestaurant-monolith/src/styles/styles.scss) file.

### Shared (Service & Data) feature module
Shared module make 'services', data' and 'util' classes available to Widget(UI) and Routed(Domain) modules.

 - [Shared module](libs/drestaurant-shared/src/lib/drestaurant-shared.module.ts)


## Development server

Run `ng serve drestaurant-monolith` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build drestaurant-monolith` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test drestaurant-monolith` to execute the unit tests via [Karma](https://karma-runner.github.io).

You can run tests for each specific library:
 - `ng test drestaurant-order`
 - `ng test drestaurant-restaurant`
 - `ng test drestaurant-customer`
 - `ng test drestaurant-courier`

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
