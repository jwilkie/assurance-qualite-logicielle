import IC from '@/components/InlineCode'
import KK from '@/components/KeyboardKey'
import OverflowContainer from '@/components/OverflowContainer'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Fonctions de l'éditeur",
    description: "Présentation des fonctions avancées de modification du code source de vos éditeur ainsi que leur raccourci clavier.",
    keywords: ["refactorisation", "raccourci", "clavier", "rapidite", "vitesse"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Visual Studio Code</h2>
            <p>
                Vos éditeurs de code possèdent généralement une quantité impressionnante de fonctionnalités et d&apos;outils pour facilité et 
                améliorer la rapidité de l&apos;écriture de votre code. Cette page vous présente les raccourcis claviers de certaines de ces 
                fonctionnalités dans Visual Studio Code.
            </p>
            <p>
                La majorité des fonctionnalités présentées ici existe dans d&apos;autres éditeurs, mais les raccourcis claviers pourraient être 
                différents. Si vous voulez savoir comment exécuter ces fonctionnalités dans un éditeur de code différent, Google est votre
                ami.
            </p>
        </section>

        <section>
            <h2>Renommer un symbole ou un fichier</h2>
            <p>
                Si vous voulez renommer une variable, une constante, une classe ou même un fichier, Visual Studio Code peut vous aider à 
                le faire rapidement. Lorsqu&apos;on change le nom d&apos;une variable, le problème majeur est qu&apos;il faut renommer la variable partout 
                dans le code où elle est utilisée. Il serait merveilleux si l&apos;éditeur pouvait le faire pour nous, non?
            </p>
            <p>
                Heureusement, Visual Studio Code peut le faire. La technique est simple. Mettez votre curseur sur la variable, constante, 
                classe ou fichier que vous voulez renommer et faite l&apos;opération suivante:
            </p>
            <p>
                <KK>F2</KK> ou <IC>Clic droit</IC> -&gt; <IC>Rename Symbol</IC>
            </p>
            <p>
                Vous pourrez ensuite changer le nom et apuuyer sur la touche <KK>Enter</KK> pour valider.
            </p>
        </section>

        <section>
            <h2>Mise en forme d&apos;un d&apos;un document</h2>
            <p>
                Vous avez tendance à écrire votre code rapidement et à ignorer l&apos;indentation et l&apos;espacement dans votre code? Il peut être 
                pénible de revenir dans le code par la suite pour nettoyer le tout à la main. 
            </p>
            <p>
                Heureusement Visual Studio Code nous permet de faire du formattage de code automatique. Pour ce faire, vous pouvez mettre 
                votre curseur dans le fichier que vous voulez mettre en forme et faite l&apos;opération suivante:
            </p>
            <p>
                <KK>Shift</KK> + <KK>Alt</KK> + <KK>F</KK> ou <IC>Clic droit</IC> -&gt; <IC>Format document</IC>
            </p>
            <p>
                Le fichier de code devrait automatiquement se mettre en forme.
            </p>
        </section>

        <section>
            <h2>Commenter une sélection</h2>
            <p>
                Vous voulez rapidement commenter une ligne ou quelques lignes de code? Oui, vous pouvez ajouter les commentaires manuellement,
                mais il y a mieux. Dans Visual Studio Code, vous pouvez simplement mettre votre curseur sur la ligne que vous voulez commenter 
                ou sélectionner les lignes que vous voulez commenter et faites l&apos;opération suivante:
            </p>
            <p>
                <KK>Ctrl</KK> + <KK>É</KK> ou <IC>Edit</IC> -&gt; <IC>Toggle Line Comment</IC>
            </p>
            <p>
                La ligne ou les lignes sélectionnées seront automatiquement commentées. 
            </p>
        </section>

        <section>
            <h2>Déplacer une ligne</h2>
            <p>
                Vous voulez déplacer une ligne ou plusieurs lignes de code à un autre endroit dans votre code? Une option simple est simplement 
                de couper et coller les lignes concernées ailleurs. Celà va généralement bien fonctionner rapidement pour la plupart de vos 
                besoin, mais il existe d&apos;autre techniques.
            </p>
            <p>
                Visual Studio Code vous permet de déplacer une ou des lignes de code vers le haut ou le bas rapidement. Tout ce que vous devez 
                faire est de mettre votre curseur sur la ligne à déplacer ou sélectionner les lignes à déplacer et à faire l&apos;opération suivante:
            </p>
            <div>Pour déplacer la/les lignes vers le haut:</div>
            <p>
                <KK>Alt</KK> + <KK>🠕</KK> ou <IC>Selection</IC> -&gt; <IC>Move Line Up</IC>
            </p>
            <div>Pour déplacer la/les lignes vers le bas:</div>
            <p>
                <KK>Alt</KK> + <KK>🠗</KK> ou <IC>Selection</IC> -&gt; <IC>Move Line Down</IC>
            </p>
            <p>
                La ou les lignes sélectionnées se déplaceront automatiquement vers le haut ou vers le bas.
            </p>
        </section>

        <section>
            <h2>Autocomplétion de code</h2>
            <p>
                La plupart des éditeurs de code moderne vous proposerons une certaine quantité de suggestion lors de l&apos;écriture de code. Celà 
                nous permet entre autre de rapidement écrire un long nom de variable, voir les propriétés et fonctions disponible dans un 
                object ou d&apos;autogénérer des importations. 
            </p>
            <p>
                Dans Visual Studio Code, la boîte de suggestion apparaît automatiquement lorsque l&apos;on tape du code. Dans certain cas, elle ne 
                s&apos;affichera pas automatiquement ou vous allez vouloir la fermer. Vous pouvez le faire avec les raccourcis claviers suivants:
            </p>
            <div>Ouvrir la fenêtre de suggestion:</div>
            <p>
                <KK>Ctrl</KK> + <KK>Space</KK>
            </p>
            <div>Fermer la fenêtre de suggestion:</div>
            <p>
                <KK>Esc</KK>
            </p>
            <p>
                Dans la fenêtre de suggestion, vous pouvez utiliser les flèches <KK>🠕</KK> ou <KK>🠗</KK> pour sélectionner une suggestion 
                et la touche <KK>Enter</KK> pour la valider.
            </p>
        </section>

        <section>
            <h2>Lancer et déboguer</h2>
            <p>
                Pour de nombreux types de programme, vous pouvez les lancer dans votre éditeur à l&apos;aide de la combinaison de touche suivante:
            </p>
            <p>
                <KK>Ctrl</KK> + <KK>F5</KK> ou <IC>Run</IC> -&gt; <IC>Run Without Debugging</IC>
            </p>
            <p>
                Il y a aussi moyen de lancer le programme avec un débogueur. Le débogueur est un outil puissant que l&apos;on utilisera un peu plus 
                tard dans le cours. Cet outil nous permet entre autre d&apos;exécuter du code ligne par ligne et de voir le contenu des variables 
                lors de son exécution. Voici les raccourcis claviers à retenir:
            </p>
            <OverflowContainer>
                <table>
                    <thead>
                        <tr>
                            <td>Description</td>
                            <td>Raccourci Windows</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Démarrer le débogueur</td>
                            <td><KK>F5</KK></td>
                        </tr>
                        <tr>
                            <td>Arrêter le débogueur</td>
                            <td><KK>Shift</KK> + <KK>F5</KK></td>
                        </tr>
                        <tr>
                            <td>Ajouter un point d&apos;arrêt sur la ligne du curseur</td>
                            <td><KK>F9</KK></td>
                        </tr>
                        <tr>
                            <td>Exécuter la ligne suivante</td>
                            <td><KK>F10</KK></td>
                        </tr>
                        <tr>
                            <td>Exécuter la ligne à l&apos;intérieur d&apos;une fonction</td>
                            <td><KK>F11</KK></td>
                        </tr>
                        <tr>
                            <td>Laisser le code continuer</td>
                            <td><KK>F5</KK></td>
                        </tr>
                    </tbody>
                </table>
            </OverflowContainer>
            <p>
                Nous verrons comment fonctionne et comment utiliser ces opérations dans un module subséquant. Ces raccourcis clavier sont 
                toutefois utile pour ceux qui ont déjà utilisé le débogueur.
            </p>
        </section>

        <section>
            <h2>Sélection de bloc</h2>
            <p>
                Il est possible de sélectionner un bloc de code dans Visual Studio Code. Un littéral bloc de code. POur ce faire, vous pouvez
                faire les opérations suivantes:
            </p>
            <p>
                <KK>Shift</KK> + <KK>Alt</KK> + <IC>Sélectionner du code avec la souris</IC>
            </p>
            <p>
                Vous verrez que le code sélectionner aura littéralement la forme d&apos;un carrée ou d&apos;un rectangle. Ce genre de sélection peut être 
                pratique pour supprimer certaines parties de code formatté ou encore pour ajouter du code sur plusieurs ligne simultanément.
            </p>
        </section>
    </>;
}
