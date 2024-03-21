import IC from '@/components/InlineCode'
import { FileExplorer, File, Folder } from '@/components/FileExplorer'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Projet avec Git",
    description: "Présentation d'un laboratoire sur la création et l'utilisation d'un projet avec Git.",
    keywords: ["git", "projet", "commit"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Description</h2>
            <p>
                Le but de ce laboratoire est de créer un projet qui utilisera Git et d&apos;y faire quelques commits. Vous devez 
                simplement suivre les étapes suivantes pour réussir ce laboratoire. N&apos;oublier pas d&apos;envoyer le projet que vous 
                créerez dans un fichier ZIP à votre professeur pour qu&apos;il puisse le valider.
            </p>
        </section>

        <section>
            <h2>Marche à suivre</h2>
            <p>
                Suivre les étapes suivantes:
            </p>
            <ol>
                <li>
                    Créer un projet avec une structure de projet web simple comme montré dans votre cours de développement web. Vous pouvez 
                    simplement créer la hierarchie de fichiers et de dossiers suivantes:
                    <FileExplorer>
                        <Folder name="js">
                            <File name="main.js" />
                        </Folder>
                        <Folder name="css">
                            <File name="style.css" />
                        </Folder>
                        <File name="index.html" />
                    </FileExplorer>
                </li>
                <li>
                    Initialiser le projet avec Git.
                </li>
                <li>
                    Initialiser le fichier <IC>index.html</IC> avec la base d&apos;un fichier HTML.
                </li>
                <li>
                    Faire un premier commit avec l&apos;ensemble des fichiers et ajouter le message de commit <em>Initial commit</em>.
                </li>
                <li>
                    Modifier le fichier <IC>index.html</IC> pour y lier les fichiers <IC>main.js</IC> et <IC>style.css</IC>.
                </li>
                <li>
                    Faire un deuxième commit avec un message de commit significatif.
                </li>
                <li>
                    Modifier le fichier <IC>index.html</IC> pour y ajouter votre nom complet dans la balise <IC>{'<title>'}</IC> ainsi que 
                    dans le <IC>{'<body>'}</IC>.
                </li>
            </ol>
            <p>
                Lorsque vous faites le fichier ZIP à faire valider par votre professeur, assurez-vous de zipper le répertoire du projet au 
                complet. Si le répertoire caché de Git ne s&apos;y trouve pas, le professeur ne pourra pas faire la validation.
            </p>
        </section>
    </>;
}
