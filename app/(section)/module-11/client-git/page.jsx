import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Utilisation du client Git",
    description: "Démonstration des commandes de base du client Git pour faire le versionnage d'un projet sur notre ordinateur.",
    keywords: ["git", "client", "commandes", "organisation", "version", "revenir", "équipe", "projet"],
    group: "notes"
}

const commit = 
`> git add .

> git commit -m "Message du commit"`;

export default function Page() {
    return <>
        <section>
            <h2>Ligne de commande</h2>
            <p>
                À la base, le client Git est un logiciel qui s&apos;utilise en ligne de commande. Il existe des interfaces graphiques, mais 
                il est recommandé de commencer avec la ligne de commande pour bien comprendre les notions de base du logiciel. Dans cette 
                page, nous verrons donc les commandes de base de Git en ligne de commande pour effectuer le versionnage simple d&apos;un 
                projet sur notre ordinateur directement. Nous n&apos;utiliserons pas de serveur Git pour le moment pour simplifier les 
                choses.
            </p>
            <p>
                À la base, un client Git peut faire les opérations suivantes:
            </p>
            <ul>
                <li>Initialiser un projet Git sur notre ordinateur.</li>
                <li>Ajouter des fichiers au prochain commit.</li>
                <li>Créer un commit.</li>
                <li>Lister les modifications apportées à un projet.</li>
                <li>Revenir à une version précédante d&apos;un projet.</li>
                <li>Brancher une version du projet.</li>
                <li>Fusionner les branches d&apos;un projet.</li>
                <li>Supprimer des branches.</li>
            </ul>
            <p>
                De nombreuses autres opérations sont disponibles, mais celles-ci sont les plus courantes et certaines opérations plus 
                avancées seront dans des modules subséquents lorsque nous utiliserons un serveur Git.
            </p>
        </section>

        <section>
            <h2>Initialiser un projet avec Git</h2>
            <p>
                Pour initialiser un projet Git sur notre ordinateur, nous devons ouvrir un terminal dans le répertoire du projet et utiliser 
                la commande <IC>git&nbsp;init</IC>. Cette commande créera un répertoire caché nommé <IC>.git</IC> qui contiendra toutes les 
                informations de versionnage du projet.
            </p>
            <p>
                Pour ouvrir un terminal dans le répertoire de votre projet, vous pouvez faire un clic droit dans le répertoire et 
                choisir <em>Open Terminal</em> ou <em>Open Git Bash Here</em>. Sinon, vous pouvez toujours ouvrir le répertoire du projet 
                dans Visual Studio Code et ouvrir un terminal directement dans l&apos;éditeur en cliquant 
                sur <em>Terminal</em> et <em>New Terminal</em> dans la barre du menu.
            </p>
            <p>
                Voici un exemple de la commande pour initialiser un projet:
            </p>
            <CodeBlock language="terminal">{`> git init`}</CodeBlock>
        </section>

        <section>
            <h2>Créer un commit</h2>
            <p>
                Un commit est un ensemble de modifications que nous voulons sauvegarder dans le versionnage du projet. Pour créer un commit, 
                nous devons d&apos;abord indiquer les fichiers et modifications que nous voulons sauvegarder dans le commit avec la 
                commande <IC>git&npsp;add</IC>. Ensuite, nous pouvons créer le commit avec la commande <IC>git&nbsp;commit</IC>.
            </p>
            <p>
                Voici un exemple des commandes pour créer un commit avec toutes les modifications faites au projet:
            </p>
            <CodeBlock language="terminal">{commit}</CodeBlock>
            <p>
                Vous noterez l&apos;ajout du point dans la commande <IC>git&nbsp;add</IC>. Celà indique à Git d&apos;ajouter toutes les 
                dernières modifications au prochain commit. Tous les ajouts, modifications et suppressions de fichiers seront donc 
                ajoutés. Si vous voulez ajouter seulement certains fichiers, vous pouvez les ajouter un par un en spécifiant leur nom 
                après la commande <IC>git&nbsp;add</IC>.
            </p>
            <p>
                Dans la commande <IC>git&nbsp;commit</IC>, vous devez remplacer <em>Message du commit</em> par un message décrivant les 
                changements qui ont été fait dans ce commit. Ce message est très important pour comprendre les modifications faites au code 
                et un programmeur ne mettant pas de bon message de commit sera mal vu par ses collègues. Soyez clair et concis dans votre 
                message.
            </p>
        </section>

        <section>
            <h2>Lister les commits</h2>
            <p>
                Pour lister les commits faits dans un projet, nous pouvons utiliser la commande <IC>git&nbsp;log</IC>. Cette commande 
                affichera la liste des commits avec leur message, l&apos;auteur et la date du commit.
            </p>
            <p>
                Voici un exemple de la commande pour lister les commits:
            </p>
            <CodeBlock language="terminal">{`> git log`}</CodeBlock>
            <p>
                Si vous voulez afficher les modifications faites à chaque commit, vous pouvez ajouter l&apos;option <IC>-p</IC> à la
                fin de la commande <IC>git&nbsp;log</IC>.
            </p>
            <CodeBlock language="terminal">{`> git log -p`}</CodeBlock>
        </section>

        <section>
            <h2>Revenir à une version précédante</h2>
            <p>
                Pour revenir à une version précédante du projet, nous pouvons utiliser la commande <IC>git&nbsp;reset</IC>. Cette 
                commande nous permet de revenir à une version précédante du projet en supprimant les commits suivants. Attention lorsque 
                vous utilisez cette commande, car elle va supprimer des modifications faites au projet et vous pourriez perdre des données 
                importantes.
            </p>
            <p>
                Voici un exemple de la commande pour revenir à une version précédante:
            </p>
            <CodeBlock language="terminal">{`> git reset --hard HEAD~1`}</CodeBlock>
            <p>
                Nous utiliserons généralement l&apos;option <IC>--hard</IC> pour supprimer les modifications plus récente faites au projet. 
                Sans cette option, vous risquer de compliquer le versionnage du projet, ce que vous ne voulez pas. Un projet Git emmêlé 
                est typiquement difficile à réparer.
            </p>
            <p>
                Vous noterez aussi que l&apos;on utilise l&apos;identifiant <IC>HEAD~1</IC>. L&apos;identifiant <IC>HEAD</IC> représente la
                version actuelle du projet et <IC>HEAD~1</IC> représente la version précédante. Dans cet exemple, nous retournons donc à la 
                version précédante du projet. Vous pouvez remplacer <IC>1</IC> par un autre nombre pour revenir à une version plus ancienne.
            </p>
        </section>
    </>;
}
