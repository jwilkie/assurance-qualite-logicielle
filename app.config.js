import vs from 'react-syntax-highlighter/dist/cjs/styles/prism/vs'
import vsdark from 'react-syntax-highlighter/dist/cjs/styles/prism/vsc-dark-plus'
import csharp from 'react-syntax-highlighter/dist/cjs/languages/prism/csharp'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import java from 'react-syntax-highlighter/dist/cjs/languages/prism/java'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import trace from 'react-syntax-highlighter/dist/cjs/languages/prism/jsstacktrace'
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash'

const appConfig = {
    domain: 'https://jwilkie.github.io/assurance-qualite-logicielle',
    title: 'Assurance qualité logicielle',
    description: 'Ce cours offre une introduction complète à l\'assurance qualité dans le développement logiciel. Il met l\'accent sur l\'importance d\'une approche rigoureuse et structurée pour garantir la qualité, la fiabilité et la maintenabilité des logiciels. À travers des pratiques éprouvées et des outils adaptés, vous apprendrez à produire des codes de qualité, à optimiser les processus de développement et à collaborer efficacement en équipe. Ce cours constitue également un atout majeur pour vos futurs projets et matières, en étant applicable à plusieurs langages de programmation et utile pour d\'autres domaines techniques.',
    sectionName: 'module',
    code: {
        languages: {
            'csharp': { tag: 'C#', renderer: csharp },
            'js': { tag: 'Javascript', renderer: js },
            'java': { tag: 'Java', renderer: java },
            'css': { tag: 'CSS', renderer: css },
            'trace': { tag: 'Stack trace', renderer: trace },
            'terminal': { tag: 'Terminal', renderer: bash }
        },
        themes: {
            light: vs,
            dark: vsdark
        }
    }
}

export default appConfig;
