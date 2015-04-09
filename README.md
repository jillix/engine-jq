# engine-jq
Call jQuery methods using Engine.

## Installation
Run the following commands to download and install the application:

```sh
$ git clone https://github.com/jillix/engine-jq.git engine-jq
$ cd engine-jq
$ npm install
```

## Documentation
## `jq(ev, data)`
Calls a jQuery method.

### Params 
- **Event** `ev`: The event object.
- **Object** `data`: An object containing the following fields: 
 - `sel` (String): The jQuery selector.
 - `meth` (String): The jQuery method to call.
 - `args` (Array): The method arguments (default: `[]`).

### Return
- **** 



## How to contribute

1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.
