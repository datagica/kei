const kei = require('./index')

test('kei', () => {
  const translate = kei({
    en: { helloworld: 'hello world' },
    jp: { hello: { world: 'こんにちは世界' } },
  })

  const e = translate('en')
  expect(e.helloworld).toBe('hello world')
  expect(e`helloworld`).toBe('hello world')

  const j = translate('jp')
  expect(j.hello.world).toBe('こんにちは世界')
  expect(j`hello.world`).toBe('こんにちは世界')
})
