import ColoredBox from '@/components/ColoredBox'
import { DownloadBlock, File } from '@/components/DownloadBlock'
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Débogueur avancé",
    description: "Présentation d'un laboratoire sur l'utilisation de techniques avancées du débogueur.",
    keywords: ["débogage", "débogueur", "erreur", "bogue", "outil"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Description</h2>
            <p>
                Le projet présente un petit jeu qui se joue automatiquement dans votre console. Dans les grandes ligne, le jeu présente un
                personnage qui a une certaine quantité d&apos;énergie et qui peut faire 3 actions: marcher, sauter et manger. Chaque action a un 
                effet sur l&apos;énergie du personnage. À chaque étape (itération) du jeu, le personnage exécutera l&apos;une de ces 3 actions 
                aléatoirement. Le jeu se termine lorsque le personnage n&apos;a plus d&apos;énergie. À la fin du programme, on affiche le nombre 
                d&apos;étapes réalisées avant que le personnage manque d&apos;énergie.
            </p>
            <p>
                Le programme du jeu fonctionne déjà bien. Le but de ce laboratoire est d&apos;utiliser le débogueur pour déterminer quelle action 
                sera entreprise par le personnage (marcher, sauter ou manger) à des valeurs d&apos;itération spécifique. Le tout sans changer le 
                code source du programme.
            </p>
            <ColoredBox title="À noter">
                Les valeurs aléatoires généré par le programme sont contrôlées par un germe. Pour le besoin de ce laboratoire, le germe est 
                fixé dans le programme. Bref, chaque exécution du programme génèrera le même résultat.
            </ColoredBox>
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
                    Déterminer l&apos;action entreprise par le personnage aux itérations spécifié par le professeur tout en respectant les 
                    contraintes suivante:
                    <ul>
                        <li>
                            Vous ne pouvez pas modifier le code source du programme.
                        </li>
                        <li>
                            Vous devez utiliser le débogueur.
                        </li>
                    </ul>
                </li>
            </ol>
        </section>

        <section>
            <h2>Téléchargement</h2>

            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/laboratoire-debogueur-avance.zip"></File>
            </DownloadBlock>
        </section>
    </>;
}
