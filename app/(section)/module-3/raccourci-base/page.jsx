import KK from '@/components/KeyboardKey'
import OverflowContainer from '@/components/OverflowContainer'

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
                            <td><KK>CTRL</KK> + <KK>C</KK></td>
                            <td><KK>⌘</KK> + <KK>C</KK></td>
                        </tr>
                        <tr>
                            <td>Couper un élément</td>
                            <td><KK>CTRL</KK> + <KK>X</KK></td>
                            <td><KK>⌘</KK> + <KK>X</KK></td>
                        </tr>
                        <tr>
                            <td>Coller un élément</td>
                            <td><KK>CTRL</KK> + <KK>V</KK></td>
                            <td><KK>⌘</KK> + <KK>V</KK></td>
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
                            <td><KK>Tab</KK></td>
                            <td><KK>Tab</KK></td>
                        </tr>
                        <tr>
                            <td>Dé-tabulation</td>
                            <td><KK>Shift</KK> + <KK>Tab</KK></td>
                            <td><KK>Shift</KK> + <KK>Tab</KK></td>
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
                            <td><KK>CTRL</KK> + <KK>Z</KK></td>
                            <td><KK>⌘</KK> + <KK>Z</KK></td>
                        </tr>
                        <tr>
                            <td>Redo (Refaire)</td>
                            <td><KK>CTRL</KK> + <KK>Y</KK></td>
                            <td><KK>Shift</KK> + <KK>⌘</KK> + <KK>Z</KK></td>
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
                            <td><KK>CTRL</KK> + <KK>S</KK></td>
                            <td><KK>⌘</KK> + <KK>S</KK></td>
                        </tr>
                        <tr>
                            <td>Rechercher dans le ficheir</td>
                            <td><KK>CTRL</KK> + <KK>F</KK></td>
                            <td><KK>⌘</KK> + <KK>F</KK></td>
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
                                <div><KK>Home</KK></div>
                                <div><KK>fn</KK> + <KK>🠔</KK></div>
                            </td>
                            <td><KK>⌘</KK> + <KK>🠔</KK></td>
                        </tr>
                        <tr>
                            <td>Aller à la fin d&apos;une ligne</td>
                            <td>
                                <div><KK>End</KK></div>
                                <div><KK>fn</KK> + <KK>🠖</KK></div>
                            </td>
                            <td><KK>⌘</KK> + <KK>🠖</KK></td>
                        </tr>
                        <tr>
                            <td>Aller au début du fichier</td>
                            <td><div><KK>Ctrl</KK> + <KK>Home</KK></div></td>
                            <td><KK>⌘</KK> + <KK>🠕</KK></td>
                        </tr>
                        <tr>
                            <td>Aller à la fin du fichier</td>
                            <td><div><KK>Ctrl</KK> + <KK>End</KK></div></td>
                            <td><KK>⌘</KK> + <KK>🠗</KK></td>
                        </tr>
                        <tr>
                            <td>Aller au début d&apos;un mot</td>
                            <td><div><KK>Ctrl</KK> + <KK>🠔</KK></div></td>
                            <td><KK>Alt</KK> + <KK>🠔</KK></td>
                        </tr>
                        <tr>
                            <td>Aller à la fin d&apos;un mot</td>
                            <td><div><KK>Ctrl</KK> + <KK>🠖</KK></div></td>
                            <td><KK>Alt</KK> + <KK>🠖</KK></td>
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
                            <td><KK>Shift</KK> + <KK>🠖</KK></td>
                            <td><KK>Shift</KK> + <KK>🠖</KK></td>
                        </tr>
                        <tr>
                            <td>Sélectionner du texte vers la gauche</td>
                            <td><KK>Shift</KK> + <KK>🠔</KK></td>
                            <td><KK>Shift</KK> + <KK>🠔</KK></td>
                        </tr>
                        <tr>
                            <td>Sélectionner du texte vers le haut</td>
                            <td><KK>Shift</KK> + <KK>🠕</KK></td>
                            <td><KK>Shift</KK> + <KK>🠕</KK></td>
                        </tr>
                        <tr>
                            <td>Sélectionner du texte vers le bas</td>
                            <td><KK>Shift</KK> + <KK>🠗</KK></td>
                            <td><KK>Shift</KK> + <KK>🠗</KK></td>
                        </tr>
                        <tr>
                            <td>Sélectionner l&apos;ensemble du document</td>
                            <td><KK>Ctrl</KK> + <KK>A</KK></td>
                            <td><KK>⌘</KK> + <KK>A</KK></td>
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
                touche <KK>Shift</KK> suivie du raccourci de navigation voulu.
            </p>
        </section>
    </>;
}
