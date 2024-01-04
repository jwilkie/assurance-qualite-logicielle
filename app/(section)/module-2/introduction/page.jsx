import ColoredBox from "@/components/ColoredBox";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction",
    description: "Introduction aux conventions d'écriture de code source.",
    keywords: ["organisation", "code", "propre", "convention"],
    group: "notes"
}

export default function Page() {
    return <>
        <p>
            Comme vu au dernier module, le respect des conventions d&apos;écriture de code pour écrire un bon code source est très important. Il y
            a de nombreux bénéfice à les suivre et à faire en sorte que nos collègues de travail les suivent aussi. Dans ce module, nous
            aborderons spécifiquement les différents types de convention d&apos;écriture de code et comment les suivre. 
        </p>
        <p>
            Les conventions d&apos;écriture de code peuvent être légèrement différentes d&apos;un langage de programmation à l&apos;autre ou même d&apos;une 
            entreprise à l&apos;autre. Lorsque vous travaillez à un nouvel endroit, je vous recommande de vérifier quel genre de conventions est 
            utilisé. Le module ici vous proposera les conventions génériques. 
        </p>
        <ColoredBox title="Attention">
            Vous devez utiliser les conventions présentées dans ce module pour tous vos cours de programmation lors de votre parcours 
            scolaire. Le non respect des conventions pourrait vous causer la perte de points dans vos examens et projets.
        </ColoredBox>
    </>;
}
