import IC from "@/components/InlineCode";
import CodeBlock from "@/components/CodeBlock";
import ColoredBox from "@/components/ColoredBox";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Indentation",
    description: "Présentation des conventions au niveau de l'indentation du code source.",
    keywords: ["code", "propre", "convention", "indentation", "tabulation", "espace"],
    group: "notes"
}

const indent = 
`int nombreAleatoire = random.Next(1, 7);
if(nombreAleatoire > 3) 
{
    Console.WriteLine("Gagné!");
}

const int MAX = 10;
for(int i = 0 ; i < MAX ; i++)
{
    if(i % 2 === 0) 
    {
        Console.WriteLine("Nombre " + i + " est pair.");
    }
}`

export default function Page() {
    return <>
        <section>
            <h2>Décalage du code</h2>
            <p>
                L&apos;indentation est le principe selon lequel nous décalerons certaines lignes de code vers la droite pour facilité sa lecture 
                et sa compréhension. En règle générale, chaque création de bloc de code source, généralement délimité dans la plupart des 
                langages de programmation par les accolades <IC>{'{'}</IC> et <IC>{'}'}</IC>, déplacera le code vers la droite.
            </p>
            <p>
                Voici un exemple:
            </p>
            <CodeBlock language="csharp">{indent}</CodeBlock>
            <p>
                Vous noterez qu&apos;à chaque bloc, avec les <IC>if</IC> ou le <IC>for</IC> dans l&apos;exemple ci-dessus, le code à l&apos;intérieur est 
                déplacé vers la droite. Cela nous permet de facilement voir où commence et où se termine un bloc.
            </p>
        </section>

        <section>
            <h2>Espaces ou tabulations</h2>
            <p>
                Historiquement, on utilisait les tabulations pour décaler le code vers la droite. La touche <IC>Tab</IC> de votre clavier 
                permettait d&apos;insérer une tabulation, soit un caractère vide spécial d&apos;une certaine taille. Aujourd&apos;hui, nous utilisons 
                toutefois une méthode un peu différente.
            </p>
            <p>
                En effet, aujourd&apos;hui nous utilisons généralement les espaces au lieu des tabulations. Celà nous permet d&apos;avoir un meilleur 
                contrôle sur la taille de notre indentation. Pour nous simplifier la tâche, les éditeurs de code font maintenant eux-mêmes 
                l&apos;insertion des espaces quand vous utilisez la touche <IC>Tab</IC>. Essentiellement, votre éditeur insèrera des espaces au 
                lieu d&apos;une tabulation.
            </p>
        </section>

        <section>
            <h2>Taille de l&apos;indentation</h2>
            <p>
                La taille de l&apos;indentation varies d&apos;un programmeur, d&apos;une organisation ou d&apos;un langage de programmation à l&apos;autre. Toutefois, 
                la plupart du temps nous utiliserons une indentation de 2 ou 4 espaces. Certains langages de programmation favorisent beaucoup 
                la composition d&apos;élément à l&apos;intérieur d&apos;élément et l&apos;indentation à 2 espaces est très pratique pour éviter d&apos;avoir un code qui 
                se décale trop vers la droite. La majorité des éditeurs de code utilisent une indentation de 4 espaces par défaut.
            </p>
            <ColoredBox title="Attention">
                L&apos;indentation à l&apos;intérieur d&apos;un même fichier doit toujours avoir la même taille. Vous ne pouvez donc pas avoir d&apos;indentaiont de 
                2 espaces, 4 espaces ou autre dans un même fichier. Si votre indentation change, cela peut causer d&apos;énormes problèmes de 
                compréhension de votre code. Assurez-vous donc que chaque indentation suive le standard défini dans votre fichier.
            </ColoredBox>
        </section>
    </>;
}
