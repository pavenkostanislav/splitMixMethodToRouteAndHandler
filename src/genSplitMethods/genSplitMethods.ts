import { Options } from '.';
import { collectFolders } from './collectFolders';
import { processFolder } from './processFolder';
const defaultOptions: Options = {
  lineFeed: '\n'
};

export async function genSplitMethods(path: string, options: Options = {}): Promise<void> {
  const qwe =  getResultFile();
  options = { ...defaultOptions, ...options };
  const folders = await collectFolders(path);
  await Promise.all(folders.map(folder => processFolder(folder, options)));
}

export function getResultFile(): string {

  let res = '';
  res += setImport('express', 'Router', 'Request');
  res += setImport('../../tools/context', 'IContext'); // добавить либо алгоритм поиска что добавлять + поискать путь к ней
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

function setImport(route: string, ...methods: string[]): string {
  const methodNames = methods.join(', ');
  return `import { ${methodNames} } from '${route}';${'\n'}`;
}
