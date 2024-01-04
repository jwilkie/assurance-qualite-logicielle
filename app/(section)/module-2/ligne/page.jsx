import CodeBlock from "@/components/CodeBlock";
import IC from "@/components/InlineCode";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Ligne et instruction",
    description: "Présentation des conventions d'écriture des instructions et des lignes de code source.",
    keywords: ["code", "propre", "convention", "ligne", "longueur", "instruction"],
    group: "notes"
}

const multiple = 
`// À ne pas faire
int de1 = random.Next(1, 7); int de2 = random.Next(1, 7);`;

const switchStatement = 
`switch(nombre) {
    case 1: 
        // À ne pas faire
        Console.WriteLine("Option 1"); break;
    case 2:
        // Bonne façon de faire
        Console.WriteLine("Option 2"); 
        break;
}`;

const fermeture = 
`// À ne pas faire
for(int i = 0 ; i < MAXIMUM ; i++) {
    if(i % 2 == 0) {
        // ...
    }}`;

const memeLigne = 
`// À ne pas faire
if(nombre > MAXIMUM) { nombre = MAXIMUM; }`;

const ouvertureCSharp = 
`if(nombre > MAXIMUM) 
{
    // ...
}`;

const ouvertureJS = 
`if(nombre > MAXIMUM) {
    // ...
}`;

const couper = 
`// À éviter
uneFonctionAvecUnLongNom(random.Next(1, 7), random.Next(1, 7)).operationAvecLeResultat(MINIMUM, MAXIMUM).autreOperation();

// Bonne façon de couper
uneFonctionAvecUnLongNom(random.Next(1, 7), random.Next(1, 7))
    .operationAvecLeResultat(MINIMUM, MAXIMUM)
    .autreOperation();
    
// Autre bonne façon de couper
uneFonctionAvecUnLongNom(
    random.Next(1, 7), 
    random.Next(1, 7)
).operationAvecLeResultat(
    MINIMUM, 
    MAXIMUM
).autreOperation();`;

export default function Page() {
    return <>
        <section>
            <h2>Instructions</h2>
            <p>
                Une instruction en programmation est une commande que l'on envoie à l'ordinateur. Elles se terminent généralement par un 
                point-virgule <IC>;</IC> dans les langages de programmation moderne.
            </p>
            <CodeBlock language="csharp">{'int instructionSimple = random.Next(1, 7);'}</CodeBlock>
            <p>
                Il est important de noter que même si le langage de programmation le permet, vous ne devez pas mettre plusieurs instructions
                sur la même ligne de code.
            </p>
            <CodeBlock language="csharp">{multiple}</CodeBlock>
            <p>
                Il en va de même pour les courtes instructions comme le <IC>break</IC>, <IC>return</IC> ou <IC>continue</IC>.
            </p>
            <CodeBlock language="csharp">{switchStatement}</CodeBlock>
        </section>

        <section>
            <h2>Accolades et blocs</h2>
            <p>
                La fermeture des blocs, généralement à l'aide d'accolades dans les langages modernes, doit se faire sur sa propre ligne. 
                Vous ne pouvez pas regrouper plusieurs fermetures sur la même ligne.
            </p>
            <CodeBlock language="csharp">{fermeture}</CodeBlock>
            <p>
                De la même façon, une ouverture et une fermeture de bloc ne devrait pas se faire sur la même ligne.
            </p>
            <CodeBlock language="csharp">{memeLigne}</CodeBlock>
            <p>
                Pour ce qui est de l'ouverture des blocs, on voit généralement deux styles distincts. L'accolade sur la même ligne que 
                l'instruction d'ouverture du bloc ou l'accolade sur la ligne suivante de l'instruction d'ouverture du bloc. Ces deux façons 
                d'écrire sont accepté par la communauté des programmeurs. En C#, en général, on va utiliser l'accolade sur la ligne 
                suivante. Dans les autres langages, on va généralement mettre l'accolade sur la même ligne.
            </p>
            <CodeBlock language="csharp">{ouvertureCSharp}</CodeBlock>
            <CodeBlock language="csharp">{ouvertureJS}</CodeBlock>
        </section>

        <section>
            <h2>Longueur d'une ligne</h2>
            <p>
                Le nombre de caractère maximal dans une ligne de code est un sujet hautement débattu. Historiquement, les programmeurs se 
                limitaient à 80 caractères maximum par ligne. Ceci étant dit, c'était dans un temps ou les écrans supportaient uniquement 
                80 caractères de longueur et où les écrans étaient très petits. Les écrans sont beaucoup plus grand aujourd'hui et la 
                plupart peuvent aisément supporter jusqu'à 130 caractères sans avoir besoin d'utiliser la barre de défilement.
            </p>
            <p>
                Je vous recommande d'utiliser votre jugement ici. En général, on ne veut pas utiliser la barre de défilement pour visualiser 
                le code, donc évitez toute ligne trop longue. Ceci étant dit, si vous utilisez un écran 4K, il est très possible que vous 
                puissiez y mettre beaucoup plus de caractère. Dans ce cas-ci, pensez aux autres programmeurs qui devront lire votre code. 
                Ils n'ont pas nécessairement un écran aussi grand que le votre.
            </p>
            <p>
                Si vous devez couper une instruction pour la mettre sur plusieurs ligne, coupez-là à des endroits logiques, par exemple lors 
                d'utilisation de virgule <IC>,</IC>, de points <IC>.</IC> ou d'ouverture de paranthèse <IC>{'('}</IC>.
            </p>
            <CodeBlock language="csharp">{couper}</CodeBlock>
        </section>
    </>;
}
