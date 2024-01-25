import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction",
    description: "Introduction à la documentation de code et à son utilité.",
    keywords: ["documentation", "suggestion", "commentaire", "docs"],
    group: "notes"
}

const docCSharp = 
`/// <summary>
/// Commentaire ici...
/// </summary>`;

const docJava = 
`/**
 * Commentaire ici...
 */`;

const docJS = 
`/**
 * Commentaire ici...
 */`;

export default function Page() {
    return <>
        <p>
            Lorsqu'on parle de documenter le code, on parle généralement de mettre des commentaires dans celui-ci pour faciliter 
            son utilisation ou sa maintenance. On a toutefois complexifier un peu le concept avec les années. En effet, plusieurs 
            entreprises et organisations mettent des pages web indiquant comment utiliser et comment fonctionne leur code. Pour ce 
            faire, les pages web sont généralement généré à partir des commentaires dans le code source. De plus, les éditeurs 
            de code moderne possède la capacité de suggérer ou d'expliquer du code. Encore une fois, cette fonctionnalité nécessite 
            que le code soit bien documenté.
        </p>
        <p>
            Pour que le tout fonctionne, nous devrons écrire certains commentaires sous un certain format particulier. Faute de 
            respecter la syntaxe de cette documentation, nous ne pourrons pas utilisé les outils mentionnées ci-dessus. Il est donc 
            impératif de bien la respecter. Ce format dépend généralement du langage de programmation utilisé. Nous verrons ici 
            comment le faire en C#, Java et Javascript.
        </p>

        <section>
            <h2>Commentaire de documentation</h2>
            <p>
                Dans chaque langage de programmation, on utilise généralement des symboles différents pour indiquer l'ouverture ou 
                la fermeture d'une commentaire de documentation. Les voici dans quelques langage:
            </p>
            <CodeBlock language="csharp">{docCSharp}</CodeBlock>
            <CodeBlock language="java">{docJava}</CodeBlock>
            <CodeBlock language="js">{docJS}</CodeBlock>
        </section>
    </>;
}
