import OverflowContainer from "@/components/OverflowContainer"
import Image from "next/image"

import command from "@/public/img/command.svg"

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Raccourci de base",
    description: "Présentation des raccourcis claviers de base pour éditer du texte ou du code.",
    keywords: ["raccourci", "clavier", "rapidite", "vitesse"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Édition de texte</h2>
            <p>
                Votre ordinateur défini par défaut un bon nombre de raccourcis claviers qui fonctionne peu importe l&apos;éditeur de texte ou de code
                que vous utilisez. Ces raccourcis doivent être appris par coeurs. Vous devez les connaîtres sur le bout de vos doigts et les
                utiliser judicieusement pour accélérer votre écriture de code. Cette page vous décrira la plupart de ces raccourcis et leurs
                utilités.
            </p>
        </section>

        <section>
            <h2>Copier, Couper et Coller</h2>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>Raccourci Windows</td>
                            <td>Raccourci MacOS</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Copier un élément</td>
                            <td><kbd>CTRL</kbd> + <kbd>C</kbd></td>
                            <td><kbd><Image src={command} alt="CMD" /></kbd> + <kbd>C</kbd></td>
                        </tr>
                        <tr>
                            <td>Couper un élément</td>
                            <td><kbd>CTRL</kbd> + <kbd>X</kbd></td>
                            <td><kbd><Image src={command} alt="CMD" /></kbd> + <kbd>X</kbd></td>
                        </tr>
                        <tr>
                            <td>Coller un élément</td>
                            <td><kbd>CTRL</kbd> + <kbd>V</kbd></td>
                            <td><kbd><Image src={command} alt="CMD" /></kbd> + <kbd>V</kbd></td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Le copier et coller sont probablement dans les opérations que vous utiliserez le plus souvent. Voici ce qu&apos;elle nous permette
                de faire:

            </p>
            <dl>
                <dt>Copier</dt>
                <dd>Copier le texte ou les éléments sélectionnés en mémoire.</dd>

                <dt>Coller</dt>
                <dd>Insérer les éléments copier end mémoire à l&apos;endroit où votre curseur se trouve.</dd>

                <dt>Couper</dt>
                <dd>Copier le texte ou les éléments sélectionnés en mémoire tout en les supprimant.</dd>
            </dl>
        </section>

        <section>
            <h2>Indentation</h2>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>Raccourci Windows</td>
                            <td>Raccourci MacOS</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tabulation</td>
                            <td><kbd>Tab</kbd></td>
                            <td><kbd>Tab</kbd></td>
                        </tr>
                        <tr>
                            <td>Dé-tabulation</td>
                            <td><kbd>Shift</kbd> + <kbd>Tab</kbd></td>
                            <td><kbd>Shift</kbd> + <kbd>Tab</kbd></td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Le contrôle de la tabulation est très pratique lorsque vous voulez modifier l&apos;indentation d&apos;une ou plusieurs lignes de code.
                Ces opérations vous permettent de faire:
            </p>
            <dl>
                <dt>Tabulation</dt>
                <dd>Déplacer la ligne ou la sélection vers la droite de une tabulation.</dd>

                <dt>Dé-tabulation</dt>
                <dd>Déplacer la ligne ou la sélection vers la gauche de une tabulation.</dd>
            </dl>
        </section>

        <section>
            <h2>Historique des modifications</h2>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>Raccourci Windows</td>
                            <td>Raccourci MacOS</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Undo (Annuler)</td>
                            <td><kbd>CTRL</kbd> + <kbd>Z</kbd></td>
                            <td><kbd><Image src={command} alt="CMD" /></kbd> + <kbd>Z</kbd></td>
                        </tr>
                        <tr>
                            <td>Redo (Refaire)</td>
                            <td><kbd>CTRL</kbd> + <kbd>Y</kbd></td>
                            <td><kbd>Shift</kbd> + <kbd><Image src={command} alt="CMD" /></kbd> + <kbd>Z</kbd></td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Le undo et redo permettent de naviguer dans l&apos;historique de vos dernières modifications. Voici ce que ces opérations nous
                permettent de faire:
            </p>
            <dl>
                <dt>Undo</dt>
                <dd>Annuler la dernière modification ainsi que les précédentes si faites à répétition.</dd>

                <dt>Redo</dt>
                <dd>Refaire la dernière modification annulée ainsi que les suivantes si faites à répétition.</dd>
            </dl>
        </section>

        <section>
            <h2>Manipulation de fichier</h2>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>Raccourci Windows</td>
                            <td>Raccourci MacOS</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sauvegarder le fichier</td>
                            <td><kbd>CTRL</kbd> + <kbd>S</kbd></td>
                            <td><kbd><Image src={command} alt="CMD" /></kbd> + <kbd>S</kbd></td>
                        </tr>
                        <tr>
                            <td>Rechercher dans le ficheir</td>
                            <td><kbd>CTRL</kbd> + <kbd>F</kbd></td>
                            <td><kbd><Image src={command} alt="CMD" /></kbd> + <kbd>F</kbd></td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                La recherche et la sauvegarde de fichier sont des opérations très commune que vous ferez sans cesse. Voici ce qu&apos;elle nous
                permette de faire:
            </p>
            <dl>
                <dt>Sauvegarder le fichier</dt>
                <dd>Sauvegarder les dernières modifications du fichier sur le disque dur de votre ordinateur ou dans le cloud.</dd>

                <dt>Recherche dans un fichier</dt>
                <dd>Rechercher les différentes occurences et leur emplacement du texte dans un document ou dans du code.</dd>
            </dl>
        </section>

        <section>
            <h2>Navigation dans un fichier</h2>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>Raccourci Windows</td>
                            <td>Raccourci MacOS</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aller au début d&apos;une ligne</td>
                            <td>
                                <div><kbd>Home</kbd></div>
                                <div><kbd>fn</kbd> + <kbd>🠔</kbd></div>
                            </td>
                            <td><kbd><Image src={command} alt="CMD" /></kbd> + <kbd>🠔</kbd></td>
                        </tr>
                        <tr>
                            <td>Aller à la fin d&apos;une ligne</td>
                            <td>
                                <div><kbd>End</kbd></div>
                                <div><kbd>fn</kbd> + <kbd>🠖</kbd></div>
                            </td>
                            <td><kbd><Image src={command} alt="CMD" /></kbd> + <kbd>🠖</kbd></td>
                        </tr>
                        <tr>
                            <td>Aller au début du fichier</td>
                            <td><div><kbd>Ctrl</kbd> + <kbd>Home</kbd></div></td>
                            <td><kbd><Image src={command} alt="CMD" /></kbd> + <kbd>🠕</kbd></td>
                        </tr>
                        <tr>
                            <td>Aller à la fin du fichier</td>
                            <td><div><kbd>Ctrl</kbd> + <kbd>End</kbd></div></td>
                            <td><kbd><Image src={command} alt="CMD" /></kbd> + <kbd>🠗</kbd></td>
                        </tr>
                        <tr>
                            <td>Aller au début d&apos;un mot</td>
                            <td><div><kbd>Ctrl</kbd> + <kbd>🠔</kbd></div></td>
                            <td><kbd>Alt</kbd> + <kbd>🠔</kbd></td>
                        </tr>
                        <tr>
                            <td>Aller à la fin d&apos;un mot</td>
                            <td><div><kbd>Ctrl</kbd> + <kbd>🠖</kbd></div></td>
                            <td><kbd>Alt</kbd> + <kbd>🠖</kbd></td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Les raccourcis de navigation permettent de déplacer votre curseur dans votre fichier simplement en utilisant les touches de 
                votre clavier. Cela permet généralement un déplacement plus rapide qu&apos;avec la souris d&apos;ordinateur et vous permet de continuer 
                d&apos;écrire du code sans déplacer vos mains du clavier.
            </p>
        </section>

        <section>
            <h2>Sélections</h2>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>Raccourci Windows</td>
                            <td>Raccourci MacOS</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sélectionner du texte vers la droite</td>
                            <td><kbd>Shift</kbd> + <kbd>🠖</kbd></td>
                            <td><kbd>Shift</kbd> + <kbd>🠖</kbd></td>
                        </tr>
                        <tr>
                            <td>Sélectionner du texte vers la gauche</td>
                            <td><kbd>Shift</kbd> + <kbd>🠔</kbd></td>
                            <td><kbd>Shift</kbd> + <kbd>🠔</kbd></td>
                        </tr>
                        <tr>
                            <td>Sélectionner du texte vers le haut</td>
                            <td><kbd>Shift</kbd> + <kbd>🠕</kbd></td>
                            <td><kbd>Shift</kbd> + <kbd>🠕</kbd></td>
                        </tr>
                        <tr>
                            <td>Sélectionner du texte vers le bas</td>
                            <td><kbd>Shift</kbd> + <kbd>🠗</kbd></td>
                            <td><kbd>Shift</kbd> + <kbd>🠗</kbd></td>
                        </tr>
                        <tr>
                            <td>Sélectionner l&apos;ensemble du document</td>
                            <td><kbd>Ctrl</kbd> + <kbd>A</kbd></td>
                            <td><kbd><Image src={command} alt="CMD" /></kbd> + <kbd>A</kbd></td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Les raccourcis de sélection permettent de rapidement sélectionner une partie du texte. Pratique si vous voulez copier et 
                coller et partie de votre code.
            </p>
            <p>
                Il est possible de sélectionner en utilisant les raccourcis de navigation si vous appuyez en plus sur la
                touche <kbd>Shift</kbd> suivie du raccourci de navigation voulu.
            </p>
        </section>
    </>;
}
