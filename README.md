# material-ui-mdi
[Community Material Design Icons](https://materialdesignicons.com/) as [Material-UI](https://github.com/callemall/material-ui) SvgIcon components, built with [icon-builder](https://github.com/callemall/material-ui/tree/master/icon-builder) from Material-UI.

Special thanks to [Austin Andrews](https://github.com/Templarian) for managing Material Design Icons.

## Installation

```
npm install material-ui-mdi
```

## Usage

```js
import React from 'react';
import mui from 'material-ui';

import AccountIcon from 'material-ui-mdi/icons/account';

export default class Account extends React.Component {
  render() {
    return (
      <AccountIcon/>
    );
  }
}
```

## Build

```sh
npm run build
```
