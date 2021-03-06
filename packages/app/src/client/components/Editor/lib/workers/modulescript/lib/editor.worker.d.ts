/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

declare module "monaco-editor-core/esm/vs/editor/editor.worker" {
  export function initialize(
    callback: (ctx: monaco.worker.IWorkerContext, createData: any) => any
  ): void;
}

declare module "monaco-editor/esm/vs/language/typescript/tsWorker" {
  export class TypeScriptWorker {}
}
