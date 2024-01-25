import CodeBlock from '@/components/CodeBlock';
import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Documentation des fonctions",
    description: "Présentation de la documentation d'une fonction.",
    keywords: ["documentation", "suggestion", "commentaire", "docs", "fonction"],
    group: "notes"
}

const docCSharpParam = 
`/// <summary>
/// Défini les dimensions du rectangle en fonction des valeurs passées en 
/// paramètre.
/// </summary>
/// <param name="largeur">La nouvelle largeur du rectangle.</param>
/// <param name="hauteur">La nouvelle hauteur du rectangle.</param>
public void SetDimension(double largeur, double hauteur) { ... }`;

const docJavaParam = 
`/**
 * Défini les dimensions du rectangle en fonction des valeurs passées en 
 * paramètre.
 * @param largeur La nouvelle largeur du rectangle.
 * @param hauteur La nouvelle hauteur du rectangle.
 */
public void setDimension(double largeur, double hauteur) { ... }`;

const docJSParam = 
`/**
 * Défini les dimensions du rectangle en fonction des valeurs passées en 
 * paramètre.
 * @param {number} largeur La nouvelle largeur du rectangle.
 * @param {number} hauteur La nouvelle hauteur du rectangle.
 */
export function setDimension(let largeur, let hauteur) { ... }`;

const docCSharpReturn = 
`/// <summary>
/// Calcule et retourne l'aire du rectangle.
/// </summary>
/// <returns>L'aire du rectangle.</returns>
public double Aire() { ... }`;

const docJavaReturn = 
`/**
 * Calcule et retourne l'aire du rectangle.
 * @return L'aire du rectangle.
 */
public void aire() { ... }`;

const docJSReturn = 
`/**
 * Calcule et retourne l'aire du rectangle.
 * @returns {number} L'aire du rectangle. 
 */
export function aire() { ... }`;

export default function Page() {
    return <>
        <section>
            <h2>Éléments d&apos;une fonction à documenter</h2>
            <p>
                La fonction est définitivement l&apos;élément le plus complexe à documenter. En effet, une fonction peut être déclaré avec 
                de nombreuses configurations différentes d&apos;une fonction à l&apos;autre. Entres autres, les fonctions peuvent contenir une  
                certaine quantité de paramètres ou encore avoir une valeur de retour. En plus de la description de la fonction, ces 
                éléments doivent être documenté pour être en mesure de bien indiquer aux autres programmeurs comment utiliser votre 
                fonction.
            </p>
            <p>
                Comme pour les classes et variables de classe, les commentaires de documentation des fonctions doivent se trouver 
                juste au dessus de celles-ci.
            </p>
        </section>

        <section>
            <h2>Fonction avec paramètres</h2>
            <p>
                La documentation d&apos;une fonction contenant des paramètres se fait de la façon suivante:
            </p>
            <CodeBlock language="csharp">{docCSharpParam}</CodeBlock>
            <CodeBlock language="java">{docJavaParam}</CodeBlock>
            <CodeBlock language="js">{docJSParam}</CodeBlock>
            <ColoredBox title="À noter">
                Dans les langages non typé où les variables n&apos;ont pas explicitement de type, comme le Javascript, il est généralement 
                bonne pratique d&apos;indiquer le type du paramètre dans les commentaires de documentation.
            </ColoredBox>
        </section>

        <section>
            <h2>Fonction avec valeur de retour</h2>
            <p>
                La documentation d&apos;une fonction contenant une valeur de retour se fait de la façon suivante:
            </p>
            <CodeBlock language="csharp">{docCSharpReturn}</CodeBlock>
            <CodeBlock language="java">{docJavaReturn}</CodeBlock>
            <CodeBlock language="js">{docJSReturn}</CodeBlock>
            <ColoredBox title="À noter">
                Dans les langages non typé où les variables n&apos;ont pas explicitement de type, comme le Javascript, il est généralement 
                bonne pratique d&apos;indiquer le type de la valeur de retour dans les commentaires de documentation.
            </ColoredBox>
        </section>

        <section>
            <h2>Autres variantes</h2>
            <p>
                Une fonction ne contenant pas de paramètres ou de valeur de retour pourra simplement avoir un commentaire ayant sa 
                description. Les instructions de paramètre et de valeur de retour n&apos;ont donc pas besoin d&apos;y être ajouté.
            </p>
            <p>
                De la même façon, une fonction qui possède des paramètres et une valeur de retour pourra combiner les techniques 
                ci-dessus pour bien documenter ceux-ci. En règle général, on mettra les instructions pour les paramètres avant
                l&apos;instruction pour la valeur de retour dans le commentaire de documentation.
            </p>
        </section>

        <section>
            <h2>Contructeurs</h2>
            <p>
                Dans la plupart des langages orientés objets, vous aurez aussi à documenter les constructeurs de classe. Les 
                constructeurs se documente de la même façon qu&apos;une fonction, à l&apos;exception qu&apos;ils ne peuvent pas avoir de valeur de 
                retour. Pour le reste, c&apos;est exactement pareil.
            </p>
        </section>
    </>;
}
