// Name: Storage
// ID: tzzostorage
// Description: Powerful data blocks.
// By: 2001733
// License: MIT AND MPL-2.0

/**
 * This file incorporates code from the TurboWarp/scratch-vm project:
 * @see https://github.com/TurboWarp/scratch-vm/blob/develop/src/util/uid.js
 * The incorporated code is licensed under the Mozilla Public License Version 2.0.
 * You may obtain a copy of the MPL-2.0 License at https://mozilla.org/MPL/2.0/.
 */

// SPDX-License-Identifier: MIT
(function (Scratch) {
  "use strict";
  if (!Scratch.extensions.unsandboxed) {
    alert("storage must be ran unsandboxed!");
    throw new Error("storage must run unsandboxed");
  }
  const iconURI =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxODEuOTgiIGhlaWdodD0iMTgxLjk4IiB2aWV3Qm94PSIwLDAsMTgxLjk4LDE4MS45OCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMxNSwtMTc1KSI+PGcgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMzIwLjAwMSwyNjUuOTljMCwtNDcuNDkgMzguNDk4LC04NS45OSA4NS45ODksLTg1Ljk5YzQ3LjQ5LDAgODUuOTksMzguNSA4NS45OSw4NS45OWMwLDQ3LjQ5IC0zOC41LDg1Ljk5IC04NS45OSw4NS45OWMtNDcuNDkxLDAgLTg1Ljk5LC0zOC41IC04NS45OSwtODUuOTl6IiBmaWxsPSIjMGZiZDhjIiBzdHJva2U9IiMwZGE1N2EiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTQ0NC4wMDgxNCwyMTcuNzI5YzAsMCAxNy4wNTEsMTYuOTkgMTYuODAxLDQ0Ljg3OWMtMC4zLDMzLjQ1MiAtMTkuNjQxLDUxLjY0MyAtMTkuNjQxLDUxLjY0MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMzY3Ljk3MTg2LDMxNC4yNTFjMCwwIC0xNy4wNTEsLTE2Ljk5IC0xNi44MDEsLTQ0Ljg3OWMwLjMsLTMzLjQ1MiAxOS42NDEsLTUxLjY0MyAxOS42NDEsLTUxLjY0MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjIwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMjAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTQyMC40MDcsMjg2Ljc5bC0yOC4wNTMsLTQxLjYiLz48cGF0aCBkPSJNNDI3LjI2MywyNDQuMTlsLTQwLjA0Niw0My40NCIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";
  // Scratch.translate.setup({
  //   "zh-cn": {
  //     name: "储存",
  //     allTarget: "所有目标",
  //     thisTarget: "当前目标",
  //     thisThread: "当前线程",
  //     blockScope: "块级作用域",
  //     create: "创建 [variableName] 于 [variableScope]",
  //     delete: "删除 [variableName]",
  //     set: "赋值 [variableName] 为 [value]",
  //   },
  //   "zh-tw": {
  //     name: "儲存",
  //     allTarget: "所有目標",
  //     thisTarget: "當前目標",
  //     thisThread: "當前執行緒",
  //     blockScope: "塊級作用域",
  //     create: "建立 [variableName] 於 [variableScope]",
  //     delete: "刪除 [variableName]",
  //     set: "賦值 [variableName] 為 [value]",
  //   },
  // });
  const vm = Scratch.vm;
  const runtime = vm.runtime;

  // --- Start of MPL-2.0 Covered Code ---
  // Original code from: TurboWarp/scratch-vm/src/util/uid.js
  // Copyright (c) The TurboWarp Team and other contributors.
  // SPDX-License-Identifier: MPL-2.0
  const soup_ =
    "!#%()*+,-./:;=?@[]^_`{|}~" +
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const uid = function () {
    const length = 20;
    const soupLength = soup_.length;
    const id = [];
    for (let i = 0; i < length; i++) {
      id[i] = soup_.charAt(Math.random() * soupLength);
    }
    return id.join("");
  };
  // --- End of MPL-2.0 Covered Code ---

  // SPDX-License-Identifier: MIT
  class Extension {
    getInfo() {
      return {
        id: "tzzostorage",
        name: Scratch.translate({ id: "name", default: "Storage" }),
        docsURI: "https://extensions.turbowarp.org/storage",
        menuIconURI: iconURI,
        blocks: [
          {
            opcode: "create",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({
              id: "create",
              default: "create [variableName] in [variableScope]",
            }),
            arguments: {
              variableScope: {
                type: Scratch.ArgumentType.STRING,
                menu: "variableScope",
              },
              variableName: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: "delete",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({
              id: "delete",
              default: "delete [variableName]",
            }),
            arguments: {
              variableName: {
                type: Scratch.ArgumentType.STRING,
                menu: "variableNames",
              },
            },
          },
          {
            opcode: "set",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({
              id: "set",
              default: "set [variableName] to [value]",
            }),
            arguments: {
              variableName: {
                type: Scratch.ArgumentType.STRING,
                menu: "variableNames",
              },
              value: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: "get",
            blockType: Scratch.BlockType.REPORTER,
            blockIconURI: iconURI,
            text: Scratch.translate({
              id: "get",
              default: "[variableName]",
            }),
            arguments: {
              variableName: {
                type: Scratch.ArgumentType.STRING,
                menu: "variableNames",
              },
            },
          },
        ],
        menus: {
          variableScope: {
            acceptReporters: true,
            items: [
              {
                text: Scratch.translate({
                  id: "allTarget",
                  default: "all target",
                }),
                value: "allTarget",
              },
              {
                text: Scratch.translate({
                  id: "thisTarget",
                  default: "this target",
                }),
                value: "thisTarget",
              },
              {
                text: Scratch.translate({
                  id: "thisThread",
                  default: "this thread",
                }),
                value: "thisThread",
              },
              {
                text: Scratch.translate({
                  id: "blockScope",
                  default: "block scope",
                }),
                value: "blockScope",
              },
            ],
          },
          variableNames: {
            acceptReporters: true,
            items: "variableNames",
          },
        },
      };
    }
    variableNames() {
      /**
       * @type {string | any[]}
       */
      let variableNames = new Array();
      console.info("Not Yet Updated");
      return variableNames.length ? variableNames : [""];
    }
    // @ts-ignore
    create(args, util) {
      const variableName = Scratch.Cast.toString(args.variableName);
      const variableScope = Scratch.Cast.toString(args.variableScope);
      const validScopes = new Set(["allTarget", "thisTarget", "thisThread", "blockScope"]);
      if (variableName == "") {
        alert('Can not create a variable named ""');
        throw new Error('Can not create a variable named ""');
      } else {
        if (variableScope == "allTarget") {
          const data = runtime.getTargetForStage();
          if (data) {
            const existing = data.lookupVariableByNameAndType(
              variableName,
              ""
            );
            if (existing) {
              console.warn(
                'A variable named "',
                variableName,
                '" already exists'
              );
              return existing;
            }
            const varId = uid();
            // @ts-ignore
            data.createVariable(varId, variableName, "", false);
          }
        }
        if (variableScope == "thisTarget") {
          const data = util.target;
          if (data) {
            const existing = data.lookupVariableByNameAndType(
              variableName,
              ""
            );
            if (existing) {
              console.warn(
                'A variable named "',
                variableName,
                '" already exists'
              );
              return existing;
            }
            const varId = uid();
            data.createVariable(varId, variableName, "", false);
          }
        }
        if (variableScope == "thisThread") {
          const data = util.thread;
          if (data) {
            if (!data.variables) {
              data.variables = Object.create(null);
            }
            data.variables[variableName] = "0";
          }
        }
        if (variableScope == "blockScope") {
          const data = util.thread;
          if (data) {
            if (!data.scopeManager) {
              data.scopeManager = Object.create(null);
            }
          }
          console.info("Not Yet Updated");
        }
        if (!validScopes.has(variableScope)) {
          alert(`"${variableScope}" is not a Scope`);
          throw new SyntaxError(`"${variableScope}" is not a Scope`);
        }
      }
    }
    // @ts-ignore
    delete(args, util) {
      console.info("Not Yet Updated");
    }
    // @ts-ignore
    set(args, util) {
      console.info("Not Yet Updated");
    }
    // @ts-ignore
    get(args, util) {
      console.info("Not Yet Updated");
    }
  }
  Scratch.extensions.register(new Extension());
})(Scratch);