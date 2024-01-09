import { DownloadBlock, File } from "@/components/DownloadBlock";
import IC from "@/components/InlineCode";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Plus de révision de code source",
    description: "Présentation d'un autre laboratoire sur la révision du code source pour qu'il respecte les conventions.",
    keywords: ["code", "propre", "convention", "révision", "corriger", "correction"],
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
                    Dézipper le fichier ZIP dans votre service de cloud à un bon endroit pour rester organisé.
                </li>
                <li>
                    Ouvrir le dossier du projet dézippé avec Visual Studio Code.
                </li>
                <li>
                    Corriger le code du fichier <IC>Program.cs</IC> pour qu'il respecte les règles vues dans ce module et qu'il 
                    soit considéré comme du bon et beau code.
                </li>
            </ol>
        </section>

        <section>
            <h2>Téléchargement</h2>

            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/laboratoire-revision-code-2.zip"></File>
            </DownloadBlock>
        </section>
    </>;
}
