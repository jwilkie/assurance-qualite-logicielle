import BorderedBox from '@/components/BorderedBox';
import CodeBlock from '@/components/CodeBlock';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Utilisation de ChatGPT",
    description: "Démonstration de l'utilisation simple de ChatGPT.",
    keywords: ["ia", "ai", "GPT", "inférence", "question"],
    group: "notes"
}

const exampleDegogue = 
`public static string ChiffrementCesar(string message, int decalage) 
{
    string messageChiffre = "";
    foreach (char lettre in message)
    {
        messageChiffre += (char)(((lettre + decalage - 'a') % 26) + 'a');
    }
    return messageChiffre;
}`;

export default function Page() {
    return <>
        <section>
            <h2>Fonctionnement de base</h2>
            <p>
                À la base, ChatGPT est une forme d&apos;autocomplétion de texte surpuissant. Lorsqu&apos;on embarque sur la plateforme, on est présenté à 
                une boîte de texte et tout ce qu&apos;on y écrit sera complété par ChatGPT. Par exemple, si vous entrez le début de 
                phrase <em>Another one bites the</em>, ChatGPT risque très probablement de compléter par <em>dust</em>, pour ainsi compléter le 
                nom de la chanson icônique de Queen. Il risque aussi d&apos;y ajouter d&apos;autres informations puisqu&apos;il va souvent autocompléter sa 
                réponse pour se justifier.
            </p>
            <p>
                Si on comprends bien le fonctionnement de base, on verra qu&apos;on peut lui faire autocompléter presque n&apos;importe quoi. Bref, si on
                lui pose une question, il devrait nous autocompléter la réponse (qui n&apos;est pas nécessairement vrai, donc assurez-vous de valider 
                l&apos;information). Ce genre d&apos;outil peut donc être très pratique lorsqu&apos;on cherche une information ou comment faire quelque chose.
            </p>
        </section>

        <section>
            <h2>Supprimer une conversation</h2>
            <p>
                ChatGPT se rappellera d&apos;une bonne partie de ce qu&apos;on lui a dit dans une même session. Celà peut être pratique si on veut lui 
                poser des questions en plusieurs étapes, mais ça peut aussi être problématique si on veut lui poser une question différente. 
                Le contexte dont il se rapelle peut influencer sa réponse et il est parfois préférable de redémarre une conversation de zéro.
                Vous pouvez démarrer une nouvelle conversation en cliquant sur le bouton <em>New chat</em> en haut à gauche de la fenêtre de
                conversation.
            </p>
            <p>
                Lorsque vous avez plusieurs conversation avec ChatGPT, chaque conversation est listé dans le menu de gauche. Vous pouvez
                naviguer entre les conversations en cliquant sur le titre de la conversation. Vous pouvez aussi supprimer une conversation en
                cliquant sur les 3 points à la droite du nom de la conversation et en cliquant sur le bouton <em>Delete chat</em>. Attention,
                cette action est irréversible. 
            </p>
        </section>

        <section>
            <h2>Génération de code</h2>
            <p>
                ChatGPT peut aussi générer du code. C&apos;est un peu plus risqué que de lui demander de compléter une phrase, mais ça peut être 
                utile pour générer des exemples de code ou pour obtenir des idées de solutions à un problème. Il est toutefois important de 
                valider le code généré, car il peut être incorrect ou même malicieux. Pour générer du code, vous pouvez utiliser des formules
                de phrase similaire à ceci:
            </p>
            <BorderedBox>
                Peux-tu générer une fonction en C# qui calcule les zéro d&apos;une fonction quadratique en fonction des paramètres a, b et c 
                quelle recevra?
            </BorderedBox>
            <BorderedBox>
                Peux-tu générer une classe en Java qui représente un personnage ayant une certaine quantité d&apos;énergie et qui peut faire 
                des actions comme marcher, sauter et manger? Si le personnage mange, il gagne de l&apos;énergie. Si le personnage marche ou 
                saute, il perd de l&apos;énergie.
            </BorderedBox>
            <p>
                Soyez toujours très critique envers le code généré. Il est possible que le code généré ne soit pas optimal, qu&apos;il soit 
                surcompliqué pour aucune raison, qu&apos;il soit incorrect, qu&apos;il rajoute des étapes inutiles, qu&apos;il utilise des librairies
                que vous ne voulez pas utilisé, etc.
            </p>
            <p>
                Comprenez, validez et testez toujours le code généré.
            </p>
        </section>

        <section>
            <h2>Débogage</h2>
            <p>
                Lorsque votre code ne fonctionne pas comme prévu, ChatGPT peut vous aider à le déboguer. Vous pouvez lui demander de vous
                aider à comprendre pourquoi votre code ne fonctionne pas, ou même lui demander de vous aider à trouver une solution à un
                problème spécifique. Voici un exemple que vous pouvez tester dans ChatGPT:
            </p>
            <BorderedBox>
                J&apos;ai un problème avec mon code. Il ne fonctionne pas comme prévu. Peux-tu m&apos;aider à comprendre pourquoi? Voici le code:
            </BorderedBox>
            <CodeBlock language="csharp">{exampleDegogue}</CodeBlock>
            <p>
                En règle générale, ChatGPT pourra vous donner des pistes pour comprendre pourquoi votre code ne fonctionne pas. Il pourra
                aussi vous donner des idées pour le déboguer. Par exemple, il pourrait vous suggérer de mettre des points d&apos;arrêts ou de 
                mettre des affichage dans la console pour voir la valeur des variables à différentes étapes de l&apos;exécution du code. 
                Assurez-vous de toujours comprendre et valider ce que ChatGPT vous donne comme résultat.
            </p>
            <p>
                Dans un cas plus complexe ou un cas où la taille du projet est immense, vous ne pourrez pas facilement passer toute 
                l&apos;information à ChatGPT. Dans ces cas, vous devrez réduire les problèmes à des expressions plus simple ou utiliser des outils 
                de débogage plus traditionnels.
            </p>
        </section>
    </>;
}
