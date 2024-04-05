import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Manipulation de branche",
    description: "Présentation d'un laboratoire sur la manipulation de branches pour un projet sur GitHub.",
    keywords: ["git", "github", "conflict", "merge", "équipe", "team", "collègue", "pull request", "merge request"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Description</h2>
            <p>
                Dans ce laboratoire, vous allez devoir créer et manipuler une branche pour un projet qui est 
                hébergé sur GitHub. Vous devrez aussi démontrer votre compréhension des outils que GitHub offre, 
                tel que les <em>pull requests</em> et la revue de code.
            </p>
        </section>

        <section>
            <h2>Marche à suivre</h2>
            <p>
                Suivre les étapes suivantes:
            </p>
            <ol>
                <li>
                    Partager votre nom d&apos;utilisateur GitHub avec votre enseignant pour qu&apos;il puisse vous
                    ajouter comme collaborateur au répertoire du laboratoire.
                </li>
                <li>
                    Aller sur la page GitHub du répertoire fourni par votre enseignant.
                </li>
                <li>
                    Clôner le répertoire sur votre ordinateur.
                </li>
                <li>
                    Créer une nouvelle branche à partir de la branche <IC>main</IC>.
                </li>
                <li>
                    Modifier le fichier <IC>index.html</IC> pour y ajouter votre nom complet à l&apos;endroit 
                    indiqué.
                </li>
                <li>
                    Faire un commit de vos modifications et pousser la branche sur GitHub.
                </li>
                <li>
                    Créer une <em>pull request</em> pour fusionner votre branche dans la branche <IC>main</IC>.
                    <ul>
                        <li>
                            Nommer la <em>pull request</em> par votre nom complet.
                        </li>
                        <li>
                            Ajouter une courte description de vos modifications.
                        </li>
                        <li>
                            Ajouter votre enseignant comme reviewer. Votre enseignant vous donnera son nom
                            d&apos;utilisateur GitHub.
                        </li>
                    </ul>
                </li>
                <li>
                    Ajouter un commentaire à la <em>pull request</em> sur la ligne de code que vous avez modifiée.
                </li>
                <li>
                    Soumettre le lien de la <em>pull request</em> à votre enseignant.
                </li>
            </ol>
        </section>
    </>;
}
