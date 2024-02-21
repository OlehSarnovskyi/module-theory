export {detectCats, Kittydar};


// no `export` keyword required here
function detectCats(canvas, options) { ...
}

class Kittydar {
...
}


import {flip as flipOmelet} from "eggs.js";


function v1() { ...
}

function v2() { ...
}

export {
  v1 as streamV1,
  v2 as streamV2,
  v2 as streamLatestVersion
};


// default
import _ from "lodash";
import {default as _} from "lodash";

let myObject = {
  field1: value1,
  field2: value2
};
export {myObject as default};

// Or better yet, use this shorthand:
export default {
  field1: value1,
  field2: value2
};
