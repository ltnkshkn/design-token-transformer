const StyleDictionary = require('style-dictionary')
const baseConfig = require('./config.json')


StyleDictionary.registerFilter({
  name: 'isCategoryColor',
  matcher: token => {
    return token.attributes.category === 'color';
  }
});

StyleDictionary.registerFilter({
  name: 'isCategorySize',
  matcher: token => {
    return token.attributes.category === 'size';
  }
});

StyleDictionary.registerFilter({
  name: 'isCategoryEffect',
  matcher: token => {
     return token.attributes.category === 'effect';
  }
});

StyleDictionary.registerTransform({
  name: 'effect/shadow',
  type: 'value',
  matcher: token => {
    return token.type === 'custom-shadow' && token.type !== 0
  },
  transformer: token => {
    return `${token.value.offsetX}px ${token.value.offsetY}px ${token.value.spread}px ${token.value.radius}px ${token.value.color}`
  },
})

StyleDictionary.registerTransformGroup({
  name: 'custom/scss',
  transforms: StyleDictionary.transformGroup['scss'].concat([
    'effect/shadow',
    'size/pxToRem'
  ]),
})


const StyleDictionaryExtended = StyleDictionary.extend(baseConfig)

StyleDictionaryExtended.buildAllPlatforms()