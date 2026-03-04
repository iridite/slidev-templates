/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.51.0(67d664a32968e19e2eb08b696a92463804182ae4)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/


// src/basic-languages/clojure/clojure.contribution.ts
import { registerLanguage } from "../_.contribution.js";
registerLanguage({
  id: "clojure",
  extensions: [".clj", ".cljs", ".cljc", ".edn"],
  aliases: ["clojure", "Clojure"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/clojure/clojure"], resolve, reject);
      });
    } else {
      return import("./clojure.js");
    }
  }
});
