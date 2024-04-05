import IC from '@/components/InlineCode'
import CodeBlock from '@/components/CodeBlock'
import Image from 'next/image';

import branches from '@/public/img/branches.svg'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Création de branches",
    description: "Démonstration des commandes pour manipuler les branches en local à l'aide du client Git.",
    keywords: ["git", "client", "commandes", "branches", "fusion", "organisation", "version", "revenir", "équipe", "projet"],
    group: "notes"
}

const fusion = 
`> git checkout main

> git merge nom-de-branche`;

export default function Page() {
    return <>
        <section>
            <h2>Branche de codes</h2>
            <p>
                Dans Git, les branches sont des versions parallèles du code source. Elles sont utilisées pour développer des fonctionnalités
                séparément du code principal que vous pourrez par la suite refusionner. Celà vous permet de travailler sur des 
                fonctionnalités sans affecter la version stable du code source dans la branche principale.
            </p>
            <p>
                Dans un développement typique, la branche principale est généralement appelée <IC>main</IC>. Vous verrez parfois 
                d&apos;autres nom comme <IC>master</IC>, <IC>trunk</IC> ou <IC>dev</IC>. C&apos;est la branche qui contient le code
                source stable. Pour que cette branche reste stable, nous n&apos;y travaillerons généralement pas directement. Nous allons 
                plutôt créer des branches à partir de cette branche principale et faire nos modifications dans ces branches. Une fois que 
                nous sommes satisfaits de nos modifications, nous les fusionnerons dans la branche principale.
            </p>
            <Image src={branches} alt="Exemple d'utilisation de branches avec Git" />
            <p>
                Dans cette page, nous verrons comment utiliser les branches en local directement avec le client Git. L&apos;utilisation de 
                branches avec un serveur Git est un peu différente sera vue un peu plus loin dans ce module.
            </p>
        </section>

        <section>
            <h2>Créer une branche</h2>
            <p>
                Pour créer une branche, nous utilisons la commande <IC>git&nbsp;checkout</IC>. Cette commande créera une nouvelle branche 
                à partir de la branche actuelle.
            </p>
            <p>
                Voici un exemple de création d&apos;une branche:
            </p>
            <CodeBlock language="terminal">{`> git checkout -b nom-de-branche`}</CodeBlock>
            <p>
                Cette commande créera une nouvelle branche nommée <IC>nom-de-branche</IC> et nous basculera automatiquement sur cette 
                branche puisque nous utilisons l&apos;option <IC>-b</IC>. Assurez-vous de choisir un nom de branche qui décrit bien la 
                fonctionnalité que vous développerez.
            </p>
        </section>

        <section>
            <h2>Changer de branche</h2>
            <p>
                Si vous développez plusieurs fonctionnalités en même temps, vous aurez probablement plusieurs branches actives. Pour 
                basculer d&apos;une branche à l&apos;autre, vous pouvez utiliser la commande <IC>git&nbsp;checkout</IC> sans l&apos;option
                <IC>-b</IC>.
            </p>
            <p>
                Voici un exemple de changement de branche:
            </p>
            <CodeBlock language="terminal">{`> git checkout main`}</CodeBlock>
            <p>
                La commande ci-dessus nous changera de brancher pour la branche principale <IC>main</IC>. Chaque branche a son propre 
                code source et ses propres modifications. Il est donc très probable que le code source change lorsque vous changez de 
                branche.
            </p>
        </section>

        <section>
            <h2>Fusionner une branche</h2>
            <p>
                Lorsque vous avez fini de développer une fonctionnalité dans une branche, que le tout est testé et fonctionnel, vous 
                aurez à fusionner cette branche dans la branche principale. De cette façon, la fonctionnalité que vous avez développée
                sera disponible dans la version stable du code source. Pour fusionner une branche, vous pouvez utiliser la 
                commande <IC>git&nbsp;merge</IC> à partir de la branche où vous voulez intégrer les modifications.
            </p>
            <p>
                Voici un exemple de fusion de branche:
            </p>
            <CodeBlock language="terminal">{fusion}</CodeBlock>
            <p>
                Dans l&apos;exemple ci-dessus, nous voulons fusionner la branche <IC>nom-de-branche</IC> dans la branche principale. Nous 
                changeons donc de branche pour la branche principale et nous performons la fusion ensuite.
            </p>
            <p>
                Une fusion peut parfois causer des conflits. Nous verrons comment résoudre ces conflits dans un module subséquent.
            </p>
        </section>

        <section>
            <h2>Supprimer une branche</h2>
            <p>
                Lorsque vous avez terminé de travailler sur une branche et que vous avez fusionné ses modifications dans la branche 
                principale, vous pouvez supprimer cette branche. C&apos;est une bonne pratique de faire son ménage pour garder un projet 
                propre. Pour supprimer une branche, vous pouvez utiliser la commande <IC>git&nbsp;branch</IC> avec l&apos;option <IC>-d</IC>.
            </p>
            <p>
                Voici un exemple de suppression de branche:
            </p>
            <CodeBlock language="terminal">{`> git branch -d nom-de-branche`}</CodeBlock>
            <p>
                Dans l&apos;exemple ci-dessus, nous supprimons la branche <IC>nom-de-branche</IC> puisque nous avons terminé de travailler 
                dessus et que son contenu est maintenant dans la branche principale.
            </p>
        </section>
    </>;
}
