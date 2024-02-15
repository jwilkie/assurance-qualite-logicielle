/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction",
    description: "Introduction au débogueur, un outil pour aider à l'indentification et à la résolution de bogues.",
    keywords: ["débogage", "débogueur", "erreur", "bogue", "outil"],
    group: "notes"
}

export default function Page() {
    return <>
        <p>
            Lorsqu&apos;on a une bonne idée de comment le code fonctionne, l&apos;utilisation de l&apos;affichage dans la console devient l&apos;un des moyens les 
            plus rapide de faire du débogage. Ceci étant dit, nous ne pouvons pas toujours garantir que l&apos;on connait bien le code. Parfois, 
            on ne maîtrise pas encore bien la technologie utilisée ou nous avons encore un peu de difficulté à utilisé le langage de 
            programmation. Dans ce genre de cas, il est généralement plus facile d&apos;utiliser un outil comme le débogueur.
        </p>
        <p>
            Le débogueur est un outil nous permettant de stopper le code à certains endroits et de le repartir. Il nous permet d&apos;exécuter le 
            code ligne par ligne, à notre vitesse, nous permettant de voir l&apos;effet de chaque instruction. Finalement, il nous permet de voir 
            ce qui se trouve dans vos variables et dans la mémoire de votre programme. Cet outil très pratique est généralement disponible
            dans tous les bons éditeurs de code et nous servira à identifier et corriger nos bogues.
        </p>
    </>;
}
