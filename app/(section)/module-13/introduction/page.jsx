/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction",
    description: "Présentation de l'approche de base au travail d'équipe avec Git.",
    keywords: ["git", "conflict", "merge", "équipe", "team", "collègue"],
    group: "notes"
}

export default function Page() {
    return <>
        <p>
            Lorsque nous travaillons seul sur un projet, il n&apos;est pas nécessaire de se soucier 
            de ce que d&apos;autres programmeurs pourraient faire. Nous pouvons travailler directement
            comme vu dans les modules précédents. Cependant, lorsque nous travaillons en équipe, il 
            possibles que le code de plusieurs programmeurs entre en conflit. C&apos; là qu&apos;il 
            faut changer notre approche.
        </p>
        <p>
            Le travaille d&apos;équipe avec Git est basé sur l&apos;utilisation de branches. En 
            général, chaque programmeur travaillera sur sa propre branche pour développer une
            fonctionnalité. Une fois la fonctionnalité terminée, les programmeurs fusionneront leurs
            branches dans la branche principale. Si tous les programmeurs d&apos;une équipe 
            travaillent de la sorte, les conflits seront minimisés.
        </p>
        <p>
            Dans ce module, nous verrons comment gérer les branches dans nos projets. Nous verrons
            aussi comment gérer les conflits qui pourraient survenir. Finalement, nous verrons comment
            faire le tout à l&apos;aide de GitHub.
        </p>
    </>;
}
