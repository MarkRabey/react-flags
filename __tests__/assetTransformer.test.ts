import {process} from '../assetsTransformer';

describe('Jest assetsTransformer', () => {
  test('process() returns expected string value', () => {
    const result = process(null, 'test', null, null);
    console.log({result});

    expect(result).toEqual('module.exports = "test";');
  });
});
