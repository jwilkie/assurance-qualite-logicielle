import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Manipuler un projet sur GitHub",
    description: "Présentation d'un laboratoire sur la création et la manipulation d'un projet sur GitHub.",
    keywords: ["git", "projet", "commit", "push", "clone", "remote", "github"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Description</h2>
            <p>
                Le but de se laboratoire est de vous familiariser avec les manipulations de base d&apos;un projet sur GitHub. Vous devrez 
                donc être en mesure de créer un compte GitHub, de créer un répertoire Git sur GitHub, d&apos;ajouter le code d&apos;un 
                projet sur GitHub et de cloner un projet de GitHub sur votre ordinateur.
            </p>
        </section>

        <section>
            <h2>Marche à suivre</h2>
            <p>
                Suivre les étapes suivantes:
            </p>
            <ol>
                <li>
                    Créer un répertoire public sur GitHub que vous nommerez <IC>hello-github</IC>.
                </li>
                <li>
                    Créer un projet en local qui contient un fichier C# nommé <IC>main.cs</IC>. Dans ce fichier, écrire un programme qui
                    affiche <IC>&quot;Hello, GitHub! Je m&apos;appelle &lt;votre nom&gt;&quot;</IC> à l&apos;écran. Assurez-vous de 
                    remplacer <IC>&lt;votre nom&gt;</IC> par votre nom complet.
                </li>
                <li>
                    Initialiser le projet local avec Git et faire un premier commit.
                </li>
                <li>
                    Connecter votre projet local à votre répertoire GitHub en ajoutant un remote.
                </li>
                <li>
                    Pousser le code source de votre projet sur GitHub.
                </li>
            </ol>
            <p>
                Vous devez partager le lien de votre répertoire GitHub dans votre remise pour que votre professeur puisse vérifier votre 
                travail.
            </p>
        </section>
    </>;
}
