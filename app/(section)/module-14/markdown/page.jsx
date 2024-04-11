import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Markdown",
    description: "Présentation du langage d'écrire de fichier de texte riche, le Markdown, ainsi que son intégration avec les serveurs Git.",
    keywords: ["git", "serveur", "markdown", "documentation"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Documentation écrite par un programmeur</h2>
            <p>
                La documentation est généralement l&apos;un des aspects les plus négligés d&apos;un projet de développement logiciel. En 
                effet, les programmeurs préfèrent souvent écrire du code plutôt que de la documentation. Toutefois, la documentation est
                essentielle à la compréhension d&apos;un projet par d&apos;autres programmeurs. On veut entre autres savoir comment 
                installer le projet, comment le configurer et comment l&apos;utiliser. 
            </p>
            <p>
                Dans le but de rendre la documentation plus facile à écrire, les programmeurs ont créé un langage d&apos;écriture de
                fichier de texte riche nommé Markdown. Le Markdown nous permet d&apos;écrire du texte simple qui sera traduit dans un 
                fichier à l&apos;affichage complexe similaire à un document Microsoft Word ou Google Docs. Le tout, sans quitter notre 
                éditeur de code. C&apos;est un langage simple à apprendre et très utile pour écrire de la documentation rapidement.
            </p>
            <p>
                Il est primordial de bien documenter un projet avec le Markdown. Ils sont un très bon complément aux commentaires dans
                le code source pour expliquer le fonctionnement du code. Ils permettent aussi de documenter les procédures, les 
                décisions de conception et les choix technologiques du projet.
            </p>
        </section>

        <section>
            <h2>Créer un fichier Markdown</h2>
            <p>
                Pour créer un fichier Markdown, il suffit de créer un fichier texte avec l&apos;extension <IC>.md</IC>. Vous pouvez 
                le créer directement dans votre éditeur de code préféré. Par la suite, vous n&apos;avez qu&apos;à écrire du texte
                et à utiliser les balises Markdown pour formater votre texte. Voici quelques exemples de balises Markdown:
            </p>
            <ul>
                <li>
                    <IC># Titre</IC> pour créer un titre
                </li>
                <li>
                    <IC>**Gras**</IC> pour mettre du texte en gras
                </li>
                <li>
                    <IC>*Italique*</IC> pour mettre du texte en italique
                </li>
                <li>
                    <IC>[Lien](https://example.com)</IC> pour créer un lien vers un autre fichier (markdown ou autre)
                </li>
                <li>
                    <IC>![Image](https://example.com/image.jpg)</IC> pour afficher une image
                </li>
            </ul>
            <p>
                Pour voir la liste complète des balises Markdown, vous pouvez consulter le site web suivant:
            </p>
            <ul>
                <li>
                    <a target="_blank" href="https://www.markdownguide.org/basic-syntax/">Markdown Guide</a> pour la syntaxe de base.
                </li>
                <li>
                    <a target="_blank" href="https://www.markdownguide.org/extended-syntax/">Markdown Guide</a> pour la syntaxe étendue.
                </li>
                <li>
                    <a href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax">
                        Basic writing and formatting syntax
                    </a> pour avoir une idée des options spécifiques à GitHub.
                </li>
            </ul>
        </section>

        <section>
            <h2>Intégration avec les serveurs Git</h2>
            <p>
                Les serveurs Git offrent souvent une intégration avec le Markdown pour faciliter la création de documentation pour un 
                projet. Par exemple, GitHub permet d&apos;afficher les fichiers Markdown directement dans le navigateur pour que tout le
                monde puisse les lire. Cela permet de rendre la documentation accessible à tous les membres de l&apos;équipe.
            </p>
            <p>
                Vous trouverez souvent un fichier <IC>README.md</IC> à la racine d&apos;un projet sur GitHub. Ce fichier contient 
                généralement une description du projet ainsi que des instructions pour l&apos;installation et l&apos;utilisation du 
                projet. De nombreux projets utiliseront aussi un dossier <IC>/docs</IC> dans lequel on regroupe la documentation du 
                projet. La majorité des fichiers Markdown sont écrits dans ce dossier.
            </p>
        </section>

        <section>
            <h2>Utilisation personnelle</h2>
            <p>
                Le Markdown n&apos;est pas seulement utile pour la documentation de projet. Il peut aussi être utilisé pour prendre des 
                notes, écrire des articles de blogue, envoyer des messages dans certains services de messagerie, etc. C&apos;est un 
                langage simple et rapide à écrire qui permet de formater du texte rapidement. Je vous recommande fortement de 
                l&apos;utiliser, entres autres, pour écrire vos notes de cours.
            </p>
            <p>
                Des logiciels comme <a target="_blank" href="https://obsidian.md/">Obsidian</a> peuvent être très utile pour gérer vos
                notes Markdown. Ils offrent des fonctionnalités avancées pour organiser vos notes, les lier entre elles et les 
                rechercher rapidement. Je vous recommande fortement de les explorer!
            </p>
        </section>
    </>;
}
