# vue-reform

Simplify your Vue.js forms with wired-up form components that are easy to extend.

Inspired by [Formik](https://github.com/formium/formik).

## Features

- keeps track of form's state (values, validation, etc.)
- reduces the boilerplate
- plug'n'play with custom components

**Notice**: vue-reform uses [vee-validate](https://github.com/logaretm/vee-validate) under the hood for form and field validation.

## Getting started
Install the library with NPM
```
npm install --save vue-reform
```

Register the library globally
```javascript
import VueReform from 'vue-reform';

Vue.use(VueReform);
```

or import components locally
```javascript
import { FormControl, FormField } from 'vue-reform';
```

`FormField` defaults to input component so you can start to build your form right away
```vue
<template>
  <form-control @submit="doFormAction">
    <form-field
      name="firstName"
      label="First name"
      placeholder="First name" />
    <form-field
      name="lastName"
      label="Last name"
      rules="required"
      placeholder="Last name" />
    <form-field
      name="email"
      label="Email"
      rules="required|email"
      placeholder="Last name" />
  </form-control>
</template>
```

# Components

## `Form`

`form` element with bounded `FormControl`'s submit listener.

### Props
- `initialValues: Object` - used to initialize form data

### Events
#### **submit**
Parameters:
- `values: { [name]: value }` 
#### **invalid**
Parameters:
- `errors: { [name]: message }`
- `values: { [name]: value }` 

## `FormField`

Automatically binds `Form` or `FormControl` value and errors based on the `name` prop.

### Props
- `name: String` - used to automatically bind `FormControl` state values to field (value, errors, field meta data)
- `label: String` (optional) - label associated with the field's form control element
- `placeholder: String` (optional) - placeholder for the default input field
- vee-validate's [validation-provider props](https://logaretm.github.io/vee-validate/api/validation-provider.html#props)

### Slots
**label**, **icon**, **input**, **error**

All slots receive following props:
- `value: [String, Number]` - field value, bound through the name prop
- `errors: String[]` - field errors
- `on: { [event]: listener }` - event listeners map that should be attached to a form element

## `FormControl`

Top-level form component that keeps track of form's state.
Form fields are passed using the default slot.
Emits `submit` event with `formBag` argument.

### Props
- `initialValues: Object` - used to initialize form data

### Events
#### **submit**
Parameters:
- `values: { [name]: value }` 
#### **invalid**
- `errors: { [name]: message }`
- `values: { [name]: value }` 

### Slots
#### **default**
Props:
- `values: { [name]: value }`
- `setValue: (name, value) => undefined`
- vee-validate's [validation-observer scoped slot props](https://logaretm.github.io/vee-validate/api/validation-observer.html#scoped-slot-props)

# Custom styling
All elements rendered by `vue-reform` components are given prefixed helper classes that can be targeted.

Here's a list per component:
  - **FormControl**: `reform-form-control`
  - **Form**: `reform-form`
  - **FormField**:
    - root element: `reform-field`
    - `label` wrapper element: `reform-invalid`, `reform-dirty`, `reform-required`, `reform-changed`, `reform-touched`, `reform-pending`
    - control wrapper element: `reform-control`
    
    These are optional as they're given to the default slots:
    - label: `reform-label`
    - default `input` control element: `reform-input`
    - error message: `reform-error`

