import IC from "@/components/InlineCode";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Taille d'un fichier",
    description: "Présentation des conventions en lien à la taille d'un fichier de code.",
    keywords: ["code", "propre", "convention", "fonction", "fichier", "ligne"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Fichier</h2>
            <p>
                En général, on veut que les fichiers de code ne soient pas trop long. Dès qu'un fichier de code commence à être 
                plus volumineux, on devrait toujours le séparer en plusieurs plus petits fichiers. Il n'y a pas de règles exacte 
                quant à la taille maximale d'un fichier, mais en général, si un fichier contient plus de 250 lignes de code, il 
                serait judicieux de commencer à le séparer.
            </p>
            <p>
                Dans vos cours, si c'est possible, on vous demande donc de séparer vos fichiers ayant plus de 250 lignes de code.
            </p>
        </section>

        <section>
            <h2>Fonctions</h2>
            <p>
                Pour séparer le code dans plusieurs fichiers, vous devrez séparer le code dans plusieurs fonctions. En effet, il 
                n'est vraiment pas recommandé de tout mettre dans la fonction <IC>main</IC>. Si vous séparez votre code dans 
                différentes fonctions, il sera facile de mettre ces fonctions dans différents fichiers lorsque vos fichiers 
                prendront plus de volume.
            </p>
            <p>
                Ceci étant dit, les fonctions ont une taille maximale aussi. Encore une fois, il n'y a pas de règle fixe, mais 
                une fonction de plus de 100 lignes de code devrait probablement être séparé en plus petites fonctions.
            </p>
            <p>
                Dans vos cours, si c'est possible, on vous demande donc de séparer vos fonctions ayant plus de 100 lignes de code.
            </p>
        </section>
    </>;
}
