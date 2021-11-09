module.exports = {
    commands: [
        ['components', {
            fileId: 'roOxyPHE0ZSsoFVSkGrqcW',
            onlyFromPages: ['Icons'],
            transformers: [
                require('@figma-export/transform-svg-with-svgo')({
                    plugins: [
                        {
                            convertColors: {
                                currentColor: true
                            }
                            
                        },
                        {
                            removeViewBox: false,
                        },
                        {
                            addAttributesToSVGElement: {
                                attribute: 'style="display: block"'
                            }
                        }
                    ]
                })
            ],
            outputters: [
                require('@figma-export/output-components-as-svg')({
                    output: './src/assets'
                })
            ]
        }],
    ]
}