import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import ColoredBox from '@/components/ColoredBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Commandes pour serveur Git",
    description: "Démonstration des commandes pour connecter et utiliser un serveur Git avec nos projets.",
    keywords: ["git", "commit", "push", "pull", "clone", "remote"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Connecter à un serveur Git</h2>
            <p>
                Si vous avez un projet que vous voulez héberger sur un serveur Git, nous devrons le connecter à ce serveur Git à l&apos;aide 
                d&apos;un remote. Un remote est une indication à notre répertoire Git local que nous voulons héberger le code ailleur. 
                C&apos;est essentiellement une adresse URL de l&apos;endroit où l&apos;on veut le stocker sur le web. Voici les étapes à 
                suivre pour ajouter un remote à votre Git local pour qu&apos;il puisse s&apos;héberger sur un serveur Git en 
                ligne:
            </p>
            <ol>
                <li>
                    Assurez-vous que le code source de votre projet est dans un répertoire Git local. Si ce n&apos;est pas le cas, 
                    initialiser le répertoire avec la commande <code>git init</code> comme vu au module précédent.
                </li>
                <li>
                    Connectez-vous sur votre compte GitHub en ligne et créez un nouveau répertoire Git comme vu précédemment.
                </li>
                <li>
                    Notez l&apos;adresse URL du répertoire Git que vous venez de créer. Elle est visible dans la page du répertoire Git sur 
                    GitHub. Elle aura la forme suivante:
                    <div><IC>https://github.com/nom_utilisateur/nom_repertoire.git</IC></div>
                    Assurez-vous de sélectionner l&apos;adresse URL en HTTPS et non SSH pour faciliter la connexion.
                </li>
                <li>
                    Dans votre projet local, ajoutez le remote à votre répertoire Git avec la commande ci-dessous. Vous devez remplacer la 
                    partie <IC>&lt;adresse_du_repertoire&gt;</IC> par l&apos;adresse URL noté à l&apos;étape précédante. Assurez-vous de 
                    bien être dans le répertoire de votre projet avant de lancer la commande.
                    <CodeBlock language="terminal">{'> git remote add origin <adresse_du_repertoire>'}</CodeBlock>
                </li>
            </ol>
            <p>
                Les étapes ci-dessus ajouteront un remote à votre répertoire Git local. Ce remote s&apos;appellera <IC>origin</IC> par
                convention. Le remote <IC>origin</IC> indique que la version stable de votre code source sera stockée sur le serveur Git
                indiqué par ce remote. Vous pouvez avoir plusieurs remotes pour un même répertoire Git, mais nous n&apos;en aurons 
                généralement qu&apos;un seul par projet.
            </p>
            <p>
                L&apos;ajout d&apos;un remote à votre répertoire Git local ne met pas automatiquement votre code source sur le serveur Git.
                Pour ce faire, vous devrez pousser votre code source sur le serveur Git.
            </p>
        </section>

        <section>
            <h2>Pousser sur un serveur Git</h2>
            <p>
                Pour mettre du code sur le serveur Git ou pour mettre à jour le code sur le serveur Git avec les modifications que vous avez
                fait en local, vous devrez pousser votre code source sur le remote précédemment ajouté. Pour ce faire, nous utiliserons la 
                commande <IC>push</IC> de git. Voici comment faire:
            </p>
            <ol>
                <li>
                    Assurez-vous que vous avez ajouté un remote à votre répertoire Git local comme vu à l&apos;étape précédente.
                </li>
                <li>
                    Assurez-vous que vous avez fait au moins un commit de vos modifications en local. Vous ne pouvez pas pousser du code 
                    qui n&apos;a pas été commité.
                </li>
                <li>
                    Utilisez la commande ci-dessous pour pousser votre code source sur le serveur Git.
                    <CodeBlock language="terminal">{'> git push origin main'}</CodeBlock>
                </li>
            </ol>
            <p>
                Une fois les modifications pousser sur le serveur Git, vous pourrez rafraîchir la page du répertoire sur GitHub pour voir
                le code et les modifications que vous avez faites qui se trouvent maintenant sur le serveur Git.
            </p>
            <ColoredBox title="À noter">
                La partie <IC>main</IC> de la commande ci-dessus indique que vous voulez pousser la branche <IC>main</IC> de votre 
                répertoire. Si votre installation de Git a bien été faite, la branche principale de votre répertoire devrait 
                s&apos;appeler <IC>main</IC>. Si ce n&apos;est pas le cas, remplacez <IC>main</IC> par le nom de votre branche principale 
                qui est probablement <IC>master</IC>.
            </ColoredBox>
        </section>

        <section>
            <h2>Tirer du serveur Git</h2>
            <p>
                Lorsque nous travaillons en équipe sur un projet, il est possible qu&apos;un de nos collègues ait fait des modifications sur
                le code source stable qui se trouve sur le serveur Git. Il est important de comprendre que le code source qui se trouve sur 
                votre ordinateur ne se met pas automatiquement à jour avec les nouvelles versions stables du serveur Git pour ne pas causer 
                de conflit. Vous devrez donc indiquer vous-même au serveur que vous voulez mettre à jour votre code source en local en 
                tirant les modifications du serveur Git. Pour ce faire, nous utiliserons la commande <IC>pull</IC> de git. Voici comment
                faire:
            </p>
            <ol>
                <li>
                    Assurez-vous que vous avez ajouté un remote à votre répertoire Git local comme vu à l&apos;une des étapes précédentes.
                </li>
                <li>
                    Utilisez la commande ci-dessous pour tirer les modifications du serveur Git sur votre ordinateur.
                    <CodeBlock language="terminal">{'> git pull origin main'}</CodeBlock>
                </li>
            </ol>
            <p>
                Une fois ces étapes faites, vous vous trouverez avec les modifications du serveur Git sur votre ordinateur. Vous pourrez
                continuer à travailler sur le code source et faire des commits pour mettre à jour le serveur Git avec d&apos;autres 
                modifications.
            </p>
            <ColoredBox title="Attention">
                Si vous tester le <IC>pull</IC> avec vos collègues, il est possible que vous ayez des conflits de code source. Les conflits
                sont des situations où Git ne peut pas résoudre automatiquement les différences entre les versions projet. Nous verrons 
                comment résoudre les conflits dans un module subséquent.
            </ColoredBox>
        </section>

        <section>
            <h2>Cloner un projet du serveur Git</h2>
            <p>
                Si vous voulez travailler sur un projet qui se trouve déjà sur un serveur Git, vous ne devez pas créer un nouveau 
                répertoire ou initialiser un répertoire existant. Vous devez plutôt cloner le répertoire du serveur Git sur votre 
                ordinateur. Pour ce faire, nous utiliserons la commande <IC>clone</IC> de git. Voici comment faire:
            </p>
            <ol>
                <li>
                    Connectez-vous sur votre compte GitHub en ligne et trouvez le répertoire que vous voulez cloner.
                </li>
                <li>
                    Trouvez et notez l&apos;adresse URL du répertoire Git que vous voulez cloner. Vous pouvez généralement la trouver dans 
                    la page du répertoire sous un bouton <IC>Code</IC>. Elle aura généralement la forme suivante:
                    <div><IC>https://github.com/nom_utilisateur/nom_repertoire.git</IC></div>
                    Assurez-vous de sélectionner l&apos;adresse URL en HTTPS et non SSH pour faciliter la connexion.
                </li>
                <li>
                    À l&apos;endroit où vous voulez mettre le répertoire du projet sur votre ordinateur, ouvrez un terminal.
                </li>
                <li>
                    Utilisez la commande ci-dessous pour cloner le répertoire du serveur Git sur votre ordinateur. Vous devez remplacer la 
                    partie <IC>&lt;adresse_du_repertoire&gt;</IC> par l&apos;adresse URL noté à l&apos;étape précédante.
                    <CodeBlock language="terminal">{'> git clone <adresse_du_repertoire>'}</CodeBlock>
                </li>
            </ol>
            <p>
                Une fois ces étapes faites, vous vous retrouverez avec une copie du répertoire du serveur Git sur votre ordinateur. Il est 
                important de noter que le répertoire cloné sera automatiquement connecté au serveur Git en ligne avec un remote. Vous 
                n&apos;avez donc pas besoin d&apos;ajouter manuellement un remote. Vous pourrez directement pousser et tirer des 
                modifications si vous en avez les permissions.
            </p>
        </section>
    </>;
}
