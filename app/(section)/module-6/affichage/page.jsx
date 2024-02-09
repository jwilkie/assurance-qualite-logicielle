import CodeBlock from '@/components/CodeBlock'
import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Affichage dans la console",
    description: "Présentation d'une technique de débogage où l'on affiche des messages ou des données à la console pour identifier un problème.",
    keywords: ["débogage", "erreurs", "console", "log", "variable"],
    group: "notes"
}

const exec = 
`public static void UneFonction()
{
    Console.WriteLine("Fonction exécuté");

    if(conditionComplexe) 
    {
        Console.WriteLine("Condition exécuté");

        // ...
    }

    // ...
}`;

const printVar = 
`int salaire = getSalaireDeBase();

Console.WriteLine("Salaire de base: " + salaire);

// Traitement de paye
// ...

Console.WriteLine("Salaire après traitement: " + salaire);`;

const condition = 
`int iteration = 0;
int donneeTraitee = 1337;
while(conditionComplexe) 
{
    // Traitement sur la donneeTraitee
    // ...

    if(donneeTraitee < 0) 
    {
        Console.WriteLine("Donnée sous barême");
        Console.WriteLine("Itération: " + iteration);
    }

    iteration++;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Erreurs persistante</h2>
            <p>
                Certaines erreurs ne sont pas aussi simple à régler que de regarder la stack trace. Parfois, la stack trace n&apos;indique pas bien 
                pourquoi une erreur survient. D&apos;autres fois, votre programme ne donne pas les bons résultats, mais vous ne savez pas pourquoi. 
                C&apos;est ici que le débogage est pratique. 
            </p>
            <p>
                Dans cette page, nous verrons comment utiliser les affichages dans la console pour nous aider à déboguer le code. La base est 
                très simple:
            </p>
            <p>
                Afficher du texte dans la console!
            </p>
        </section>

        <section>
            <h2>Assurer que le code est exécuté</h2>
            <p>
                Vous êtes dans une situation où le code ne fait pas ce que vous voulez. En fait, vous n&apos;êtes même pas certain qu&apos;une section de 
                votre code est exécuté. Vous pouvez alors utiliser les affichages pour vous en assurer.
            </p>
            <CodeBlock language="csharp">{exec}</CodeBlock>
            <p>
                Dans le code ci-dessus, on a ajouté un affichage à la console au début de la fonction pour voir si celle-ci est exécuté. On a 
                fait sensiblement la même chose à l&apos;intérieur du <IC>if</IC>. Ainsi, à l&apos;exécution, si on voit un affichage à la console 
                de <IC>Fonction exécuté</IC> ou <IC>Condition exécuté</IC>, on sait que la fonction et peut-être la condition sont bien exécuté 
                par votre programme.
            </p>
        </section>

        <section>
            <h2>Avoir la valeur d&apos;une variable</h2>
            <p>
                Il est possible que vous pensiez que votre code ne s&apos;exécute pas sur les bonnes valeurs. Vous croyez qu&apos;une variable contient 
                une valeur spécifique à l&apos;exécution, mais vous n&apos;en êtes pas certain. C&apos;est ici que l&apos;affichage du contenu des variables à la 
                console est pratique.
            </p>
            <CodeBlock language="csharp">{printVar}</CodeBlock>
            <p>
                Dans l&apos;exemple ci-dessus, on utilise l&apos;affichage en console pour démontrer la valeur d&apos;une variable à un certain moment dans 
                l&apos;exécution du code. Dans le cas ci-dessus, on peut donc s&apos;assurer que le salaire de base a bien la bonne valeur et que le 
                salaire après traitement est aussi valide. 
            </p>
            <p>
                Si le salaire de base n&apos;est pas bon, il faudrait investiguer la fonction <IC>getSalaireDeBase()</IC>. Dans le cas ou le salaire 
                après traitement ne serais pas valide, on pourrait ajouter des affichages en console à l&apos;intérieur du code du traitement pour 
                identifier l&apos;erreur.
            </p>
        </section>

        <section>
            <h2>Affichage conditionnel</h2>
            <p>
                Dans certain cas, on s&apos;attends à ce qu&apos;une valeur respecte toujours certaines condition, mais il est possible qu&apos;une logique de 
                code fautive en fasse autrement. Dans ce genre de cas, on peut mettre des conditions <IC>if</IC> avec des affichages pour 
                identifier si cela arrive et afficher d&apos;autres valeurs complémentaires pour identifier le problème.
            </p>
            <CodeBlock language="csharp">{condition}</CodeBlock>
            <p>
                Dans le code ci-dessus, on s&apos;attends à ce que la donnée traitée dans la boucle ne descende pas sou zéro. Si c&apos;est le cas, on 
                verra un affichage à la console et l&apos;itération où cela arrive sera indiquée. On pourra alors investiguer pourquoi celà arrive à 
                cet itération en ajoutant potentiellement d&apos;autres affichages à la console dans le code du traitement de la donnée.
            </p>
        </section>
    </>;
}
