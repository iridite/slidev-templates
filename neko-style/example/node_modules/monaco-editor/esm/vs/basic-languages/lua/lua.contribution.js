/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.51.0(67d664a32968e19e2eb08b696a92463804182ae4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/


// src/basic-languages/lua/lua.contribution.ts
import { registerLanguage } from "../_.contribution.js";
registerLanguage({
  id: "lua",
  extensions: [".lua"],
  aliases: ["Lua", "lua"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/lua/lua"], resolve, reject);
      });
    } else {
      return import("./lua.js");
    }
  }
});
