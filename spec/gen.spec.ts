import { getResultFile } from '../src/genSplitMethods/genSplitMethods';
import { expect } from 'chai';


describe('function getResultFile', function (): void {
  it('should return expected generated structure', async function (): Promise<void> {
    // arrange
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

    // act
    const actual = getResultFile();

    // assert
    expect(expected).to.be.deep.equal(actual);
  });

});
