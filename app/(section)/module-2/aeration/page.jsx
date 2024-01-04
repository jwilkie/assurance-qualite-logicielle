import IC from "@/components/InlineCode";
import CodeBlock from "@/components/CodeBlock";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Aération",
    description: "Présentation des conventions d'espacement et d'aération lors de l'écriture du code source.",
    keywords: ["code", "propre", "convention", "aération", "espacement"],
    group: "notes"
}

const bloc = 
`nombre++;
if(nombre > MAXIMUM) {
    nombre = MAXIMUM;
}

Console.WriteLine(nombre);`;

const blocException = 
`for(int i = 0 ; i < MAXIMUM ; i++) {
    if(i % 2 == 0) {
        Console.Write(i + " ");
    }
}`;

const groupe = 
`Random random = new Random();
int de1 = random.Next(1, 7);
int de2 = random.Next(1, 7);
int somme = de1 + de2;

if(somme > 8) {
    // ...
}`;

const commentaire = 
`public static void Main(string[] args) {
    // Lancer un dé à 20 faces
    Random random = new Random();
    int de = random.Next(1, 21);

    // Regarder si la valeur du de est suffisante
    if(de == 20) {
        Console.WriteLine("Nat20");
    }
    else {
        Console.WriteLine(de);
    }
}`;

const multiple = 
`public static int brasseDe(int faces) {
    Random random = new Random();
    return random.Next(1, faces + 1);
}

// Ne pas mettre plusieurs lignes vide comme ici



int de = brasseDe(6);`;

export default function Page() {
    return <>
        <section>
            <h2>Retour de ligne</h2>
            <p>
                Il est généralement préférable de mettre quelques lignes vide dans le code source pour qu'il ne soit pas trop collé, ce qui 
                est généralement plus difficile à lire. Vous devez obligatoirement mettre des lignes vide dans le code pour l'aérer. Pour 
                savoir où mettre ces lignes vides, utilisez le guide suivant:
            </p>
            <ul>
                <li>
                    Ajoutez une ligne vide après une fermeture de bloc <IC>{'{ ... }'}</IC>. Dans l'exemple ci-dessous, notez la ligne vide 
                    ajouté après la fermeture du bloc <IC>if</IC>. Ces lignes vides doivent aussi être ajouté après les blocs des boucles, 
                    des classes, switch/case ou tout autre élément du langage de programmation utilisant des blocs de code.
                    <CodeBlock language="csharp">{bloc}</CodeBlock>
                    Il y a toutefois une exception à cette règle. Vous ne devez pas mettre de ligne vide entre deux fermetures de bloc qui 
                    sont l'une après l'autre. Dans l'exemple ci-dessous, notez qu'il n'y a pas de ligne vide entre la fermeture 
                    du <IC>if</IC> et de la boucle <IC>for</IC>.
                    <CodeBlock language="csharp">{blocException}</CodeBlock>
                </li>
                <li>
                    Ajoutez une ligne vide après toute série d'instructions qui se distingue des lignes suivantes. Ces lignes vide sont un 
                    peu subjective d'un programmeur à l'autre, mais sont essentielle à la compréhension du code pour bien regrouper les 
                    lignes ayant un sens similaire. Dans l'exemple ci-dessous, notez bien la ligne vide entre les lignes permettant de 
                    calculer la somme et les lignes utilisant la somme.
                    <CodeBlock language="csharp">{groupe}</CodeBlock>
                </li>
                <li>
                    Ajoutez une ligne vide avant chaque commentaire de ligne à moins que celui-ci se retrouve en début de bloc. Dans 
                    l'exemple ci-dessous, notez la ligne vide juste avant le commentaire au milieu du bloc et l'absence de ligne vide avant 
                    le commentaire en début de bloc. 
                    <CodeBlock language="csharp">{commentaire}</CodeBlock>
                </li>
            </ul>
        </section>

        <section>
            <h2>À éviter</h2>
            <p>
                Bien que l'aération du code soit bien pour la lisibilité du code, il est facile de s'emporter et d'en ajouter trop. Évitez 
                d'ajouter des lignes vides autre que pour les situations mentionnées ci-dessus. De plus, évitez de mettre plusieurs lignes 
                vide de suite comme l'exemple ci-dessous. C'est une mauvaise pratique. Une seule ligne vide à la fois est nécessaire.
            </p>
            <CodeBlock language="csharp">{multiple}</CodeBlock>
        </section>
    </>;
}
