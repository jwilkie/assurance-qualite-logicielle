import CodeBlock from "@/components/CodeBlock";
import ColoredBox from "@/components/ColoredBox";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Commentaire",
    description: "Présentation des conventions d'écriture généraux des commentaire dans le code source.",
    keywords: ["code", "propre", "convention", "commentaire"],
    group: "notes"
}

const classe = 
`// Classe définissant toutes les propriétés d'un 
// client de notre entreprise.
public class Client {
    // ...
}`;

const fonction = 
`// Fonction simulant le brassage d'un dé dont le 
// nombre de faces est spécifié en paramètre.
public static int brasserDe(int nombreFaces) {
    // ...
}`;

const complexe = 
`// Implémentation sécuritaire, mais moins performante, 
// du calcul rapide de l'inverse de la racine carré
// utilisé dans Quake 3
float x = 5f;
float xhalf = 0.5f * x;
int i = BitConverter.SingleToInt32Bits(x);
i = 0x5f3759df - (i >> 1);
x = BitConverter.Int32BitsToSingle(i);
x = x * (1.5f - xhalf * x * x);
`;

const organisation = 
`/* Entête de la page web */
header {
    background-color: #333;
}

header .logo {
    fill: #fff;
}

/* Pied de la page web */
footer {
    background-color: #a00;
}

footer .credits {
    color: #fff;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Les commentaires sont une partie très importante de l&apos;écriture de code. Elle permette aux programmeurs d&apos;organiser le code 
                et leurs idées, d&apos;indiquer aux autres programmeurs ce que le code fait, d&apos;expliquer des complexités dans le code et même de 
                générer de la documentation.
            </p>
            <p>
                Vous utiliserez les commentaires aux endroits suivants:
            </p>
            <ul>
                <li>
                    Au-dessus des classes.
                </li>
                <li>
                    Au-dessus des fonctions.
                </li>
                <li>
                    Au-dessus de tout code plus complexe.
                </li>
                <li>
                    Au-dessus d&apos;une section devant être organisée.
                </li>
            </ul>
            <ColoredBox title="Attention">
                Il est facile d&apos;aller du côté inverse et de mettre trop de commentaires. Il ne sert à rien de mettre des commentaires 
                au-dessus d&apos;une ligne de code qui est facile à comprendre. D&apos;où l&apos;importance de bien nommer ses variables pour faciliter la 
                lecture du code.
            </ColoredBox>
        </section>

        <section>
            <h2>Commentaire de classes et fonctions</h2>
            <p>
                Chaque classe et fonction dans votre code doit obligatoirement être précédé d&apos;un commentaire expliquant ce que cette classe 
                ou fonction fait. Nous verrons plus de détails sur ces commentaires dans les modules suivants puisqu&apos;ils peuvent être utilisé 
                pour générer de la documentation. Toutefois, nous n&apos;irons pas aussi loin dans le module présent.
            </p>
            <CodeBlock language="csharp">{classe}</CodeBlock>
            <CodeBlock language="csharp">{fonction}</CodeBlock>
        </section>

        <section>
            <h2>Code complexe</h2>
            <p>
                N&apos;importe quel code complexe qui n&apos;est pas évident à comprendre à coup d&apos;oeil rapide devrait être précédé d&apos;un commentaire 
                expliquant son comportement. Si vous travaillez avec des collègues de travail, ils seront content d&apos;avoir une explication 
                s&apos;ils ont besoin de travailler dans ce code. Même si vous travaillez seul, vous du futur sera content d&apos;avoir une 
                explication au code complexe écrit dans le passé.
            </p>
            <CodeBlock language="csharp">{complexe}</CodeBlock>
        </section>

        <section>
            <h2>Organisation de code</h2>
            <p>
                Les commentaires peuvent aussi servir à classer différentes sections du code. Vous verrez souvent ce style de commentaire 
                dans de vieux et très volumineux fichiers de code ou dans des . Ces commentaires servent généralement à donner un titre à une section de 
                code.
            </p>
            <CodeBlock language="css">{organisation}</CodeBlock>
        </section>
    </>;
}
