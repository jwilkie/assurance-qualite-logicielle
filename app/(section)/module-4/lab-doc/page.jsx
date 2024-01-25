import { DownloadBlock, File } from '@/components/DownloadBlock'
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Commentaire de documentation",
    description: "Présentation du laboratoire sur l'écriture de commentaire de documentation.",
    keywords: ["documentation", "suggestion", "commentaire", "docs"],
    group: "labs"
}

export default function Page() {
    return <>
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
                    Dézipper le fichier ZIP.
                </li>
                <li>
                    Ouvrir le dossier du projet dézippé avec Visual Studio Code.
                </li>
                <li>
                    Ouvrir le fichier <IC>Point.cs</IC>. 
                </li>
                <li>
                    Écrire les commentaires de documentation au dessus de la classe, des variables de classe ainsi que des fonctions 
                    et constructeurs dans le fichier <IC>Point.cs</IC>.
                </li>
            </ol>
        </section>

        <section>
            <h2>Téléchargement</h2>

            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/laboratoire-doc.zip"></File>
            </DownloadBlock>
        </section>
    </>;
}
