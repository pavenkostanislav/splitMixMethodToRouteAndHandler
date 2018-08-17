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
const genSplitMethods_1 = require("../src/genSplitMethods/genSplitMethods");
const chai_1 = require("chai");
describe('function getResultFile', function () {
    it('should return expected generated structure', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const expected = `import { Router, Request } from 'express';
import { IContext } from '../../tools/context';
import { apiCall } from '../../tools/apiCall';
import { profileApi } from './api/profile.api';


export function profileRoutes(router: Router): void {
    function getNewProfile(context: IContext, req: Request): Promise<any> {
      return profileApi(context).getNewProfile(req.query.associationId);
    }
    router.get('quotingTool/profile/newProfile', apiCall(getNewProfile));
};
`;
            const actual = genSplitMethods_1.getResultFile();
            chai_1.expect(expected).to.be.deep.equal(actual);
        });
    });
});
//# sourceMappingURL=gen.spec.js.map