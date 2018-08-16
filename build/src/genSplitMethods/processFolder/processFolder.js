"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
function processFolder(folder, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const files = yield _1.getFilesToReexport(folder);
        if (files.length) {
            yield _1.writeReexports(folder, files, options);
        }
        else if (folder.index) {
            yield _1.deleteIndex(folder);
        }
    });
}
exports.processFolder = processFolder;
//# sourceMappingURL=processFolder.js.map