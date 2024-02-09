import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox'
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Stack trace",
    description: "Explication de la stack trace et de son utilité pour identifier les erreurs.",
    keywords: ["erreurs", "runtime", "exécution", "trace de la pile"],
    group: "notes"
}

const format = 
`<Nom de l'erreur ou exception>: <description de l'erreur ou exeption et 
explication de comment elle est survenue.>
   at <nom de la fonction qui cause l'erreur> 
      in <nom du fichier de cette fonction>:line <numéro de ligne de l'erreur>
   at <nom de la fonction qui a appeler la fonction d'erreur> 
      in <nom du fichier de la fonction>:line <numéro de ligne de l'erreur>
   at <nom de la fonction qui a appeler la fonction d'erreur> 
      in <nom du fichier de la fonction>:line <numéro de ligne de l'erreur>
   ...`;

const example = 
`Unhandled exception. System.FormatException: The input string 'abc' 
was not in a correct format.
   at System.Number.ThrowFormatException[TChar](ReadOnlySpan\`1 value)
   at System.Int32.Parse(String s)
   at AssuranceQualiteLogicielle.Program.DemandeEntree() 
      in C:\\Users\\JWilki\\dev\\projet\\Program.cs:line 16
   at AssuranceQualiteLogicielle.Program.Main() 
      in C:\\Users\\JWilki\\dev\\projet\\Program.cs:line 7`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                La stack trace est un morceau de texte qui est généralement affiché dans la console lorsqu'un programme rencontre une erreur 
                durant son exécution. C'est la méthode utilisé par le langage de programmation pour communiquer l'endroit dans le code où 
                l'erreur est survenu.
            </p>
            <p>
                Avec la réutilisation de code, un morceau de code peut être utilisé à de nombreux endroits. La stack trace essaie donc 
                d'indiquer le chemin pris par le code pour se rendre jusqu'au morceau de code fautif. Cette façon de faire est très utile quand 
                on est habitué de voir des stack trace, mais assez complexe quand on ne programme pas depuis longtemps.
            </p>
        </section>

        <section>
            <h2>Format de la stack trace</h2>
            <p>
                En général, une stack trace aura un format similaire à ceci:
            </p>
            <CodeBlock language="trace">{format}</CodeBlock>
            <p>
                On note ici quelques détails que vous retrouverez toujours:
            </p>
            <dl>
                <dt>Nom de l'erreur ou exception</dt>
                <dd>
                    Nom qui est donné à l'erreur par le langage de programmation. Dépendant de l'erreur, le nom va changer. Avec l'expérience, 
                    on connait bien les noms utilisés et il devient facile de savoir pourquoi l'erreur est causé.
                </dd>
                <dt>Description de l'erreur ou exeption</dt>
                <dd>
                    Description plus complète de l'erreur ainsi que pourquoi elle est survenu. On peut souvent y trouver des valeurs de variables
                    ou des paramètres de fonction qui sont invalide, nous indiquant clairement ce qui s'est passé. Malheureusement, certains
                    langage de programmation ou compilateurs n'ont pas de messages clairs, ce qui est un peu pénible à déboguer.
                </dd>
                <dt>Nom de fonction et du fichier causant l'erreur</dt>
                <dd>
                    C'est littéralement le nom de la fonction dans laquelle l'erreur survient et le fichier qui contient cette fonction. Vous 
                    pouvez ainsi facilement trouver la source de l'erreur.
                </dd>
                <dt>Numéro de ligne de l'erreur</dt>
                <dd>
                    La plupart des langages de programmation indiqueront aussi la ligne ou l'erreur est survenu. Certain langage indiqueront 
                    aussi le numéro de colonne (en caractères).
                </dd>
            </dl>
            <p>
                Vous remarquerez aussi une certaine répétition de la ligne indiquant l'emplacement de l'erreur. Ce n'est pas parce qu'il y a 
                plusieurs erreurs, mais parce que la stack trace indique de où l'erreur est appelé. Par exemple, si l'erreur est survenu dans 
                une fonction, appelé par une autre fonction, on verra la hierarchie de l'appel de ces 2 fonctions dans la stack trace.
            </p>
            <ColoredBox title="Attention">
                Il est possible de voir certaines lignes de fonction que vous ne connaissez pas. C'est généralement le cas lorsque l'erreur 
                survient dans une librairie de code que vous utilisez ou dans des fonctions appartenant au langage de programmation. Dans ce 
                genre de cas, on doit simplement parcourir la stack trace pour trouver un fichier que nous connaissons pour identifier la 
                source du problème.
            </ColoredBox>
        </section>

        <section>
            <h2>Exemple</h2>
            <p>
                Voici un exemple simple de stack trace que nous allons pouvoir décortiquer:
            </p>
            <CodeBlock language="trace">{example}</CodeBlock>
            <p>
                En lisant la stack trace, on peut faire les conclusions suivante:
            </p>
            <ol>
                <li>
                    Selon la stack trace, on voit que l'erreur est une erreur de format selon son nom. Selon sa description, on peut voir qu'une 
                    chaîne entrée <IC>"abc"</IC> n'a pas le bon format.
                </li>
                <li>
                    L'endroit où l'erreur semble arrivé est dans <IC>System.Number</IC> qui est une classe de C#. On remonte donc la stack trace
                    pour trouver où cette classe est appelé. On voit juste en dessous qu'elle est appelé de <IC>System.Int32.Parse</IC> qui est
                    la fonction <IC>int.Parse</IC> de C#.
                </li>
                <li>
                    La fonction <IC>int.Parse</IC> semble être appelé d'une fonction <IC>DemandeEntree()</IC> qui se trouve dans une 
                    classe <IC>Program</IC> dans un fichier <IC>Program.cs</IC>. La ligne de l'appel est la ligne 16.
                </li>
            </ol>
            <p>
                En résumé, on en conclu que le programme plante parce qu'il essaie de convertir la chaîne <IC>"abc"</IC> en un nombre entier à 
                la ligne 16 du fichier <IC>Program.cs</IC> dans la fonction <IC>DemandeEntree()</IC>. Il faudrait donc investiguer pourquoi la 
                chaîne <IC>"abc"</IC> a été passé et empêcher que cela se reproduise.
            </p>
        </section>
    </>;
}
