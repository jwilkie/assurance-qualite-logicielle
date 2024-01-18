import IC from "@/components/InlineCode";
import OverflowContainer from "@/components/OverflowContainer";

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
                Vos éditeurs de code possèdent généralement une quantité impressionnante de fonctionnalités et d'outils pour facilité et 
                améliorer la rapidité de l'écriture de votre code. Cette page vous présente les raccourcis claviers de certaines de ces 
                fonctionnalités dans Visual Studio Code.
            </p>
            <p>
                La majorité des fonctionnalités présentées ici existe dans d'autres éditeurs, mais les raccourcis claviers pourraient être 
                différents. Si vous voulez savoir comment exécuter ces fonctionnalités dans un éditeur de code différent, Google est votre
                ami.
            </p>
        </section>

        <section>
            <h2>Renommer un symbole ou un fichier</h2>
            <p>
                Si vous voulez renommer une variable, une constante, une classe ou même un fichier, Visual Studio Code peut vous aider à 
                le faire rapidement. Lorsqu'on change le nom d'une variable, le problème majeur est qu'il faut renommer la variable partout 
                dans le code où elle est utilisée. Il serait merveilleux si l'éditeur pouvait le faire pour nous, non?
            </p>
            <p>
                Heureusement, Visual Studio Code peut le faire. La technique est simple. Mettez votre curseur sur la variable, constante, 
                classe ou fichier que vous voulez renommer et faite l'opération suivante:
            </p>
            <p>
                <kbd>F2</kbd> ou <IC>Clic droit</IC> -&gt; <IC>Rename Symbol</IC>
            </p>
            <p>
                Vous pourrez ensuite changer le nom et apuuyer sur la touche <kbd>Enter</kbd> pour valider.
            </p>
        </section>

        <section>
            <h2>Mise en forme d'un d'un document</h2>
            <p>
                Vous avez tendance à écrire votre code rapidement et à ignorer l'indentation et l'espacement dans votre code? Il peut être 
                pénible de revenir dans le code par la suite pour nettoyer le tout à la main. 
            </p>
            <p>
                Heureusement Visual Studio Code nous permet de faire du formattage de code automatique. Pour ce faire, vous pouvez mettre 
                votre curseur dans le fichier que vous voulez mettre en forme et faite l'opération suivante:
            </p>
            <p>
                <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F</kbd> ou <IC>Clic droit</IC> -&gt; <IC>Format document</IC>
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
                ou sélectionner les lignes que vous voulez commenter et faites l'opération suivante:
            </p>
            <p>
                <kbd>Ctrl</kbd> + <kbd>É</kbd> ou <IC>Edit</IC> -&gt; <IC>Toggle Line Comment</IC>
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
                besoin, mais il existe d'autre techniques.
            </p>
            <p>
                Visual Studio Code vous permet de déplacer une ou des lignes de code vers le haut ou le bas rapidement. Tout ce que vous devez 
                faire est de mettre votre curseur sur la ligne à déplacer ou sélectionner les lignes à déplacer et à faire l'opération suivante:
            </p>
            <p>
                <div>Pour déplacer la/les lignes vers le haut:</div>
                <kbd>Alt</kbd> + <kbd>🠕</kbd> ou <IC>Selection</IC> -&gt; <IC>Move Line Up</IC>
            </p>
            <p>
                <div>Pour déplacer la/les lignes vers le bas:</div>
                <kbd>Alt</kbd> + <kbd>🠗</kbd> ou <IC>Selection</IC> -&gt; <IC>Move Line Down</IC>
            </p>
            <p>
                La ou les lignes sélectionnées se déplaceront automatiquement vers le haut ou vers le bas.
            </p>
        </section>

        <section>
            <h2>Autocomplétion de code</h2>
            <p>
                La plupart des éditeurs de code moderne vous proposerons une certaine quantité de suggestion lors de l'écriture de code. Celà 
                nous permet entre autre de rapidement écrire un long nom de variable, voir les propriétés et fonctions disponible dans un 
                object ou d'autogénérer des importations. 
            </p>
            <p>
                Dans Visual Studio Code, la boîte de suggestion apparaît automatiquement lorsque l'on tape du code. Dans certain cas, elle ne 
                s'affichera pas automatiquement ou vous allez vouloir la fermer. Vous pouvez le faire avec les raccourcis claviers suivants:
            </p>
            <p>
                <div>Ouvrir la fenêtre de suggestion:</div>
                <kbd>Ctrl</kbd> + <kbd>Space</kbd>
            </p>
            <p>
                <div>Fermer la fenêtre de suggestion:</div>
                <kbd>Esc</kbd>
            </p>
            <p>
                Dans la fenêtre de suggestion, vous pouvez utiliser les flèches <kbd>🠕</kbd> ou <kbd>🠗</kbd> pour sélectionner une suggestion 
                et la touche <kbd>Enter</kbd> pour la valider.
            </p>
        </section>

        <section>
            <h2>Lancer et déboguer</h2>
            <p>
                Pour de nombreux types de programme, vous pouvez les lancer dans votre éditeur à l'aide de la combinaison de touche suivante:
            </p>
            <p>
                <kbd>Ctrl</kbd> + <kbd>F5</kbd> ou <IC>Run</IC> -&gt; <IC>Run Without Debugging</IC>
            </p>
            <p>
                Il y a aussi moyen de lancer le programme avec un débogueur. Le débogueur est un outil puissant que l'on utilisera un peu plus 
                tard dans le cours. Cet outil nous permet entre autre d'exécuter du code ligne par ligne et de voir le contenu des variables 
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
                            <td><kbd>F5</kbd></td>
                        </tr>
                        <tr>
                            <td>Arrêter le débogueur</td>
                            <td><kbd>Shift</kbd> + <kbd>F5</kbd></td>
                        </tr>
                        <tr>
                            <td>Ajouter un point d'arrêt sur la ligne du curseur</td>
                            <td><kbd>F9</kbd></td>
                        </tr>
                        <tr>
                            <td>Exécuter la ligne suivante</td>
                            <td><kbd>F10</kbd></td>
                        </tr>
                        <tr>
                            <td>Exécuter la ligne à l'intérieur d'une fonction</td>
                            <td><kbd>F11</kbd></td>
                        </tr>
                        <tr>
                            <td>Laisser le code continuer</td>
                            <td><kbd>F5</kbd></td>
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
                <kbd>Shift</kbd> + <kbd>Alt</kbd> + <IC>Sélectionner du code avec la souris</IC>
            </p>
            <p>
                Vous verrez que le code sélectionner aura littéralement la forme d'un carrée ou d'un rectangle. Ce genre de sélection peut être 
                pratique pour supprimer certaines parties de code formatté ou encore pour ajouter du code sur plusieurs ligne simultanément.
            </p>
        </section>
    </>;
}
