import IC from '@/components/InlineCode'
import ColoredBox from '@/components/ColoredBox'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Espions",
    description: "Présentation des espions ou watch, une façon de visualiser une variable peu importe où nous sommes durant un débogage.",
    keywords: ["débogage", "débogueur", "erreur", "bogue", "outil", "watcht", "espion"],
    group: "notes"
}

const expression = 
`// Expression simple
a + b - c

// Expression complexe utilisant des fonctions
(-b + Math.Sqrt(b * b - 4 * a * c)) / (2 * a)

// Chercher des valeurs dans un objet
unObjet.getValeur()

// Chercher des valeurs dans une hierarchie complexe d'objets
unObjet.getValeur().getTruc().nom`;

export default function Page() {
    return <>
        <section>
            <h2>Contenu d&apos;une variable</h2>
            <p>
                Lorsque le code est en pause lors d&apos;une session de débogage, nous allons généralement chercher la valeur d&apos;une variable en 
                survolant son nom avec la souris ou en regardant dans la section <IC>Variables</IC> de l&apos;interface graphique de votre 
                débogueur. Ceci fonctionne bien lorsque le code et simple. On peut toutefois rencontrer certaines situations où il peut être 
                pénible de voir le contenu d&apos;une variable. Par exemple, si la variable est privée dans l&apos;instance d&apos;une classe, si on a une 
                variable statique ou globale ou si la variable est disponible dans une hierarchie complexe de classe, il peut être difficile 
                d&apos;utiliser les techniques vues jusqu&apos;à présent. Dans ce genre de situation, nous utiliserons les espions, 
                nommé <em>watch</em> en anglais, pour nous aider.
            </p>
        </section>

        <section>
            <h2>Ajouter un espion</h2>
            <p>
                Un espion est une façon de voir le contenu d&apos;une variable peu importe où nous sommes dans le code. Les espions s&apos;afficheront 
                dans l&apos;interface <IC>Espionnage</IC> de votre débogueur. Vous pouvez ajouter les espions à l&apos;aide d&apos;une des façon suivante:
            </p>
            <ul>
                <li>
                    Lorsque le code est en pause durant son débogage, sélectionner une variable et faire un clic droit dessus. Cliquer 
                    ensuite sur l&apos;option <em>Ajouter un espion</em>.
                </li>
                <li>
                    Lorsque l&apos;interface du débogueur est ouverte (le débogage n&apos;a pas besoin d&apos;être lancé), aller dans 
                    l&apos;interface <IC>Espionnage</IC> et cliquer sur l&apos;option <em>Ajouter une expression</em>. Vous pouvez ensuite taper 
                    le nom de la variable que vous voulez espionner.
                </li>
            </ul>
            <ColoredBox title="Attention">
                Il est important de comprendre que les variables espionnées sont uniquement disponible dans leur contexte de débogage. Si 
                le débogueur ne fonctionne pas, vous ne pouvez pas voir la valeur des variables. De la même façon, si vous êtes en pause dans 
                un débogage à un endroit où la variable n&apos;est pas accessible, vous ne pourrez pas accéder à la variable.
            </ColoredBox>
        </section>

        <section>
            <h2>Affichage d&apos;expression</h2>
            <p>
                La force des espions n&apos;est pas simplement d&apos;avoir facilement accès à la valeur d&apos;une variable, mais que l&apos;on peut définir 
                n&apos;importe quelle expression à espionner. Vous pouvez essentiellement espionner plus qu&apos;une variable, mais aussi des calculs 
                et opérations plus complexes de code.
            </p>
            <p>
                Pour ajouter une expression comme espion, vous pouvez aller dans l&apos;interface <IC>Espionnage</IC> et cliquer sur 
                l&apos;option <em>Ajouter une expression</em>. Vous pouvez ensuite taper le code ou l&apos;expression que vous voulez espionner. Vous 
                pouvez aussi sélectionner une instruction de code, faire un clic droit dessus et cliquer sur 
                l&apos;option <em>Ajouter un espion</em>.
            </p>
            <p>
                Vous pouvez donc espionner des expressions complexes comme celles-ci:
            </p>
            <CodeBlock language="csharp">{expression}</CodeBlock>
        </section>
    </>;
}
