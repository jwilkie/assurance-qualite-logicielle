import CodeBlock from "@/components/CodeBlock";
import IC from "@/components/InlineCode";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Constante",
    description: "Présentation de l'utilisation de constante au lieu de valeur hard codé dans le code source.",
    keywords: ["code", "propre", "convention", "constante", "hard code", "variable"],
    group: "notes"
}

const hardcode = 
`int score = 0;

while(isRunning) {
    player.move();
    
    if(player.onTreasure()) {
        score += 10;
    }
    else if(player.defense()) {
        score += 10;
    }
    else if(player.attack()) {
        score += 10;
    }
    else if(player.trap()) {
        score -= 15;
    }
    else if(player.isHurt()) {
        score -= 15;
    }
}`;

const constante = 
`const int ADD_SCORE = 10;
const int LOSE_SCORE = 15;

int score = 0;

while(isRunning) {
    player.move();
    
    if(player.onTreasure()) {
        score += ADD_SCORE;
    }
    else if(player.defense()) {
        score += ADD_SCORE;
    }
    else if(player.attack()) {
        score += ADD_SCORE;
    }
    else if(player.trap()) {
        score -= LOSE_SCORE;
    }
    else if(player.isHurt()) {
        score -= LOSE_SCORE;
    }
}`;

const isoler = 
`const int INITIAL_SCORE = 0;

int score = INITIAL_SCORE;

// ...

if(player.reset()) {
    score = INITIAL_SCORE;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Hard code</h2>
            <p>
                Ce qu'on appelle le hard code, est le principe où l'on utilise une donnée ou valeur fixe directement dans le code sans 
                vraiment avoir de référence à celle-ci, ce qui la rend difficile à modifier à long terme. Voici un exemple:
            </p>
            <CodeBlock language="csharp">{hardcode}</CodeBlock>
            <p>
                Dans cet exemple, nous avons 3 valeurs hard codé, soit la valeur initiale du score à <IC>0</IC>, la valeur de gain de 
                points qui augmente de <IC>10</IC> pour des actions positive et la valeur de perte de score de <IC>15</IC> lors d'action 
                négative. Ces 3 valeurs causes certains problèmes dans notre programme:
            </p>
            <ul>
                <li>
                    Si on veut modifier la valeur de gain ou de perte de points, on doit les modifier manuellement partout dans le code. Ce 
                    n'est pas très pratique, surtout dans les gros programmes avec plusieurs fichiers volumineux. Ce qui semble être un 
                    petite modification peut devenir un très long travail.
                </li>
                <li>
                    Le code peut devenir plus difficile à comprendre pour un autre programmeur. En effet, on ne sait pas si les valeurs de 
                    gain ou de perte de points sont obligé d'être le même pour toutes les actions. 
                </li>
            </ul>
        </section>

        <section>
            <h2>Extraire dans une constante</h2>
            <p>
                La solution pour palier à nos problèmes de hard code est d'utiliser des constantes. Toute valeur fixe dans votre code qui est 
                répétée devrait être isolée dans une constante pour faciliter la réutilisation.
            </p>
            <CodeBlock language="csharp">{constante}</CodeBlock>
            <p>
                La solution ci-dessus est élégante. Elle nous permet de modifier la valeur à un seul endroit pour affecter l'ensemble du 
                code. De plus, elle est facile à comprendre si vous nommez bien vos constantes.
            </p>
            <p>
                Vous noterez ici que l'on peut accepter un peu de hard code. Dans le cas ci-dessus, la valeur initiale de <IC>0</IC> donnée 
                au score n'a pas été isolé dans une constante puisqu'on l'utilise à un seul endroit dans le code. Ceci étant dit, si nous 
                devions l'utiliser ailleur, il serait probablement bénéfique de l'isoler dans une constante. 
            </p>
            <CodeBlock language="csharp">{isoler}</CodeBlock>
        </section>
    </>;
}
