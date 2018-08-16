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
const collectFolders_1 = require("./collectFolders");
const processFolder_1 = require("./processFolder");
const defaultOptions = {
    lineFeed: '\n'
};
function genSplitMethods(path, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const qwe = getResultFile();
        options = Object.assign({}, defaultOptions, options);
        const folders = yield collectFolders_1.collectFolders(path);
        yield Promise.all(folders.map(folder => processFolder_1.processFolder(folder, options)));
    });
}
exports.genSplitMethods = genSplitMethods;
function getResultFile() {
    let res = '';
    res += setImport('express', 'Router', 'Request');
    res += setImport('../../tools/context', 'IContext');
    res += setImport('../../tools/apiCall', 'apiCall');
    res += setImport('./api/profile.api', 'profileApi');
    res += `${'\n'}${'\n'}`;
    res += `export function profileRoutes(router: Router): void {
    function getNewProfile(context: IContext, req: Request): Promise<any> {
      return profileApi(context).getNewProfile(req.query.associationId);
    }
    router.get('quotingTool/profile/newProfile', apiCall(getNewProfile));
};`;
    res += `${'\n'}`;
    return res;
}
exports.getResultFile = getResultFile;
function setImport(route, ...methods) {
    const methodNames = methods.join(', ');
    return `import { ${methodNames} } from '${route}';${'\n'}`;
}
//# sourceMappingURL=genSplitMethods.js.map