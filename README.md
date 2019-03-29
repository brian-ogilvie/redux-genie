# REDUX GENIE

### Summon the genie!

- [Installation](##Installation)
- [Usage](##Usage)
  - [Help](#Help)
  - [Sample](#Sample)
  - [Generate](#Generate)
  - [List](#List)
  - [Update](#Update)
  - [Add](#Add)
- [Contributing](##Contributing)
- [License](##License)

---

**Redux Genie** is a development tool that writes the boilerplate code for your Redux components. You can create a store from scratch, and then inject new files and their corresponding code into your project through the command line interface (CLI). Now you can spend less time managing your Redux store without abstracting its functionality while avoiding some common errors.

For more in-depth information, as well a tutorial for creating a YML file, please visit us at the [Redux Genie Homepage](https://redux-genie.herokuapp.com/).

To look at the code itself, please visit our [Github respository](https://github.com/lovely-libras/redux-genie).

Made for developers creating JavaScript applications with [Redux](https://redux.js.org/).

To learn more about the YML file and the YAML programming language, please [visit their homepage](https://yaml.org/).

Interested in learning to code? Consider [Fullstack Academy of Code](https://www.fullstackacademy.com/), a top ranked coding bootcamp!

---

## Installation

To begin, install Redux Genie globally from the NPM registry:

```bash
$ npm install -g redux-genie
```

With Redux Genie installed, all you need to get started is a YML file.

---

## Usage

The following commands are available for use with **Redux Genie**.

# Help

```bash
genie help
```

Brings up a prompt with descriptions of commands for Redux Genie.

---

# Sample

```bash
genie sample
```

Create a sample _lamp.config.yml_ file.

---

# Generate

```bash
genie generate
```

Generates a store and all associated files based on the paramets set in your existing _lamp.config.yml_ configuration file.

---

# List

```bash
genie ls
```

From the root directory, it will check to see if the store as created.

Then, it prints a visual representation of the store directory, its subdirectories, and all files that were generated by Redux Genie.

---

# Update

```bash
genie update
```

Reads your _lamp.config.yml_ configuration file, and then recreates the store with any changes you may have made.

_CAUTION_: You cannot change the file structure that was created when the store was generated. Update merely adds or removes models, actions, or thunks.

---

# Add

```bash
genie add [-m]/[-M] <model_name> [-a] <action_name> [-t] <thunk_name>
```

The add command allows you to add specific properties or thunks to an existing model, or add an entirely new model with defined properties to an existing store directly from the CLI.

- [-M] - Creates a new model with the coresponding _model_name_.
- [-m] - Edits the properties of the provided _model_name_.
- [-a] - Adds an action with the provided _action_name_.
- [-t] - Adds a thunk with the provided _thunk_name_.
- [--noCRUD] - Creates new model without CRUD.

---

## Contributing

**Redux Genie** was created as the capstone project by **Team Lovely Libras** for [Fullstack Academy's](https://www.fullstackacademy.com/) 1901-FSA-NY cohort.

Team Lovely Libras:

- [Gregory Ardison-Gardner](https://www.linkedin.com/in/ardison-gardner/)
- [Jon Cannon](https://www.linkedin.com/in/jonathan-cannon-62675683/)
- [Amy Kim](https://www.linkedin.com/in/amyarimkim/)
- [Nick Peresguloff](https://www.linkedin.com/in/nicholas-pereslugoff/)

---

## License

[MIT](https://choosealicense.com/licenses/mit/)
