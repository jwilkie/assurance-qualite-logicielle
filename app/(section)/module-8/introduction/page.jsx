/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction",
    description: "Introduction aux techniques avancées d'utilisation du débogueur.",
    keywords: ["débogage", "débogueur", "erreur", "bogue", "outil", "watch", "espion", "condition", "point d'arrêt", "breakpoint"],
    group: "notes"
}

export default function Page() {
    return <>
        <p>
            Le débogueur est un outil puisssant pour nous aider à trouver les erreurs et problèmes dans notre code. Dans le dernier module, 
            nous avons simplement vu la base de l&apos;utilisation du débogueur, soit comment mettre des points d&apos;arrêt et naviguer dans le code 
            lors de son exécution. Dans ce module, nous approfondirons nos connaissances du débogueur en voyant comment utiliser les espions 
            et les point d&apos;arrêt conditionnel.
        </p>
    </>;
}
