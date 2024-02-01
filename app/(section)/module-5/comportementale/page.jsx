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
                L'approche comportementale de la programmation éco-responsable repose principalement sur les ressources utilisées lors 
                de l'utilisation de votre logiciel par son utilisateur. En bref, on veut que l'utilisateur de votre application utilise 
                le moins d'énergie possible. Pour ce faire, nous voulons simplifier l'utilisation de notre application pour qu'elle 
                soit facile à utiliser et qu'elle performe uniquement les opérations nécessaires.
            </p>
            <p>
                Cette page présente quelques techniques pour réduire la consommation d'énergie durant l'utilisation d'une solution 
                informatique par son utilisateur.
            </p>
        </section>

        <section>
            <h2>Ergonomie d'application</h2>
            <p>
                L'ergonomie d'application est la capacité d'une application à être facile et rapide d'utilisation pour tous. Cela 
                touche donc aussi à l'accessibilité de votre application.
            </p>
            <p>
                Les bonnes pratiques d'ergonomie d'application sont les suivantes:
            </p>
            <ul>
                <li>
                    Chaque fonctionnalité de votre application doit être accessible en un nombre minimal de clic de souris ou
                    d'entrée clavier.
                </li>
                <li>
                    L'interface de l'application doit être claire et facile à comprendre, si possible même sans formation. Les 
                    éléments avec lesquels l'utilisateur peut intéragir doivent être clair et facile d'accès.
                </li>
                <li>
                    L'application doit être accessible. Entre autres elle doit être facilement disponible pour les personnes ayant des 
                    handicaps vu. On voudra généralement que l'application puisse fonctionner avec des lecteurs d'écran et que le choix 
                    des couleurs n'affecte pas les personnes daltonienne.
                </li>
            </ul>
        </section>

        <section>
            <h2>Traitement de données</h2>
            <p>
                Une optimisation que l'on voit de plus en plus fréquement dans les applications est d'être capable de charger ou 
                traiter des données uniquement lorsqu'il en est nécessaire et d'éviter de charger ou traiter les données multiple fois 
                pour rien. Cet économie de traitement est une dépense énergétique de moins pour les ordinateurs et par conséquant est 
                meilleur pour l'environnement.
            </p>
            <p>
                Voici quelques techniques utilisé pour optimiser le chargement et le traitement des données.
            </p>
            <ul>
                <li>
                    Charger les données en différé de l'application uniquement lorsque l'utilisateur en a besoin. Par exemple, dans 
                    un site web, si une image se trouve plus bas dans la page web et qu'elle m'est pas visible pas défaut dans le 
                    navigateur sans défiler vers le bas, on la chargera uniquement si l'utilisateur défile vers le bas. Autrement, 
                    il n'est pas nécessaire de la charger. C'est ce qu'on appelle le <em>lazy loading</em> en anglais.
                </li>
                <li>
                    Sauvegarder les données traitées pour pouvoir les réutiliser. Essentiellement, si on effectue un traitement sur 
                    des données et qu'on pense potentiellement réutiliser le résulat ailleurs, on le sauvegardera en mémoire 
                    temporaire pour éviter d'avoir à refaire tout le calcul. C'est ce qu'on appelle le <em>caching</em> en anglais. 
                </li>
            </ul>
        </section>
    </>;
}
