/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction",
    description: "Présentation des outils supplémentaires disponible avec les serveurs Git comme GitHub.",
    keywords: ["git", "serveur", "markdown", "tâche", "issues", "documentation", "hébergement", "licence"],
    group: "notes"
}

export default function Page() {
    return <>
        <p>
            Les serveurs Git offrent généralement des outils supplémentaires pour faciliter la collaboration entre les membres d&apos;une 
            équipe de développeurs. En fait, une des raisons principale pour laquelle les serveurs de GitHub sont si populaires est leur 
            panoplie d&apos;outils pour gérer, documenter et déployer un projet de développement logiciel. C&apos;est aussi la raison 
            pour laquelle les serveurs de GitLab compétionnent avec GitHub en offrant des outils similaires.
        </p>
        <p>
            Dans ce module, nous effleurerons que quelques-uns de ces outils supplémentaires pour vous donner un aperçu de ce qui est
            possible avec les serveurs Git. Nous parlerons de la documentation avec le Markdown, de la gestion des tâches et des bogues
            avec les issues, de l&apos;hébergement de site web avec GitHub Pages et de la gestion des licences logicielles.
        </p>
    </>;
}
