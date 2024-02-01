/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Approche comportementale",
    description: "Présentation de l'approche comportementale à la programmation éco-responsable.",
    keywords: ["écologie", "gaz à effet de serre", "co2", "green", "vert", "ergonomie", "intéraction"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Description</h2>
            <p>
                L&apos;approche comportementale de la programmation éco-responsable repose principalement sur les ressources utilisées lors 
                de l&apos;utilisation de votre logiciel par son utilisateur. En bref, on veut que l&apos;utilisateur de votre application utilise 
                le moins d&apos;énergie possible. Pour ce faire, nous voulons simplifier l&apos;utilisation de notre application pour qu&apos;elle 
                soit facile à utiliser et qu&apos;elle performe uniquement les opérations nécessaires.
            </p>
            <p>
                Cette page présente quelques techniques pour réduire la consommation d&apos;énergie durant l&apos;utilisation d&apos;une solution 
                informatique par son utilisateur.
            </p>
        </section>

        <section>
            <h2>Ergonomie d&apos;application</h2>
            <p>
                L&apos;ergonomie d&apos;application est la capacité d&apos;une application à être facile et rapide d&apos;utilisation pour tous. Cela 
                touche donc aussi à l&apos;accessibilité de votre application.
            </p>
            <p>
                Les bonnes pratiques d&apos;ergonomie d&apos;application sont les suivantes:
            </p>
            <ul>
                <li>
                    Chaque fonctionnalité de votre application doit être accessible en un nombre minimal de clic de souris ou
                    d&apos;entrée clavier.
                </li>
                <li>
                    L&apos;interface de l&apos;application doit être claire et facile à comprendre, si possible même sans formation. Les 
                    éléments avec lesquels l&apos;utilisateur peut intéragir doivent être clair et facile d&apos;accès.
                </li>
                <li>
                    L&apos;application doit être accessible. Entre autres elle doit être facilement disponible pour les personnes ayant des 
                    handicaps vu. On voudra généralement que l&apos;application puisse fonctionner avec des lecteurs d&apos;écran et que le choix 
                    des couleurs n&apos;affecte pas les personnes daltonienne.
                </li>
            </ul>
        </section>

        <section>
            <h2>Traitement de données</h2>
            <p>
                Une optimisation que l&apos;on voit de plus en plus fréquement dans les applications est d&apos;être capable de charger ou 
                traiter des données uniquement lorsqu&apos;il en est nécessaire et d&apos;éviter de charger ou traiter les données multiple fois 
                pour rien. Cet économie de traitement est une dépense énergétique de moins pour les ordinateurs et par conséquant est 
                meilleur pour l&apos;environnement.
            </p>
            <p>
                Voici quelques techniques utilisé pour optimiser le chargement et le traitement des données.
            </p>
            <ul>
                <li>
                    Charger les données en différé de l&apos;application uniquement lorsque l&apos;utilisateur en a besoin. Par exemple, dans 
                    un site web, si une image se trouve plus bas dans la page web et qu&apos;elle m&apos;est pas visible pas défaut dans le 
                    navigateur sans défiler vers le bas, on la chargera uniquement si l&apos;utilisateur défile vers le bas. Autrement, 
                    il n&apos;est pas nécessaire de la charger. C&apos;est ce qu&apos;on appelle le <em>lazy loading</em> en anglais.
                </li>
                <li>
                    Sauvegarder les données traitées pour pouvoir les réutiliser. Essentiellement, si on effectue un traitement sur 
                    des données et qu&apos;on pense potentiellement réutiliser le résulat ailleurs, on le sauvegardera en mémoire 
                    temporaire pour éviter d&apos;avoir à refaire tout le calcul. C&apos;est ce qu&apos;on appelle le <em>caching</em> en anglais. 
                </li>
            </ul>
        </section>
    </>;
}
