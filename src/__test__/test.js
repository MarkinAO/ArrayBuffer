import ArrayBufferConverter, { getBuffer } from '../js/app';

test('Test ArrayBufferConverter', () => {
  const arrayBuffer = getBuffer();
  const arrayBufferConverter = new ArrayBufferConverter();

  arrayBufferConverter.load(arrayBuffer);
  expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
