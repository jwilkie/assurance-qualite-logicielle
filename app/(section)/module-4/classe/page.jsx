import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Documentation des classes",
    description: "Présentation de la documentation d'une classe.",
    keywords: ["documentation", "suggestion", "commentaire", "docs", "classe"],
    group: "notes"
}

const docCSharp = 
`/// <summary>
/// Classe représentant un rectangle dans un plan en deux dimensions. Cette 
/// classe permet de calculer l'aire, le périmètre et de tester l'intersection 
/// du rectangle avec divers objets géométriques.
/// </summary>
public class Rectangle { ... }`;

const docJava = 
`/**
 * Classe représentant un rectangle dans un plan en deux dimensions. Cette 
 * classe permet de calculer l'aire, le périmètre et de tester l'intersection 
 * du rectangle avec divers objets géométriques.
 */
public class Rectangle { ... }`;

const docJS = 
`/**
 * Classe représentant un rectangle dans un plan en deux dimensions. Cette 
 * classe permet de calculer l'aire, le périmètre et de tester l'intersection 
 * du rectangle avec divers objets géométriques.
 */
class Rectangle { ... }`;

export default function Page() {
    return <>
        <section>
            <h2>Description d&apos;une classe</h2>
            <p>
                Le commentaire de documentation d&apos;une classe doit se retrouver juste au dessus de la déclaration d&apos;une classe. Ce 
                commentaire doit essentiellement contenir une description de ce que représente la classe, un court résumé de ses 
                différentes fonctionnalités ainsi que des explications de comment l&apos;utiliser si la classe est complexe.
            </p>
        </section>
        <section>
            <h2>Exemples</h2>
            <p>
                Un commentaire de classe pourrait ressembler à ceci:
            </p>
            <CodeBlock language="csharp">{docCSharp}</CodeBlock>
            <CodeBlock language="java">{docJava}</CodeBlock>
            <CodeBlock language="js">{docJS}</CodeBlock>
        </section>
    </>;
}
