/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction",
    description: "Introduction aux outils de versionnage et au travail d'équipe dans le domaine de la programmation informatique.",
    keywords: ["organisation", "version", "revenir", "équipe", "projet"],
    group: "notes"
}

export default function Page() {
    return <>
        <p>
            Nous entrons maitenant dans une section du cours qui est très importante pour tout programmeur. Nous allons voir comment 
            utiliser certains outils pour travailler en équipe et comment gérer les versions de nos projets. Peu importe la technologie,
            le langage de programmation ou le type de projet, ces outils sont essentiels pour tout programmeur et seront utilisé dans tous 
            les millieux de travail. Vous ne pouvez pas vous permettre de ne pas les connaitre si vous voulez un emploi dans le domaine.
        </p>
        <p>
            Bien que les prochains modules traiteront de ces logiciels et de comment les utiliser, nous voulons d&apos;abord vous amener à
            réfléchir pourquoi ces outils sont utiles aux programmeurs et pourquoi travailler sans eux est une très mauvaise idée.
        </p>
    </>;
}
