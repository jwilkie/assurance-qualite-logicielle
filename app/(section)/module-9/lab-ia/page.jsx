import { DownloadBlock, File } from '@/components/DownloadBlock'
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Débogage avec l'intelligence artificielle",
    description: "Présentation d'un laboratoire sur l'utilisation de l'intelligence artificielle pour faire du débogage.",
    keywords: ["débogage", "ia", "ai", "ChatGPT"],
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
                Le programme du jeu semble bien fonctionner. Toutefois, le programme semble parfois entrer dans une boucle infini et ne se 
                termine pas. Le but de ce laboratoire est d&apos;utiliser l&apos;intelligence artificielle pour déterminer la source du problème 
                et la corriger.
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
                    Créer un compte sur le site de <a target="_blank" rel="noreferrer noopener" href="https://chat.openai.com/">ChatGPT</a>
                </li>
                <li>
                    À l&apos;aide de ChatGPT, trouver l&apos;erreur dans le code source du programme qui fait que parfois, le code semble entrer dans 
                    une boucle infinie.
                </li>
                <li>
                    Une fois le problème identifié et corrigé correctement, partager votre conversation avec ChatGPT avec votre professeur.
                </li>
            </ol>
        </section>

        <section>
            <h2>Téléchargement</h2>

            <DownloadBlock>
                <File fileName="distribué.zip" path="/labs/laboratoire-debogueur-ia.zip"></File>
            </DownloadBlock>
        </section>
    </>;
}
