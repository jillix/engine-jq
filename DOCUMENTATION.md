## Documentation
You can see below the API reference of this module.

### `jq(ev, data)`
Calls a jQuery method.

#### Params
- **Event** `ev`: The event object.
- **Object** `data`: An object containing the following fields:
 - `sel` (String): The jQuery selector.
 - `meth` (String): The jQuery method to call.
 - `args` (Array): The method arguments (default: `[]`).

#### Return
- ****

### `text(data)`

#### Params
- **Object** `data`: An object contaning:
 - `sel` (String): The jQuery selector.
 - `text` (String): The text to set.

