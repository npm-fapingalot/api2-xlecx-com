# xlecx.com API
A API wrapper that reads the HTML of the site and extracts info

This library supports fetching:
- Comic, 
- List of Comic, 
- tags/characters/parodies/catagories/groups/artists

# Install
``` npm install --save api2-xlecx-com ```

# API
```
const XlecxAPI = require('api2-xlecx-com') 
const api = new XlecxAPI();
api.comic.id('7750-sidney-fast-times-rampr-high').then((comic)=> console.log(JSON.stringify(comic, null, 2)));
```
