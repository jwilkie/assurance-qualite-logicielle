import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Issues",
    description: "Présentation du langage d'écrire de fichier de texte riche, le Markdown, ainsi que son intégration avec les serveurs Git.",
    keywords: ["git", "serveur", "markdown", "documentation"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Gestion de projet</h2>
            <p>
                Les <em>Issues</em> sont des outils de gestion de tâches et de bogues pour les projets de développement logiciel. 
                Dans un serveur Git comme GitHub et GitLab, un <em>Issue</em> est une tâche à faire ou un problème à résoudre dans notre 
                projet. Un projet contiendra une liste de <em>Issues</em> qui pourront être assignées à des membres de l&apos;équipe 
                pour être fait. Les <em>Issues</em> sont un excellent moyen de garder une trace des tâches à faire et de celles qui ont 
                été faites. Bref, un merveilleux outil de gestion de projet.
            </p>
            <p>
                Sur GitHub, vous pouvez trouver les <em>Issues</em> dans l&apos;onglet <em>Issues</em> de votre projet.
            </p>
        </section>

        <section>
            <h2>Créer un Issue</h2>
            <p>
                Pour créer un <em>Issue</em>, il suffit de cliquer sur le bouton <em>New Issue</em> dans l&apos;onglet <em>Issues</em> de 
                votre projet. Vous pourrez ensuite remplir un formulaire pour décrire la tâche à faire ou le bogue à résoudre. Vous 
                devez y ajouter un titre et une description. Il est possible d&apos;assigner à la tâche ou non. De cette façon, vous 
                pouvez créer une liste de tâches à faire qui seront assigné plus tard. Finalement, vous pouvez ajouter des étiquettes,
                une façon rapide de catégoriser vos <em>Issues</em>.
            </p>
            <p>
                Une fois l&apos;<em>Issue</em> créé, il apparaîtra dans la liste des <em>Issues</em> de votre projet. Vous pourrez alors
                assigner la tâche à un membre de l&apos;équipe, y écrire des commentaires, suivre sa progression et la fermer une fois
                terminée.
            </p>
            <p>
                Vous trouverez plus d&apos;information sur les <em>Issues</em> dans la documentation de GitHub:
            </p>
            <p>
                <a target="_blank" href="https://docs.github.com/en/issues">GitHub Issues</a>
            </p>
        </section>
    </>;
}
