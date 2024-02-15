import { DownloadBlock, File } from '@/components/DownloadBlock'
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Utilisation du débogueur",
    description: "Présentation d'un laboratoire sur l'utilisation du débogueur pour identifier et corriger les erreurs dans le code source.",
    keywords: ["débogage", "débogueur", "erreur", "bogue", "outil"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Description</h2>
            <p>
                Ce laboratoire présente un petit programme qui teste si des rectangles dans un plan cartésien entre en collision. On considère 
                que 2 rectangles sont en collision si leur côté se touche ou si un rectangle est à l&apos;intérieur d&apos;un autre.
            </p>
            <p>
                Le projet comporte 2 fichiers:
            </p>
            <ul>
                <li>
                    <IC>Rectangle.cs</IC>, un fichier présentant un Rectangle dans un environnement à 2 dimensions (un plan cartésien). Il 
                    possède entre autre une fonction pour teste la collision avec un autre rectangle.
                </li>
                <li>
                    <IC>Program.cs</IC>, un fichier qui génère 10 rectangles et teste si au moins 2 d&apos;entres eux sont en collision.
                </li>
            </ul>
            <p>
                Le but de ce laboratoire n&apos;est pas de compléter le code. Celui-ci fonctionne déjà. Vous devez plutôt identifier quel rectangle 
                entre en collision avec quel autre rectangle.
            </p>
        </section>

        <section>
            <h2>Marche à suivre</h2>
            <p>
                Suivre les étapes suivantes:
            </p>
            <ol>
                <li>
                    Télécharger le fichier <IC>distribué.zip</IC> ci-dessous.
                </li>
                <li>
                    Dézipper le fichier ZIP dans votre service de cloud à un bon endroit pour rester organisé.
                </li>
                <li>
                    Ouvrir le dossier du projet dézippé avec Visual Studio Code ou Visual Studio.
                </li>
                <li>
                    Utiliser le débogueur pour identifier les rectangles qui sont en collisions. Pour chaque collision, vous devez trouver 
                    l&apos;index ou la lettre identifiant les 2 rectangles dans la collision.
                </li>
            </ol>
        </section>

        <section>
            <h2>Téléchargement</h2>

            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/laboratoire-debogueur.zip"></File>
            </DownloadBlock>
        </section>
    </>;
}
