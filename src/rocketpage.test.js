import launch from './rocketpage';

test('test', () => {
  const result = launch();
  expect(result).toBe(false);
});
