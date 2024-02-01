/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Approche structurelle",
    description: "Présentation de l'approche structurelle à la programmation éco-responsable.",
    keywords: ["écologie", "gaz à effet de serre", "co2", "green", "vert", "maintenace", "hébergement", "processeur", "serveur"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Description</h2>
            <p>
                L'approche structurelle de la programmation éco-responsable repose principalement sur les ressources utilisées pour 
                faire fonctionner votre application. En bref, on veut que l'application demande le moins d'énergie possible durant son 
                fonctionnement. Cette approche est probablement la plus complexe puisqu'elle nécessite souvent de structurer notre 
                application de façon à économiser ses traitements, mais aussi d'optimiser chacun des processus pour qu'il soit le plus 
                efficace possible.
            </p>
            <p>
                Cette page présente quelques techniques pour réduire la consommation d'énergie durant l'exécution de vos solutions 
                informatique.
            </p>
        </section>

        <section>
            <h2>Utilisation efficace de serveurs</h2>
            <p>
                La grande majorité des applications modernes sont connectées d'une façon ou d'une autre à l'Internet, ce qui pose 
                quelques enjeux écoénergétique. Pour bien les comprendre, il faut toutefois avoir une certaine connaissance de 
                comment le web fonctionne.
            </p>
            <p>
                En très simplifié, l'Internet fonctionne par le biais de super ordinateur que l'on appelle des serveurs. Les serveurs 
                sont connecté au réseau de l'Internet et roule en permanence pour offrir des services. Essentiellement, quand vous 
                accédez à un site web, vous communiquez avec un serveur pour qu'il vous renvoit des pages HTML, des fichier CSS et du 
                Javascript. Pour qu'un site web soit disponible à toute heure de la journée, son serveur doit fonctionner en 
                permanence. Vous comprendrez que cela peut déjà être un enjeu écoénergétique. De plus, en arrière-plan, les serveurs 
                répondent généralement à de nombreuses requêtes et sont aussi utilisé pour faire d'autres traitement plus complexe, ce
                qui les rendent souvent très énergivore. 
            </p>
            <p>
                Les serveurs seront souvent regroupé à différents endroits dans le monde dans des <em>fermes de serveurs</em>. Une 
                ferme de serveur est essentiellement un bâtiment contenant une très grande quantité de serveurs et où l'on fait la 
                maintenance de ces serveurs.
            </p>
            <p>
                Voici quelques techniques qui sont utilisé pour économiser l'énergie utilisé par les serveurs:
            </p>
            <ul>
                <li>
                    Créer une application qui peuvent fonctionner sur un nombre de serveur flexible. Dans les périodes de grande 
                    utilisation, on peut augmenter le nombre de serveur et le diminuer dans les périodes de faible utilisation.
                </li>
                <li>
                    Utiliser des fermes de serveurs écologique. Certaines fermes de serveurs sont plus écologique que d'autre 
                    de par leur emplacement sur la planète et de leur source énergétique. Par exemple, une ferme de serveur alimentée 
                    par des panneaux solaires et des barrages hydroélectrique est définitivement plus écologique qu'une alimentée par 
                    une usine à charbon. On ne peut pas toujours choisir nos ferme de serveur, mais lorsqu'on peut, il est important 
                    de regarder leur source d'énergie.
                </li>
                <li>
                    Utiliser des technologies et écrire du code maximisant les ressources d'un serveur. Utiliser 2 serveurs est 
                    assurément plus coûteux, autant en argent qu'en énegie, que d'utiliser un seul serveur. Il est donc préférable de 
                    maximiser les ressources de ceux-ci.
                </li>
            </ul>
        </section>

        <section>
            <h2>Écrire du code efficace</h2>
            <p>
                C'est simple à dire et à écrire, mais c'est définitivement très complexe. On veut essentiellement que notre code soit 
                le plus optimal possible pour éviter des consommations énergétiques inutiles. Ici, il n'y a pas de techniques magiques.
                Tout dépends de votre situation, des besoins de vos utilisateurs et des fonctionnalités de votre application.
            </p>
            <p>
                Une seule chose à se rappeler: Essayer d'écrire un code efficace qui fait le moins d'opération possible tout en 
                répondant à vos besoins.
            </p>
        </section>
    </>;
}
