import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Documentation d'une variable ou constante",
    description: "Présentation de la documentation d'une variable ou constante.",
    keywords: ["documentation", "suggestion", "commentaire", "docs", "variable", "constante"],
    group: "notes"
}

const docCSharp = 
`/// <summary>
/// La largeur du rectangle.
/// </summary>
public double Largeur { get; set; };`;

const docJava = 
`/**
 * La largeur du rectangle.
 */
public double largeur;`;

const docJS = 
`/**
 * La largeur du rectangle.
 * @type {number}
 */
let largeur;`;

export default function Page() {
    return <>
        <section>
            <h2>Variable et constantes à documenter</h2>
            <p>
                Un code source peut contenir de nombreuses variables. Écrire une description à chaque variable que nous créons serait 
                définitivement inutile. Nous documenterons donc uniquement les variables et constantes étant directement dans une 
                classe ou un module. Si une variable est déclaré à l'intérieur d'une fonction, on ne mettra pas de commentaire de documentation. Toutefois, 
                une variable déclaré comme variable de classe devra être documenté.
            </p>
            <p>
                Comme pour les classes, les commentaires de documentation des variables et constantes de classe doivent se trouver 
                juste au dessus de celles-ci.
            </p>
        </section>
        <section>
            <h2>Exemples</h2>
            <p>
                Un commentaire de documentation de variable ou constante pourrait ressembler à ceci:
            </p>
            <CodeBlock language="csharp">{docCSharp}</CodeBlock>
            <CodeBlock language="java">{docJava}</CodeBlock>
            <CodeBlock language="js">{docJS}</CodeBlock>
            <ColoredBox title="À noter">
                Dans les langages non typé où les variables n'ont pas explicitement de type, comme le Javascript, il est généralement 
                bonne pratique d'indiquer le type de la variable dans les commentaires de documentation.
            </ColoredBox>
        </section>
    </>;
}
