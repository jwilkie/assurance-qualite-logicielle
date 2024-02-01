/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Approche fondamentale",
    description: "Présentation de l'approche fondamentale à la programmation éco-responsable.",
    keywords: ["écologie", "gaz à effet de serre", "co2", "green", "vert", "maintenace", "bonnes pratiques", "réutilisation"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Description</h2>
            <p>
                L&apos;approche fondamentale de la programmation éco-responsable repose principalement sur les ressources utilisées lors 
                du développement d&apos;un logiciel. En bref, on veut que le développement d&apos;un logiciel soit le plus écoénergétique 
                possible. Pour ce faire, nous voulons généralement diminuer le temps de développement et en facilier la maintenance.
            </p>
            <p>
                Cette page présente quelques techniques pour réduire la consommation d&apos;énergie durant le développement d&apos;une solution
                numérique.
            </p>
        </section>

        <section>
            <h2>Bonnes pratiques de code</h2>
            <p>
                Une des bases pour faciliter et accélérer la maintenance d&apos;un logiciel est d&apos;utiliser les bonnes pratiques de 
                programmation que nous avons vu dans un module précédant. En effet, un code qui suit les bonnes pratiques est plus 
                facile à modifier, à partager et par conséquant, à maintenir au fil du temps.
            </p>
            <p>
                Les bonnes pratiques de programmation touchent généralement les éléments suivants:
            </p>
            <ul>
                <li>Indentation du code</li>
                <li>Nommage des symboles</li>
                <li>Contrôles des lignes et instructions</li>
                <li>Aération du code</li>
                <li>Commentaires</li>
                <li>Taille des fonctions et fichiers</li>
                <li>Organisation d&apos;un projet</li>
            </ul>
        </section>

        <section>
            <h2>Réutilisation de code</h2>
            <p>
                Un des principe de base de programmation est la réutilisation de code. En réutilisant du code, on accélère le 
                dévelopement et on favorise la maintenance en ayant moins de modifications à faire quand on modifie du code qui est 
                réutilisé.
            </p>
            <p>
                Pour écrire du code réutilisable, nous devons tout de même mettre un peu d&apos;effort. Le code réutilisable passe 
                généralement par la création de fonctions, de classes ou de modules. Il n&apos;est pas nécessairement facile d&apos;écrire du 
                code réutilisable puisqu&apos;il n&apos;y a pas de recette magique, mais avec un peu de pratique et d&apos;expérience, vous verrez 
                que cela devient une seconde nature.
            </p>
        </section>
    </>;
}
