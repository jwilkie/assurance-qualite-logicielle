/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Installation d'un outil cloud",
    description: "Présentation du laboratoire sur l'installation d'un outil cloud.",
    keywords: ["cloud", "organisation", "donnée", "one drive", "google drive"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Marche à suivre</h2>
            <ol>
                <li>
                    Choisissez un service cloud pour faire vos backups de fichier. Je vous suggère One Drive, iCloud ou Google Drive.
                </li>
                <li>
                    Installer le service cloud si c&apos;est nécessaire.
                </li>
                <li>
                    Créez-vous un compte sur le service cloud si ce n&apos;est pas déjà fait.
                </li>
                <li>
                    Ajoutez un fichier dans le service cloud à partir de votre ordinateur pour tester que tout fonctionne bien.
                </li>
                <li>
                    Montrez à votre enseignant que le service cloud est bien installé et fonctionnel.
                </li>
            </ol>
        </section>
    </>;
}
