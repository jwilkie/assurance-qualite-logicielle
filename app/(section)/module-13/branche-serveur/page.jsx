import CodeBlock from '@/components/CodeBlock'
import IC from '@/components/InlineCode'
import Image from 'next/image';

import fusion from '@/public/img/fusion.svg'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Utilisation des branches avec un serveur Git",
    description: "Démonstration des opérations pour manipuler, fusionner et gérer les conflits entre les branches avec un serveur Git.",
    keywords: ["git", "conflict", "merge", "équipe", "team", "collègue"],
    group: "notes"
}

const fetchBranche = 
`> git fetch origin

> git checkout nom-de-branche`;

const fusionBranche = 
`> git checkout nom-de-branche
> git pull origin main

> git add .
> git commit -m "Fusion de la branche principale"
> git push origin nom-de-branche`;

const fusionMain = 
`> git checkout main
> git pull origin nom-de-branche

> git add .
> git commit -m "Ajout de la fonctionnalité X"
> git push origin main`;

const conflit = 
`public static void Main() 
{
\<<<<<<< HEAD:Program.cs
    Console.WriteLine("Je m'appelle Bob!");
=======
    Console.WriteLine("Je m'appelle Alice!");
>>>>>>> cb1abc6bd98cfc84317f8aa95a7662815417802d
}`;

