import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Outillage avec GitHub",
    description: "Présentation d'un laboratoire sur l'utilisation d'outils disponible avec GitHub.",
    keywords: ["git", "github", "licence", "markdown", "documentation", "issues", "hebergement", "pages"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Description</h2>
            <p>
                Dans ce laboratoire, vous allez devoir créer un projet sur GitHub dans le but d&apos;y utiliser plusieurs de ses outils.
                Ce laboratoire vous fera toucher à tout ce qui a été vu dans ce module, soit l&apos;utilisation de licences, 
                l&apos;écriture de Markdown, la gestion de tâches avec les <em>Issues</em> et l&apos;hébergement de site web avec
                GitHub Pages.
            </p>
            <p>
                Puisque vous êtes seul à travailler sur le projet, vous n&apos;aurez pas besoin de créer des branches ou de faire des
                <em>pull requests</em>. Vous pouvez simplement travailler sur la branche <IC>main</IC> de votre projet.
            </p>
        </section>

        <section>
            <h2>Marche à suivre</h2>
            <p>
                Suivre les étapes suivantes:
            </p>
            <ol>
                <li>
                    Créer un projet Git sur votre ordinateur.
                </li>
                <li>
                    Ajouter un fichier <IC>index.html</IC> à votre projet contenant le code de base d&apos;une page web. Dans le corps 
                    de la page, ajouter votre nom. Le titre de la page doit aussi contenir votre nom.
                </li>
                <li>
                    Ajouter un fichier <IC>LICENCE</IC> à votre projet contenant la licence MIT.
                </li>
                <li>
                    Lier le projet à un nouveau répertoire <strong>publique</strong> sur GitHub et pousser-y votre code.
                </li>
                <li>
                    Dans le projet GitHub, créer une <em>Issue</em> indiquant que l&apos;on veut ajouter un fichier de documentation 
                    au projet et assignez-vous cette tâche.
                </li>
                <li>
                    Créer un fichier <IC>README.md</IC> à la racine de votre projet contenant un titre et une courte description du 
                    projet.
                </li>
                <li>
                    Activer GitHub Pages pour votre projet et ajouter le lien vers votre site web dans le fichier <IC>README.md</IC>.
                </li>
                <li>
                    Poussez vos modifications sur GitHub.
                </li>
                <li>
                    Puisque le fichier de documentation est terminé, fermer l&apos;<em>Issue</em> précédemment créé sur GitHub.
                </li>
                <li>
                    Envoyer le lien de votre répertoire GitHub à votre professeur.
                </li>
            </ol>
        </section>
    </>;
}
