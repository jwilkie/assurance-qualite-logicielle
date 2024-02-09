/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction",
    description: "Introduction au concept de débogage du code source, à l'identitfication des erreurs et leur correction.",
    keywords: ["débogage", "erreur", "bogue"],
    group: "notes"
}

export default function Page() {
    return <>
        <p>
            Vous lancez le programme que vous venez tout juste d'écrire et il ne fonctionne pas. Un de vos amis lance votre programme et en 
            entrant certaines données, celui-ci plante. Cela vous arrive probablement assez souvent. Même un programmeur expérimenté rencontre 
            ce genre de situation fréquement. La différence, c'est qu'un programmeur expérimenté trouvera très rapidement le problème puisqu'il 
            est habitué de faire du débogage.
        </p>
        <p>
            Le débogage est la capacité d'un programmeur à identifier et à corriger des bogues dans un programme informatique. C'est l'une des 
            compétence de base les plus pratique pour un programmeur. C'est la différence entre prendre 3 heures pour régler un problème ou 3
            minutes. C'est une compétence et un instinct que vous devez développer pour être un bon programmeur.
        </p>
        <p>
            On peut faire du débogage de plusieurs façon. Ce module montre des techniques simples, mais efficace de débogage ne nécessitant 
            aucun outil particulier. Nous verrons tous les outils de débogage dans un autre module.
        </p>
    </>;
}
