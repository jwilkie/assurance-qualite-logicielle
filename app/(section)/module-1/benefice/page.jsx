/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Bénéfices du code source bien écrit",
    description: "Présentation des bénéfices et conséquence d'un code source bien organisé et bien écrit.",
    keywords: ["bénéfice", "conséquence", "organisation", "code", "propre"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Bon code source</h2>
            <p>
                Il semble tout à fait normal et évident qu'un programmeur soient en mesure de bien écrire un code source. Ceci étant dit, 
                un bon code source est définitivement subjectif. Plusieurs programmeurs pourraient avoir des visions différentes d'un bon 
                code source. Le marché du travail et la communauté internationale des programmeurs a toutefois défini différentes règles, qui
                même si elles ne sont pas tout à fait claire et précise, devrait être respecté par tout programmeur qui veut avoir un emploi 
                ou travailler sur des projets à source ouvert pour la communauté. Nous verrons plusieurs de ces règles dans les prochains 
                modules, mais voici quelques exemples:
            </p>
            <ul>
                <li>
                    Mettre des commentaires dans le code.
                </li>
                <li>
                    Écrire un code similaire d'un programmeur à l'autre dans l'équipe.
                </li>
                <li>
                    Écrire de la documentation du code.
                </li>
                <li>
                    Organiser les fichiers des projets selon certains standard.
                </li>
            </ul>
            <p>
                Ce genre de pratique peut être légèrement différente d'un milieu de travail à l'autre, mais sera très similaire. Tout les 
                programmeur doivent se conformer aux standards de l'endroit où il travail. Dans un cas où les règles ne sont pas claire et 
                défini, les règles générales vues dans ce cours doivent être appliquées.
            </p>
        </section>
        <section>
            <h2>Bénéfices</h2>
            <p>
                Le respect des bonnes pratiques de programmation et du code source bien écrit par tous les programmeurs nous offre de 
                nombreux bénéfices. En voici plusieurs:
            </p>
            <ul>
                <li>
                    Facilité et rapidité à maintenir et mettre à jour le code.
                </li>
                <li>
                    Facilité et rapidité d'intégration de nouveaux programmeurs à un projet.
                </li>
                <li>
                    Facilité à partager du code.
                </li>
                <li>
                    Éviter les bogues.
                </li>
                <li>
                    Faciliter le débogage du code.
                </li>
            </ul>
            <p>
                Un programmeur écrivant du bon code source sera bien vu par la communauté des programmeurs et aura de bien meilleures chance 
                de se trouver un emploi ou de se faire inviter à travailler sur certains projets à code source ouvert. Un programmeur 
                écrivant un beau code source est aimé par ses collègues programmeurs. Un programmeur écrivant bien son code source est un bon 
                programmeur.
            </p>
            <p>
                Soyez un bon programmeur.
            </p>
        </section>
    </>;
}
