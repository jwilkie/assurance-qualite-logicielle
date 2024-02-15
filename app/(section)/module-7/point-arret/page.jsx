import Image from 'next/image'

import breakpoint from '@/public/img/module-7-breakpoint.png'
import startStop from '@/public/img/module-7-start-stop.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Points d'arrêt",
    description: "Introduction aux points d'arrêt du débogueur, une fonction permettant d'arrêter l'exécution du code.",
    keywords: ["débogage", "débogueur", "erreur", "bogue", "outil", "point d'arrêt", "breakpoint"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Ajouter un point d&apos;arrêt</h2>
            <p>
                La première étape pour utiliser le débogueur consiste à ajouter un ou des points d&apos;arrêt. Un point d&apos;arrêt est un endroit ou 
                nous demanderons au débogueur de faire une pause sur l&apos;exécution de notre programme, nous permettant ainsi d&apos;analyser le contenu 
                des variables et par la suite d&apos;exécuter le code ligne par ligne. Vous pouvez mettre autant de points d&apos;arrêts que vous le 
                voulez. Le débogueur nous permettra de passer d&apos;un point d&apos;arrêt à l&apos;autre assez facilement.
            </p>
            <p>
                Ajouter un point d&apos;arrêt est simple. On a simplement besoin de cliquer à la gauche de la ligne de code, dans la marge à la 
                gauche du numéro de la ligne. Si vous cliquez au bon endroit, votre éditeur devrait afficher un point rouge dans la marge 
                indiquant que le code va s&apos;arrêter ici.
            </p>
            <Image src={breakpoint} alt="Ajout d'un point d'arrêt" />
            <p>
                Une autre façon de mettre un point d&apos;arrêt est d&apos;utiliser les raccourcis de votre clavier. Dans Visual Studio et Visual Studio 
                Code, cliquez ou mettez le curseur de texte sur la ligne à laquelle vous voulez ajouter le point d&apos;arrêt et appuyez sur la 
                touche <kbd>F9</kbd> de votre clavier.
            </p>
        </section>

        <section>
            <h2>Lancer et stopper le débogueur</h2>
            <p>
                Pour utiliser les points d&apos;arrêt et que le code s&apos;arrête automatiquement à ceux-ci, vous devez lancer votre programme avec le 
                débogueur. En général, votre éditeur de code vous offrira cette option. Voici où vous pouvez la trouver dépendant de votre 
                éditeur:
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Éditeur</th>
                        <th>Emplacement de l&apos;option</th>
                        <th>Raccourci clavier</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Visual Studio Code</td>
                        <td>Run -&gt; Start Debugging</td>
                        <td><kbd>F5</kbd></td>
                    </tr>
                    <tr>
                        <td>Visual Studio</td>
                        <td>Debug -&gt; Start</td>
                        <td><kbd>F5</kbd></td>
                    </tr>
                </tbody>
            </table>
            <p>
                Lorsque vous lancer votre programme avec le débogueur, celui-ci s&apos;exécutera normalment jusqu&apos;à ce que le code rencontre un 
                point d&apos;arrêt. À ce moment, le code sera en pause.
            </p>
            <p>
                Si vous voulez fermer votre programme et le débogueur, vous n&apos;avez qu&apos;à sélectionner l&apos;option dans votre éditeur:
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Éditeur</th>
                        <th>Emplacement de l&apos;option</th>
                        <th>Raccourci clavier</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Visual Studio Code</td>
                        <td>Run -&gt; Stop Debugging</td>
                        <td><kbd>Shift</kbd> + <kbd>F5</kbd></td>
                    </tr>
                    <tr>
                        <td>Visual Studio</td>
                        <td>Debug -&gt; Stop debugging</td>
                        <td><kbd>F5</kbd> + <kbd>F5</kbd></td>
                    </tr>
                </tbody>
            </table>
            <p>
                Dans certains éditeur, il y a de petites icônes en raccourci que vous pouvez utiliser pour démarrer et stopper le débogueur.
                Ces icônes sont une petite flèche verte pour démarrer le débogueur et un petit carré rouge pour l&apos;arrêter.
            </p>
            <Image src={startStop} alt="Icône pour démarrer et stopper le débogueur" />
        </section>
    </>;
}
