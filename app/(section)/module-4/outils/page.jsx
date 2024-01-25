/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Ressources et outils",
    description: "Présentation de différentes ressources et outils liés à la documentation du code.",
    keywords: ["documentation", "suggestion", "commentaire", "docs", "ressources", "outils"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Commentaires de documentation plus complexe</h2>
            <p>
                La base montrée dans ce module est généralement suffisante pour être en mesure de générer des commentaires de 
                documentation satisfaisant pour l'industrie. Ceci étant dit, les ces standards de documentation possèdent de 
                nombreuses autres fonctionnalités. Si cela vous intéresse, vous pouvez trouver plus d'information ici:
            </p>
            <ul>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/documentation-comments">
                        C# - Documentation comments
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.oracle.com/ca-en/technical-resources/articles/java/javadoc-tool.html">
                        Java - How to Write Doc Comments for the Javadoc Tool
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://jsdoc.app/">
                        Javascript - JSDoc
                    </a>
                </li>
            </ul>
        </section>

        <section>
            <h2>Génération de documentation</h2>
            <p>
                Chaque langage de programmation a son propre type de commentaire de documentation et par conséquant, son propre outil 
                de génération de documentation pour le web. La génération de documentation web sort du cadre de ce cours, mais voici 
                quelques liens vers les outils nécessaire pour le faire, si cela vous intéresse.
            </p>
            
            <h3>C#</h3>
            <p>
                Microsoft suggère l'utilisation de l'un de 3 produits pour générer la documentation à partir des commentaires de 
                documentation. Il s'agit de Doxygen, Sandcastle et DocFX. Vous pouvez trouver plus d'information sur ces outils ici:
            </p>
            <p>
                <a target="_blank" rel="noopener noreferrer" href="https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/xmldoc/#tools-that-accept-xml-documentation-input">
                    Tools that accept XML documentation input
                </a>
            </p>

            <h3>Java</h3>
            <p>
                Java utilise l'utilitaire Javadoc pour générer sa documentation à partir des commentaires. Cet utilitaire est généralement 
                installé automatiquement lorsque vous avez installé Java sur votre ordinateur. Cet outil s'utilise en ligne de commande. 
                Vous pouvez trouver plus d'information ici:
            </p>
            <p>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.oracle.com/javase/8/docs/technotes/tools/windows/javadoc.html">
                    Javadoc
                </a>
            </p>

            <h3>Javascript</h3>
            <p>
                Javascript utilise l'utilitaire JSDoc pour générer sa documentation à partir des commentaires. On installe généralement 
                cet utilitaire à l'aide de Node.js et NPM, deux outils qui doivent être installé au préalable. Pour avoir plus 
                d'information sur l'utilisation de JSDoc, vous pouvez visiter la page suivante:
            </p>
            <p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/jsdoc/jsdoc">
                    JSDoc - GitHub
                </a>
            </p>
        </section>

        <section>
            <h2>Documentation dans un éditeur de code</h2>
            <p>
                Un des gros avantage des commentaires de documentation est que votre éditeur de code peut les utiliser automatiquement 
                dans ses suggestions et pour vous aider dans l'utilisation de code écrit par d'autres programmeurs. En effet, lors 
                de l'autocomplétion du code ou dans la boîte de suggestion de votre éditeur, vous verrez toujours les descriptions 
                ajouté dans les commentaires de documentation, ce qui vous permettra de rapidement comprendre à quoi sert une 
                certaine variable, fonction ou classe. Dans le cas des fonctions, vous aurez rapidement un descriptif des paramètres 
                nécessaire à l'exécution de la fonction et sa valeur de retour, s'il y en a une.
            </p>
            <p>
                Les bénéfices ne s'arrête pas là. Dépendant du langage de programmation et de votre éditeur de code, celui-ci peut 
                vous suggérer directement certains morceaux de code ou différentes utilisations de fonctions dépendant de vos 
                commentaire de documentation. En bref, juste pour l'utilisation dans votre éditeur, il est hautement bénéfique 
                d'utiliser les commentaires de documentation.
            </p>
        </section>
    </>;
}
