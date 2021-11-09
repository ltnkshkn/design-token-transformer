const StyleDictionary = require('style-dictionary')
const baseConfig = require('../config/style.dictionaryconfig.json')


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
    name: 'isCategoryRadius',
    matcher: token => {
        return token.attributes.category === 'radius';
    }
});

StyleDictionary.registerFilter({
    name: 'isCategoryShadow',
    matcher: token => {
        return token.attributes.category === 'effect';
    }
});

StyleDictionary.registerFilter({
    name: 'isCategoryFont',
    matcher: token => {
        return token.attributes.category === 'font';
    }
});

StyleDictionary.registerTransform({
    name: 'radius',
    type: 'value',
    matcher: token => {
        return token.type === 'custom-radius' && token.type !== 0
    },
    transformer: token => {
        return `${token.value.topLeft}px ${token.value.topRight}px ${token.value.bottomLeft}px ${token.value.bottomRight}px`
    },

});

StyleDictionary.registerTransform({
    name: 'shadow',
    type: 'value',
    matcher: token => {
        return token.type === 'custom-shadow' && token.type !== 0
    },
    transformer: token => {
        return `${token.value.offsetX}px ${token.value.offsetY}px ${token.value.spread}px ${token.value.radius}px ${token.value.color}`
    },

});

StyleDictionary.registerTransform({
    name: 'font',
    type: 'value',
    matcher: token => {
        return token.type === 'custom-fontStyle' && token.type !== 0
    },
    transformer: token => {
        return `font-size: ${token.value.fontSize}px;
                text-decoration: ${token.value.textDecoration};
                font-family: '${token.value.fontFamily}';
                font-weight: ${token.value.fontWeight};
                font-style: ${token.value.fontStyle};
                font-stretch: ${token.value.fontStretch};
                letter-spacing: ${token.value.letterSpacing}px;
                line-height: ${token.value.lineHeight}px;`
        },

});

StyleDictionary.registerFormat({
    name: 'shadowFormat',
    formatter: function ({
        dictionary
    }) {
        const shadowList = dictionary.allTokens.filter(token => token.type === 'custom-shadow')
        const shadowListName = shadowList.map(shadow => shadow.attributes.item);
        const shadowUniqueList = shadowList.filter((shadow, index) => shadowListName.indexOf(shadow.attributes.item) === index);

        const mergedShadowScss = shadowUniqueList.map((entry, index) => {
            return `$pp-shadow-${entry.attributes.item}: ${shadowList.filter(values => values.attributes.item === entry.attributes.item).map(shadow => shadow.value)};`
        });

        return mergedShadowScss.join("\n");
    }
})

StyleDictionary.registerFormat({
    name: 'fontFormat',
    formatter: function ({
        dictionary
    }) {
        const fontList = dictionary.allTokens.filter(token => token.type === 'custom-fontStyle')

        const mergedFontScss = fontList.map((token, index) => {
            
            return `%pp-font-${token.attributes.item} { 
                ${token.value} 
            }`
        });

        return mergedFontScss.join("\n");
    }
})

StyleDictionary.registerTransformGroup({
    name: 'custom/scss',
    transforms: StyleDictionary.transformGroup['scss'].concat([
        'radius',
        'font',
        'shadow',
        'size/pxToRem'
    ]),
})

const StyleDictionaryExtended = StyleDictionary.extend(baseConfig)

StyleDictionaryExtended.cleanAllPlatforms()
StyleDictionaryExtended.buildAllPlatforms()