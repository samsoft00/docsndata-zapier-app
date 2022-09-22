import { Bundle, createAppTester, tools } from 'zapier-platform-core';

import App from '../index';

const appTester = createAppTester(App);
tools.env.inject();
/*
describe('model', () => {
  test('list models', async () => {
    const bundle = { inputData: {} };
    const results = (await appTester(
      App.triggers.project.operation.perform,
      bundle
    )) as Array<object>;
    expect(results.length).toBeGreaterThan(0);
    const firstMovie = results[0];
    expect(firstMovie).toMatchObject({
      id: '1',
      title: 'title 1',
    });
  });
});
*/