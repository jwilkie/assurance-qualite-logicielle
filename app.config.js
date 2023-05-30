import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs'
import vsdark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp'

const appConfig = {
    domain: 'https://jwilkie.github.io/assurance-qualite-logicielle',
    title: 'Assurance qualité logicielle',
    sectionName: 'module',
    code: {
        languages: {
            'C#': csharp,
        },
        themes: {
            light: vs,
            dark: vsdark
        }
    }
}

export default appConfig;
