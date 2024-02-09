import CodeBlock from '@/components/CodeBlock'
import IC from '@/components/InlineCode';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Type d'erreurs",
    description: "Présentation des différents types d'erreur rencontrée lors de l'écriture de code.",
    keywords: ["erreurs", "syntaxe", "logique", "runtime", "exécution"],
    group: "notes"
}

const erreurSyntaxe = 
`double valeur1 = Math.Paw(3, 2);
// -------------------^
// La fonction Paw n'existe pas. On veut probablement dire "Pow" ici 
// pour utiliser l'exposant.

int valeur2 = Math.Sqrt(8);
// -----------^
// La fonction Math.Sqrt() retourne un double, mais on essaie de le 
// mettre dans un int.

double valeur3 = valeur1 + valeure2;
// ------------------------^
// La variable valeure2 n'existe pas. On a fait une erreur dans le nom 
// de la variable.`;

const erreurExecution = 
`Console.Write("Entrez un nombre: ");
int nombre1 = int.Parse(Console.ReadLine());

Console.Write("Entrez un autre nombre: ");
int nombre2 = int.Parse(Console.ReadLine());

Console.WriteLine("Addition: " + (nombre1 + nombre2));`;

const erreurExecutionTrace = 
`Unhandled exception. System.FormatException: The input string 'abc' 
was not in a correct format.
   at System.Number.ThrowFormatException[TChar](ReadOnlySpan\`1 value)
   at System.Int32.Parse(String s)
   at AssuranceQualiteLogicielle.Program.Main() 
      in C:\\Users\\JWilki\\dev\\projet\\Program.cs:line 2`;

const erreurLogique =
`public static void Main() 
{
    int addition1 = Additionner(2, 2);
    Console.WriteLine("Addition 1: " + addition1);
    
    int addition2 = Additionner(2, 3);
    Console.WriteLine("Addition 2: " + addition2);
}

public static int Additionner(int nombre1, int nombre2) 
{
    return nombre1 * nombre2;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Introductions</h2>
            <p>
                Dans un programme informatique, on rencontrera généralement plusieurs types d'erreurs. Certaines erreurs sont plus facile à 
                corriger que d'autres et si vous êtes capable de les identifier, vous serez généralement en mesure de trouver une solution à 
                ces erreurs plus rapidement.
            </p>
            <p>
                Dans cette page, nous présenterons les 3 types d'erreur les plus communes, leur source, ainsi que les différentes façon de les 
                déboguer rapidement. 
            </p>
        </section>

        <section>
            <h2>Erreur de syntaxe</h2>
            <p>
                L'erreur de syntaxe est généralement la plus facile à corriger. Elle arrive lorsqu'on utilise une syntaxe de code incorrecte 
                dans le langage de programmation que vous utilisez. 
            </p>
            <p>
                Dans plusieurs langage de programmation, une erreur de ce type empêchera complètement le code de s'exécuter et votre éditeur de 
                code vous indiquera généralement l'erreur par un surlignement rouge dans le code. Il vous indiquera généralement aussi une façon 
                de corriger le problème. C'est généralement le cas des langages compilés ou semi-compilé comme le C#, le Java ou le C++. 
                Le message d'erreur devrait être assez clair et facile à corriger. Si ce n'est pas le cas, une petite recherche de l'erreur sur 
                un moteur de recherche en ligne devrait régler rapidement le problème.
            </p>
            <CodeBlock language="csharp">{erreurSyntaxe}</CodeBlock>
            <p>
                Dans les langages de programmation interprété, comme le Javascript ou le Python, l'erreur surviendra à l'exécution du code, ce 
                qui complique un peu le débogage. L'erreur sera afficher dans la console sous la forme de stack trace, comme pour les erreur à 
                l'exécution. Vous pouvez donc regarder cette section pour plus d'information.
            </p>
        </section>

        <section>
            <h2>Erreur d'exécution (runtime)</h2>
            <p>
                Une erreur d'exécution est une erreur qui, comme son nom l'indique, arrive et est détectable uniquement à l'exécution. Ce genre 
                d'erreur arrive typiquement lorsque des données erronées sont passées à l'application et qu'il n'y a pas de validation ou encore 
                par des erreurs de logique de la part du programmeur.
            </p>
            <CodeBlock language="csharp">{erreurExecution}</CodeBlock>
            <p>
                Le code ci-dessus semble assez banal. Il va simplement demander 2 nombres à l'utilisateur et afficher le résultat de l'addition 
                de ceux-ci. Ce code est toutefois problématique. En effet, si on entre la valeur <IC>abc</IC> comme nombre, le code va planter 
                et afficher la stack trace ci-dessous dans la console.
            </p>
            <CodeBlock language="trace">{erreurExecutionTrace}</CodeBlock>
            <p>
                À l'aide de la stack trace, on peut identifier la source de l'erreur et la corriger. Dans le cas ci-dessus, on voit que notre 
                programme plante à la ligne 2 parce qu'il n'a pas été capable de convertir la chaîne <IC>abc</IC> en un nombre entier. Les stacks 
                traces ne sont toutefois pas toujours facile, on y consacrera donc une page complète un peu plus tard dans ce module. 
            </p>
        </section>

        <section>
            <h2>Erreur de logique</h2>
            <p>
                Les erreurs de logique sont les erreurs les plus sournoises. Elles arrivent lorsqu'on a une erreur de logique dans notre 
                programme. Le programme est syntaxiquement correct, mais il ne fait pas ce que l'on veut qu'il fasse puisqu'on l'a mal codé ou 
                que l'on a pas pensé à certains cas d'utilisation. 
            </p>
            <p>
                Si on est chanceux, nos erreurs de logique peuvent donc parfois causer des stacks traces, comme une erreur d'exécution. Cela 
                facilite énormément le débogage. Toutefois, les erreurs de logiques ne vont pas toujours faire planter le programme. Elles 
                peuvent simplement faire des mauvais calculs, retourner des mauvaises données, faire des traitements involontaires, corrompre des
                données, effacer des données importantes, causer des bris de matériel, etc... Bref, ces erreurs peuvent être difficile à détecter 
                puisqu'on a peu d'information sur celles-ci.
            </p>
            <CodeBlock language="csharp">{erreurLogique}</CodeBlock>
            <p>
                En testant le code ci-dessus, la première addition semble fonctionner, mais la deuxième ne fonctionne pas. C'est parce qu'on a 
                une erreur de logique. Dans la fonction <IC>Additionner</IC>, on fait une multiplication au lieu d'une addition. Cet exemple 
                est assez facile, mais dans un gros projet, il est facile d'échaper ce genre de petite erreur d'inattention et elles peuvent 
                devenir un cauchemar à identifier.
            </p>
            <p>
                Pour déboguer ces erreurs, nous utiliserons pour l'instant la technique de l'affichage dans la console. Cette technique est très 
                efficace pour identifier la source des erreurs et développer votre instinct de débogueur et programmeur. Nous apprendrons aussi 
                dans les prochains modules à utiliser des outils pour nous aider dans l'identification de ces erreurs.
            </p>
        </section>
    </>;
}
