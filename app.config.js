import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs'
import vsdark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

const appConfig = {
    domain: 'https://jwilkie.github.io/assurance-qualite-logicielle',
    title: 'Assurance qualité logicielle',
    sectionName: 'module',
    code: {
        languages: {
            'csharp': { tag: 'C#', renderer: csharp },
            'js': { tag: 'Javascript', renderer: js },
            'css': { tag: 'CSS', renderer: css }
        },
        themes: {
            light: vs,
            dark: vsdark
        }
    }
}

export default appConfig;
