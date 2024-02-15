import Image from 'next/image'

import varDebug from '@/public/img/module-7-var.png'
import navigation from '@/public/img/module-7-navigation.png'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Navigation dans l'exécution",
    description: "Présentation des fonctions de navigation du code source exécuté dans le débogueur.",
    keywords: ["débogage", "débogueur", "erreur", "bogue", "outil", "navigation", "step", "over", "into", "out"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Inspecter une variable</h2>
            <p>
                Lorsque le code est en pause sur un point d&apos;arrêt, il est possible d&apos;inspecter la valeur des variables. Certains éditeurs
                offrent une zone de l&apos;interface graphique où l&apos;on peut voir les variables locales de l&apos;endroit où l&apos;on a pausé le code. C&apos;est
                le cas de Visual Studio et Visual Studio Code. La zone en question ressemble à ceci:
            </p>
            <Image src={varDebug} alt="Valeurs des variables dans un débogueur" />
            <p>
                Une autre façon de voir le contenu d&apos;une variable lors d&apos;une pause du débogueur est de simplement mettre votre souris au dessus
                de la variable. Une info-bulle avec la valeur de la variable devrait apparaître rapidement.
            </p>
        </section>

        <section>
            <h2>Éxécuter ligne par ligne</h2>
            <p>
                Lorsque le l&apos;exécution du code est en pause durant le débogage, le débogueur nous offre quelques options pour naviguer dans
                l&apos;exécution du code. Vous trouverez dans plusieurs éditeurs de code une petite barre d&apos;outils vous permettant de faire
                quelques opérations. Les voici:
            </p>
            <Image src={navigation} alt="Icônes de navigation" />
            <table>
                <thead>
                    <tr>
                        <th>Navigation</th>
                        <th>Description</th>
                        <th>Raccourci Visual Studio Code</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Step Over</td>
                        <td>
                            Permet d&apos;exécuter la prochaine ligne de code et remet le l&apos;exécution du code en pause. Si cette ligne de code est 
                            une fonction, la fonction sera exécuté au complet d&apos;un seul coup.
                        </td>
                        <td><kbd>F10</kbd></td>
                    </tr>
                    <tr>
                        <td>Step Into</td>
                        <td>
                            Permet d&apos;exécuter la prochaine ligne de code et remet le l&apos;exécution du code en pause. Si cette ligne de code est 
                            une fonction, le débogueur entrera dans la fonction et exécutera uniquement la première instruction avant de 
                            remettre en pause.
                        </td>
                        <td><kbd>F11</kbd></td>
                    </tr>
                    <tr>
                        <td>Step Out</td>
                        <td>
                            Permet d&apos;exécuter le restant des lignes de la fonction courante et sort de la fonction. L&apos;exécution du code se 
                            remettra en pause immédiatement après avoir sortie de la fonction.
                        </td>
                        <td><kbd>Shift</kbd> + <kbd>F11</kbd></td>
                    </tr>
                    <tr>
                        <td>Continue</td>
                        <td>
                            Permet d&apos;enlever la pause de l&apos;exécution du code et de relancer le code normalement. Si l&apos;exécution du code atteint 
                            un nouveau point d&apos;arrêt, le code se remettra en pause.
                        </td>
                        <td><kbd>F5</kbd></td>
                    </tr>
                </tbody>
            </table>
            <p>
                Les options de navigation de l&apos;exécution du code sont pratiques pour analyser le comportement de votre code ligne par ligne. Vous 
                pouvez ainsi mieux comprendre comment chaque instruction influence les valeurs de vos variables et analyser vos problèmes en plus 
                de détails. N&apos;oubliez pas qu&apos;à n&apos;importe quel moment où le code est pause, vous pouvez inspecter les valeurs de ses variables.
            </p>
        </section>
    </>;
}
