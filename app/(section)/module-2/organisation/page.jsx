import { FileExplorer, File, Folder } from "@/components/FileExplorer";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Organisation d'un projet",
    description: "Présentation des conventions générale d'organisation d'un projet de code.",
    keywords: ["code", "propre", "convention", "organisation", "projet"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Types de projets</h2>
            <p>
                L'organisation d'un projet dépendra grandement de son type et des langages de programmation utilisé. Un projet d'application 
                web ou un projet d'application mobile n'utilisera pas les mêmes langages de programmation et la même structure de projet.
                Vous devrez donc suivre une structure différente dépendant du type d'application.
            </p>
            <p>
                Assurez-vous de suivre l'organisation spécifié par votre type de projet. Une structure de projet qui suit les standards est 
                beaucoup plus facile à comprendre par les autres programmeurs et nécessite généralement moins de configurations.
            </p>
        </section>

        <section>
            <h2>Conseil général</h2>
            <p>
                Voici quelques conseils généraux pour l'organisation de vos projets:
            </p>
            <ul>
                <li>
                    Mettez les fichiers de configuration à la racine de votre projet ou dans un répertoire spécialisé si le
                    standard du langage de programmation le demande.
                </li>
                <li>
                    Si votre application est composé de plusieurs systèmes ou couche d'exécution, séparé-les dans leur propre répertoire.
                </li>
                <li>
                    Organisez les fichiers de code source dans différents répertoires si vous en avez beaucoup. Assurez-vous que votre 
                    organisation est logique.
                </li>
                <li>
                    Mettez les ressources utilisées par vos applications tel que les images, fichier audio ou vidéo dans leur propre 
                    répertoire.
                </li>
                <li>
                    Le fichier principal du programme (main, point d'entrée) va généralement être à la racine du projet.
                </li>
            </ul>
        </section>

        <section>
            <h2>Exemples</h2>

            <p>
                Voici une structure de données possible utilisant le langage de programmation C# et la plateforme .NET:
            </p>

            <FileExplorer>
                <Folder name="model">
                    <File name="user.cs"></File>
                    <File name="transaction.cs"></File>
                </Folder>
                <Folder name="resources">
                    <Folder name="images">
                        <File name="logo.png"></File>
                        <File name="photo1.jpg"></File>
                        <File name="photo2.jpg"></File>
                    </Folder>
                    <Folder name="documents">
                        <File name="terms.pdf"></File>
                        <File name="condition.pdf"></File>
                    </Folder>
                </Folder>
                <File name="Program.cs"></File>
                <File name="Project.csproj"></File>
                <File name="Project.sln"></File>
            </FileExplorer>

            <p>
                Voici un autre exemple de structure de projet, celui-ci pour un site web statique simple:
            </p>

            <FileExplorer>
                <Folder name="css">
                    <File name="normalize.css"></File>
                    <File name="style.css"></File>
                    <File name="home.css"></File>
                    <File name="about.css"></File>
                    <File name="contact.css"></File>
                </Folder>
                <Folder name="img">
                    <File name="favicon.ico"></File>
                    <File name="header.png"></File>
                    <File name="photo1.jpg"></File>
                    <File name="photo2.jpg"></File>
                </Folder>
                <Folder name="js">
                    <File name="contact.js"></File>
                </Folder>
                <Folder name="pages">
                    <File name="about.html"></File>
                    <File name="contact.html"></File>
                </Folder>
                <File name="index.html"></File>
            </FileExplorer>
        </section>
    </>;
}
