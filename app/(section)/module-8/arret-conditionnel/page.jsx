import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Points d'arrêt conditionnel",
    description: "Présentation des points d'arrêt conditionnel, une façon de stopper le code sous certaines condition.",
    keywords: ["débogage", "débogueur", "erreur", "bogue", "outil", "point d'arrêt", "breakpoint", "condition"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Pause sur condition</h2>
            <p>
                Certaines parties de votre code peuvent être utilisées et exécutées à de nombreuses reprise dans vos programmes. Bien que ce
                soit utile d&apos;un point de vu maintenance et bonne pratique, celà peut parfois un peu compliquer le débogage. En effet, vous
                voulez peut-être mettre le code en pause à certains moment spécifique, mais pas à chaque exécution. Un exemple simple est si
                vous mettez un point d&apos;arrêt dans une boucle. Celui-ci arrêtera votre code à chaque itération de la boucle. Ce n&apos;est pas très
                pratique si vous voulez uniquement arrêter dans la boucle sous certaines conditions.
            </p>
            <p>
                C&apos;est ici que les points d&apos;arrêt conditionnel seront pratique. Ils nous permettrons de mettre l&apos;exécution du code en pause,
                mais en respectant les conditions que nous allons définir.
            </p>
        </section>

        <section>
            <h2>Ajouter une condition</h2>
            <p>
                Pour ajouter un point d&apos;arrêt conditionnel, il suffit simplement de suivre les étapes suivantes:
            </p>
            <ol>
                <li>
                    Ajouter un point d&apos;arrêt normalement en cliquant dans la marge d&apos;une ligne de code ou en appuyant sur la
                    touche <kbd>F9</kbd>.
                </li>
                <li>
                    Faire un clic droit sur le point d&apos;arrêt ajouté et cliquer sur <em>Edit breakpoint</em> ou <em>Conditions</em>. Le terme 
                    peut changer d&apos;un éditeur de code à l&apos;autre.
                </li>
                <li>
                    Ajuster la condition comme voulu.
                </li>
            </ol>
            <p>
                La condition peut être représenté sous plusieurs forme. La façon la plus simple est généralement de mettre une expression de 
                code. En général, le débogueur s&apos;arrêtera au point d&apos;arrêt uniquement si l&apos;expression a la valeur booléenne <IC>true</IC>. 
            </p>
            <p>
                Une autre façon de faire une condition est de mettre un nombre d&apos;accès ou <em>Hit count</em>. Un nombre d&apos;accès indique que 
                nous voulons que le point d&apos;arrêt soit uniquement accessible après qu&apos;il est été exécuté un certain nombre de fois. Lorsqu&apos;on 
                spécifie un <em>Hit count</em>, on indique un chiffre qui sera le nombre de fois que le point d&apos;arrêt devra être exécuté 
                avant de faire une pause.
            </p>
        </section>
    </>;
}