export default function Page() {
    return <>
        <section>
            <h2>Pourquoi brancher sur le serveur</h2>
            <p>
                De ce qu&apos;on a fait jusqu&apos;à présent, les branches existaient uniquement en local sur notre 
                ordinateur. Il est toutefois possible de lier nos branches locales à des branches sur le serveur
                Git. C&apos;est d&apos;ailleurs ce qui est déjà fait pour votre branche principale <IC>main</IC>. 
                Nous pouvons toutefois le faire aussi pour d&apos;autres branches.
            </p>
            <p>
                À première vue, il peut sembler inutile de créer des branches sur un serveur Git. Après tout, 
                utiliser des branches en local semble suffisant pour développer des fonctionnalités séparément. Il 
                y a toutefois plusieurs avantage à connecter les branches locales à des branches sur un serveur Git.
                En voici quelques-uns:
            </p>
            <ul>
                <li>
                    Partager nos fonctionnalités en développement avec l&apos;équipe. Si votre code est sur une 
                    branche du serveur Git, les autres membres de l&apos;équipe pourront facilement y accéder.
                </li>
                <li>
                    Garder une copie de nos branches en sécurité. Si votre ordinateur tombe en panne, vous aurez
                    toujours une copie de vos branches sur le serveur.
                </li>
                <li>
                    Faciliter la fusion des branches. Si vous avez terminé une fonctionnalité, vous pourrez 
                    plus facilement la fusionner avec la branche principale.
                </li>
                <li>
                    Faciliter la revue de code. Les membres de l&apos;équipe pourront facilement voir vos 
                    modifications et vous donner des commentaires.
                </li>
            </ul>
        </section>

        <section>
            <h2>Mettre une branche sur le serveur</h2>
            <p>
                Si vous avez clôner un répertoire Git ou que vous avez ajouter un remote, vous êtes connecté au 
                serveur Git. Toitefois, bien que la branche principale soit sur le serveur, vos branches locales 
                ne le sont pas nécessairement. Pour qu&apos;une branche secondaire soit disponible sur le serveur,
                nous utilisons la commande <IC>git push</IC>, comme pour la branche principale. Nous devrons 
                toutefois spécifier la branche à pousser.
            </p>
            <CodeBlock language="terminal">{`> git push origin nom-de-branche`}</CodeBlock>
            <p>
                Dans le commande ci-dessus, vous devez remplacer <IC>nom-de-branche</IC> par le nom de la branche
                sur laquelle vous travaillez en local et que vous voulez mettre sur le serveur.
            </p>
            <p>
                Si un autre membre de l&apos;équipe veut travailler sur votre branche et qu&apos;il a déjà accès 
                au projet, il pourra la récupérer du serveur avec la commande <IC>git fetch</IC> et ensuite changer
                de branche avec la commande <IC>git checkout</IC>.
            </p>
            <CodeBlock language="terminal">{fetchBranche}</CodeBlock>
            <p>
                Si la branche n&apos;est pas à jour avec celle sur le serveur, vous pouvez toujours faire 
                un <IC>git pull</IC> pour récupérer les dernières modifications. Attention, si vous avez fait des 
                modifications qui ne sont pas commité sur votre branche, le <IC>pull</IC> ne fonctionnera pas.
            </p>
            <CodeBlock language="terminal">{'> git pull origin nom-de-branche'}</CodeBlock>
            <p>
                Encore une fois, vous devez remplacer <IC>nom-de-branche</IC> par le nom de la branche que vous 
                voulez récupérer.
            </p>
        </section>

        <section>
            <h2>Fusionner avec la branche principale</h2>
            <p>
                Lorsque vous avez terminé de développer une fonctionnalité sur une branche, vous devrez 
                l&apos;ajouter à la branche principale par le biais d&apos;une fusion. La première étape est de
                mettre à jour votre branche avec les dernières modifications de la branche principale. En effet, 
                entre le moment où vous avez commencé à développer votre fonctionnalité et le moment où vous la
                fusionnerez, il est possible que d&apos;autres modifications aient été ajoutées à la branche par 
                d&apos;autres membres de l&apos;équipe.
            </p>
            <Image src={fusion} alt="Branche non à jour avec main" />
            <p>
                Comme vous pouvez le voir dans l&apos;image ci-dessus, votre branche n&apos;est plus à jour avec 
                la branche principale puisqu&apos;un de vos collègues a ajouté des modifications. La fusion 
                de votre branche directement dans la branche principale ne peut donc pas se faire directement 
                puisque Git ne peut pas garantir qu&apos;il n&apos;y aura pas de conflits.
            </p>
            <p>
                Pour mettre à jour votre branche, vous pouvez simplement utiliser la commande <IC>git pull</IC> pour 
                amener les modifications de la branche principale dans votre branche. Assurez-vous d&apos;être dans 
                votre branche avant de faire le <IC>pull</IC> pour que le celui-ci s&apos;éffectue au bon endroit.
            </p>
            <CodeBlock language="terminal">{fusionBranche}</CodeBlock>
            <p>
                Vous noterez qu&apos;on fait un commit ainsi qu&apos;un push après le <IC>pull</IC>. C&apos;est
                pour ajouter les résultats de la fusion au versionnage et sur le serveur Git.
            </p>
            <p>
                Une fois les modifications de la branche principale dans votre branche, vous pouvez fusionner
                votre branche dans la branche principale à l&apos;aide de la commande <IC>git pull</IC> de façon
                similaire à ce que nous avons fait juste avant. Vous devrez commencer par changer de branche pour 
                la branche principale et ensuite faire un <IC>pull</IC> pour amener les modifications de votre 
                branche. Puisque votre branche intègre déjà les modifications de la branche principale, la fusion
                se fera sans problème.
            </p>
            <CodeBlock language="terminal">{fusionMain}</CodeBlock>
        </section>

        <section>
            <h2>Gestion de conflits</h2>
            <p>
                Lorsque que l&apos;on regarde les étapes pour fusionner une branche dans la branche principale, 
                on peut se demander pourquoi on ne fait pas directement la fusion dans le <IC>main</IC>. Pourquoi 
                faisons-nous cette fusion intermédiaire? La raison est simple: les conflits. Lorsque le code de 
                deux branches est modifié au même endroit, Git ne peut pas savoir quelle version garder. Il 
                entrera alors en mode de gestion de conflits. Git vous indiquera les fichiers ainsi que les 
                lignes qui posent problème. Vous devrez résoudre ces conflits manuellement un par un.
            </p>
            <p>
                Lorsqu&apos;un conflit survient, Git vous indiquera les fichiers en conflit dans le terminal. 
                Si vous ouvrez ces fichiers dans un éditeur de texte, vous verrez des marqueurs de 
                conflits <IC>{'<<<<<<<'}</IC>, <IC>{'======='}</IC> et <IC>{'>>>>>>>'}</IC>. 
            </p>
            <CodeBlock language="csharp">{conflit}</CodeBlock>
            <p>
                La section entre <IC>{'<<<<<<<'}</IC> et <IC>{'======='}</IC> est le code de votre branche. La 
                section entre <IC>{'======='}</IC> et <IC>{'>>>>>>>'}</IC> est le code de la branche que vous 
                fusionnez, généralement la branche principale. Vous devrez choisir quelle version garder ou 
                encore complètement changer le code pour résoudre le conflit. Pour que Git sache que le conflit
                est résolu, vous devrez retirer les marqueurs de conflits et faire un commit.
            </p>
            <p>
                Assurez-vous de bien comprendre le conflit et de bien tester votre code après sa résolution. Une 
                fois que le code est testé et fonctionnel, vous pourrez continuer la fusion de votre branche. Dans 
                la branche principale.
            </p>
            <p>
                Il peut être intimidant de gérer les conflits lorsqu&apos;on n&apos;est pas habitué. Heureusement, 
                les éditeurs de code modernes possèdent des outils pour vous aider à résoudre les conflits. Ils 
                vous permetteront de voir les différences entre les deux versions et de choisir laquelle garder à 
                l&apos;aide d&apos;un simple clic de souris. N&apos;hésitez pas à utiliser ces outils pour vous
                aider.
            </p>
        </section>
    </>;
}
