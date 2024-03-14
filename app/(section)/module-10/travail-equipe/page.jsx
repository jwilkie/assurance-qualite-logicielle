/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Méthodologie de travail d'équipe",
    description: "Présentation des problèmes et potentielles solution du travail d'équipe en programmation informatique.",
    keywords: ["équipe", "partage", "fusion", "merge"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Problème du travail d&apos;équipe</h2>
            <p>
                Le travail d&apos;équipe en programmation informatique est tout un défi. En effet, les programmes et solutions 
                informatiques sont de plus en plus grosses et complexes et bien que le développement semble nécessiter plus de programmeurs,
                un travail d&apos;équipe mal synchronisé ou mal géré peut prendre plus de temps que si un seul programmeur avait fait le
                travail. Voici quelques problèmes que les équipes de programmation peuvent rencontrer:
            </p>
            <ul>
                <li>
                    Avoir une version stable du code source.
                </li>
                <li>
                    Partager le code source entre les programmeurs.
                </li>
                <li>
                    Fusionner les changements de plusieurs programmeurs.
                </li>
                <li>
                    Éviter les conflits de code entre les programmeurs.
                </li>
                <li>
                    Garder une trace des changements pour pouvoir revenir en arrière.
                </li>
                <li>
                    Garder une trace des bogues et des problèmes pour éventuellement les corriger.
                </li>
                <li>
                    Garder une liste des tâches à faire et des tâches terminées.
                </li>
            </ul>
            <p>
                Bien que le travail d&apos;équipe présente de nombreux problèmes, une équipe utilisant les bonnes solutions et les bonnes
                pratiques peut se révéler très efficace et productive. Beaucoup plus que si un seul programmeur avait fait le travail.
            </p>
        </section>

        <section>
            <h2>Solutions</h2>
            <p>
                Les problèmes mentionnés ci-dessus peuvent définitivement être résolue à l&apos;aide de différentes solutions logicielles. 
                Entre autre, un logiciel de gestion de projet peut être utilisé pour garder vos listes de taches et de bogues. Un logiciel 
                comme <strong>Jira</strong> peut être utilisé pour celà, mais de nombreuses autres alternatives existent.
            </p>
            <p>
                Pour ce qui est de la gestion du code, un logiciel et serveur de gestion de version est essentiel. Ce genre de logiciel 
                nous permettra de facilement partager et fusionner le code source entre les programmeurs. Il nous permettra aussi de garder 
                une trace des changements et de revenir en arrière si jamais un problème survient. La plupart de ces logiciels intègrent 
                aussi maintenant des outils pour gérer les tâches et les bogues, ce qui en fait des solutions très complètes pour notre 
                travail.
            </p>
            <p>
                Dans les prochains modules, nous explorerons un de ces logiciel, <strong>Git</strong>, qui est devenu le standard dans 
                l&apos;industrie.
            </p>
        </section>
    </>;
}
