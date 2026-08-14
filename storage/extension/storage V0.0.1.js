// Name: storage
// ID: tzzostorage
// Description: More usable variables.
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
  const blockIconURI = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxODEuOTgiIGhlaWdodD0iMTgxLjk4IiB2aWV3Qm94PSIwLDAsMTgxLjk4LDE4MS45OCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE0MCwtODApIj48ZyBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiPjxwYXRoIGQ9Ik0xNDUuMDAxLDE3MC45OWMwLC00Ny40OSAzOC40OTgsLTg1Ljk5IDg1Ljk4OSwtODUuOTljNDcuNDksMCA4NS45OSwzOC41IDg1Ljk5LDg1Ljk5YzAsNDcuNDkgLTM4LjUsODUuOTkgLTg1Ljk5LDg1Ljk5Yy00Ny40OTEsMCAtODUuOTksLTM4LjUgLTg1Ljk5LC04NS45OXoiIGZpbGw9IiMwZmJkOGMiIHN0cm9rZT0iIzBkYTU3YSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMTkwLjg1MywyMTguNThjMCwwIC0xOC40MTksLTE2LjE3NiAtMTYuNzUyLC00OS41OTJjMS4zOSwtMjcuODU5IDE5LjU5MiwtNDYuOTMgMTkuNTkyLC00Ni45MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjE4IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjcwLjQ2MSwxMjMuNGMwLDAgMTcuMDUxLDE5Ljk5IDE2LjgwMSw0Ny44NzljLTAuMywzMy40NTIgLTE5LjY0MSw0OC42NDMgLTE5LjY0MSw0OC42NDMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTI0Mi41MjYsMTkzLjA2bC0yNC41NTMsLTQxLjYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIwOS4zMzYsMTkwLjlsNDIuNTQ2LC0zOS40NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjE4IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9nPjwvc3ZnPg=="
  Scratch.translate.setup({
    "zh-cn": {
      name: "储存",
      allTarget: "所有目标",
      thisTarget: "当前目标",
      thisThread: "当前线程",
      blockScope: "块级作用域",
      create: "创建 [variableName] 于 [variableScope]",
      delete: "删除 [variableName]",
      set: "赋值 [variableName]",
    },
    "zh-tw": {
      name: "儲存",
      allTarget: "所有目標",
      thisTarget: "當前目標",
      thisThread: "當前執行緒",
      blockScope: "塊級作用域",
      create: "建立 [variableName] 於 [variableScope]",
      delete: "刪除 [variableName]",
      set: "賦值 [variableName]",
    },
  })
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
        blockIconURI: blockIconURI,
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
              },
            },
          },
          {
            opcode: "set",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({
              id: "set",
              default: "set [variableName]",
            }),
            arguments: {
              variableName: {
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: "get",
            blockType: Scratch.BlockType.REPORTER,
            text: "[variableName]",
            arguments: {
              variableName: {
                type: Scratch.ArgumentType.STRING,
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
                  default: "All Target",
                }),
                value: "allTarget",
              },
              {
                text: Scratch.translate({
                  id: "thisTarget",
                  default: "This Target",
                }),
                value: "thisTarget",
              },
              {
                text: Scratch.translate({
                  id: "thisThread",
                  default: "This Thread",
                }),
                value: "thisThread",
              },
              {
                text: Scratch.translate({
                  id: "blockScope",
                  default: "Block Scope",
                }),
                value: "blockScope",
              },
            ],
          },
        },
      };
    }
    // @ts-ignore
    create(args, util) {
      switch (args.variableScope) {
        case "allTarget":
          const stage = runtime.getTargetForStage();
          if (stage) {
            // @ts-ignore
            const existing = stage.lookupVariableByNameAndType(
              // @ts-ignore
              args.variableName,
              ""
            );
            if (existing) {
              console.warn(
                'A variable named "',
                // @ts-ignore
                args.variableName,
                '" already exists'
              );
              return existing;
            }
            const varId = uid();
            // @ts-ignore
            stage.createVariable(varId, args.variableName, "", false);
          }
          break;
        case "thisTarget":
          const sprite = util.target;
          if (sprite) {
            // @ts-ignore
            const existing = sprite.lookupVariableByNameAndType(
              // @ts-ignore
              args.variableName,
              ""
            );
            if (existing) {
              console.warn(
                'A variable named "',
                // @ts-ignore
                args.variableName,
                '" already exists'
              );
              return existing;
            }
            const varId = uid();
            // @ts-ignore
            sprite.createVariable(varId, args.variableName, "", false);
          }
          break;
        case "thisThread":
          const thread = util.thread;
          if (thread) {
            if (!thread.variables) {
              thread.variables = Object.create(null);
            }
            thread.variables[args.variableName] = "0";
          }
          break;
        case "blockScope":
          console.info("Not Yet Updated");
          break;
        default:
          throw new SyntaxError(`"${args.variableScope}" is not a Scope`);
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
