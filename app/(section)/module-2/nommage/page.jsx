import IC from "@/components/InlineCode"; 
import CodeBlock from "@/components/CodeBlock";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Nommage",
    description: "Présentation des conventions de nommage lors de l'écriture du code source.",
    keywords: ["code", "propre", "convention", "nommage"],
    group: "notes"
}

const camel = 
`UnChameau
UnIdentifiantTresLong
EmployeAnnuel`;

const camelMin = 
`chameauMinuscule
commenceParMinuscule
nombreTour`;

const snakeMaj = 
`UN_SERPENT
CRIER_TRES_FORT
LARGEUR_FENETRE`;

const snakeMin = 
`petit_serpent
une_lettre_minuscule
client_commande`;

const kebab = 
`delicieux-kebab
identifiant-web-css
menu-boite`;

const variable = 
`int nombreEssais = 0;
string nomRobot = "Nao";`;

const constante = 
`const int TAILLE_MAXIMALE = 800;
const int CHOIX_FRUIT_BANANE = 3;`;

const fonctionJS = 
`function additionnerParam(x, y) {
    // ...
}`;

const fonctionCSharp = 
`public static int MultiplierParam(int x, int y) {
    // ...
}`;

const classe = 
`public class Client {
    // ...
}`;

const inter = 
`public interface ISurface {
    // ...
}`;

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                Les conventions de nommage contrôle tout endroit dans le code où vous pouvez choisir le nom d'un élément. Vous les utiliserez
                donc pour les éléments suivant:
            </p>
            <ul>
                <li>Variables</li>
                <li>Constantes</li>
                <li>Fonctions et méthodes</li>
                <li>Classes et Interfaces</li>
            </ul>
            <p>
                Il est possible que vous n'ayez pas vu certains concepts dans cette liste. Si c'est le cas, ne stressez pas. Vous verrez ces
                concepts très bientôt et vous serez déjà en mesure de bien les nommer.
            </p>
        </section>

        <section>
            <h2>Type de casse</h2>
            <p>
                Pour le nommage, nous utilisons souvent des types de casse spécifique dépendemment de ce que l'on essait de nommer. La casse 
                est notre façon d'écrire les identifiants pour être capable de bien les lire et comprendre. Comme les identifiants dans un code 
                source sont dans un seul mot (il n'y a pas d'espaces), on utilise les majuscules, minuscules ou autres caractères pour être en 
                mesure de bien les distinguer. Voici typiquement les différentes casse que nous utiliserons pour les conventions de nommage:
            </p>
            <dl>
                <dt><strong>Camel Case</strong></dt>
                <dd>
                    C'est la casse où chaque mot dans l'identifiant commence par une majuscule. On le nomme ainsi puisque les lettres 
                    majuscules crées des bosses dans l'identifiant, comme sur le dos d'un chameau.
                    <CodeBlock language="Texte">{camel}</CodeBlock>
                </dd>
                <dt><strong>Camel Case commençant par une minuscule</strong></dt>
                <dd>
                    C'est la même casse que le Camel Case, mais la première lettre de l'identifiant est une lettre minuscule.
                    <CodeBlock language="Texte">{camelMin}</CodeBlock>
                </dd>
                <dt><strong>Snake Case majuscule</strong></dt>
                <dd>
                    C'est une casse où l'on utilise la barre de soulignement <IC>_</IC> pour séparer les mots dans l'identifiant. Tous les 
                    autres caractères sont en majuscules. On le nomme ainsi puisque les identifiants ressemble au déplacement en zigzag des
                    serpents.
                    <CodeBlock language="Texte">{snakeMaj}</CodeBlock>
                </dd>
                <dt><strong>Snake Case minuscule</strong></dt>
                <dd>
                    Même principe que le Snake Case majuscule, mais toutes les lettres sont en minuscules. On utilise moins cette casse en
                    programmation, mais elle est utilisé dans certains standards de base de données.
                    <CodeBlock language="Texte">{snakeMin}</CodeBlock>
                </dd>
                <dt><strong>Kebab Case</strong></dt>
                <dd>
                    C'est une casse similaire au Snake Case, mais tous les mots sont séparé par des tirets <IC>-</IC>. Cette casse est 
                    beaucoup utilisé dans la création d'identifiant en programmation web. On le nomme ainsi puisque les mots de nos 
                    identifiants semblent être sur une broche.
                    <CodeBlock language="Texte">{kebab}</CodeBlock>
                </dd>
            </dl>
        </section>

        <section>
            <h2>Variables et constante</h2>
            <p>
                Dans la majorité des langages de programmation modernes et encore utilisés, les noms de variable vont toujours utiliser le 
                Camel Case commençant par une lettre minuscule.
            </p>
            <CodeBlock language="csharp">{variable}</CodeBlock>
            <p>
                Les constantes, quant à elles, utiliseront généralement le Snake Case en majuscule.
            </p>
            <CodeBlock language="csharp">{constante}</CodeBlock>
        </section>

        <section>
            <h2>Fonctions et méthodes</h2>
            <p>
                La casse utilisé par les fonctions et méthodes dépendent du langage de programmation. Le Camel Case commençant par une 
                minuscule est généralement utilisé, mais certains langages, comme le C#, utilise le Camel Case de base. Dans tous les cas, 
                une forme de Camel Case est utilisé.
            </p>
            <CodeBlock language="js">{fonctionJS}</CodeBlock>
            <CodeBlock language="csharp">{fonctionCSharp}</CodeBlock>
        </section>
        
        <section>
            <h2>Classes et Interfaces</h2>
            <p>
                Les classes et interfaces, dans presque tous les langages de programmation modernes, utiliseront le Camel Case pour leur 
                identifiant. Il est important de noter que les interfaces commenceront généralement par la lettre <IC>I</IC> pour bien 
                indiquer que c'est une interface.
            </p>
            <CodeBlock language="csharp">{classe}</CodeBlock>
            <CodeBlock language="csharp">{inter}</CodeBlock>
        </section>

        <section>
            <h2>Noms significatifs</h2>
            <p>
                Lors du choix d'un nom pour un identifiant, il est très important de définir un nom clair et précis. La plupart des langages 
                de programmation ne limitent pas le programmeur sur la taille d'un identifiant. Vous pouvez, par conséquent, être très 
                précis dans son nommage.
            </p>
            <p>
                À moins d'être dans la déclaration d'une boucle <IC>for</IC>, évitez les noms de variable courts 
                comme <IC>a</IC>, <IC>b</IC> ou <IC>xx</IC>. Évitez les acronymes qui ne sont pas très connu 
                comme <IC>itac</IC> ou <IC>pj1</IC>.
            </p>
            <p>
                Utilisez plutôt des mots complets et clairs que vous utiliserez avec casse. N'hésitez pas à mettre un long nom de variable si 
                celà aide à la compréhension du code. Le nom de la variable doit être en mesure de nous indiquer aisément ce qu'elle contient,
                même pour une programmeur qui ne travaille pas sur le projet. Par exemple, au lieu de <IC>pj1</IC>, 
                écrivez <IC>positionJoueur1</IC>.
            </p>
        </section>
    </>;
}
