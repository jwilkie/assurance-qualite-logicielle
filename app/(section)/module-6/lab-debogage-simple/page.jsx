import { DownloadBlock, File } from '@/components/DownloadBlock'
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Débogage simple",
    description: "Présentation d'un laboratoire sur le débogage de code source à l'aide de la stack trace et de l'affichage dans la console.",
    keywords: ["débogage", "stack trace", "console", "affichage", "erreurs"],
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
                    Ouvrir le dossier du projet dézippé avec Visual Studio Code ou Visual Studio.
                </li>
                <li>
                    Exécuter le programme et entrer le premier nombre 5 et le deuxième nombre 0 dans la console lorsque demandé. Le code devrait
                    planter. Identifier et corriger l&apos;erreur en ne faisant que des changement minimal dans le code.
                </li>
                <li>
                    Exécuter le programme et entrer le premier nombre -1 et le deuxième nombre 5 dans la console lorsque demandé. Le code devrait
                    s&apos;exécuter à l&apos;infini. Identifier et corriger le problème en ne faisant que des changement minimal dans le code.
                </li>
                <li>
                    Défi: Une troisième erreur se trouve dans le code. Trouver cette erreur et la corriger.
                </li>
            </ol>
        </section>

        <section>
            <h2>Téléchargement</h2>

            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/laboratoire-debogage-simple.zip"></File>
            </DownloadBlock>
        </section>
    </>;
}
