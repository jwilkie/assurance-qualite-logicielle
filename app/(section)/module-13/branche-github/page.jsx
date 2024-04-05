import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Utilisation des branches avec GitHub",
    description: "Démonstration des opérations pour manipuler et fusionner les branches avec GitHub.",
    keywords: ["git", "github", "pull request", "merge request", "review"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Fusion avec GitHub</h2>
            <p>
                Lorsque vous travaillez avec GitHub, vous pouvez fusionner vos branches dans la branche principale 
                directement dans l&apos;interface web. Pour ce faire, vous devez créer une <em>pull request</em>. 
                Une <em>pull request</em> est une demande de fusion d&apos;une branche à une autre. Le côté 
                intéressant de cette approche est que vous pouvez demander à un collègue de passer en revue vos
                modifications avant de les fusionner. Cette page vous montrera comment créer et manipuler 
                une <em>pull request</em>.
            </p>
        </section>

        <section>
            <h2>Pull request</h2>
            <p>
                Pour créer une <em>pull request</em>, vous devez tout d&apos;abord vous assurer que votre branche
                est à jour avec la branche principale. Pour ce faire, vous pouvez utiliser les commandes Git vu
                aux pages précédentes. Si votre branche n&apos;est pas à jour, la <em>pull request</em> ne pourra 
                pas fusionner automatiquement votre code.
            </p>
            <p>
                Une fois votre branche à jour, vous pouvez vous rendre sur la page de votre projet sur GitHub. 
                Cliquez sur l&apos;onglet <em>Pull requests</em> et cliquez ensuite sur le bouton 
                vert <em>New pull request</em>. Vous serez redirigé vers une page où vous pourrez choisir les
                branches à comparer et fusionner. Typiquement, vous choisirez la branche <IC>main</IC> comme base 
                et votre branche comme comparaison. Vous verrez ensuite les modifications que vous avez apportées
                à votre branche.
            </p>
            <p>
                Si vous êtes satisfait des modifications, vous pouvez cliquer sur le bouton 
                vert <em>Create pull request</em>. Vous pourrez alors ajouter un titre et une description à 
                demande de fusion. Typiquement, vous voulez écrire un bref résumé de vos modifications et pourquoi 
                vous les faites. Vous pouvez aussi ajouter un collègue pour qu&apos;il passe en revue vos 
                modifications. Une fois le tout rempli, vous pouvez cliquer sur le bouton 
                vert <em>Create pull request</em>.
            </p>
            <p>
                Si vous avez le droit de fusionner votre branche, vous verrez un bouton 
                vert <em>Merge pull request</em> que vous pouvez cliquer pour fusionner votre code. Dans les gros 
                projets, il est possible que vous n&apos;ayez pas les droits de fusion. Vous devrez alors assigner 
                un de vos collègues pour qu&apos;il fusionne votre code.
            </p>
        </section>

        <section>
            <h2>Revue de code</h2>
            <p>
                Lorsque vous créez une <em>pull request</em>, vous pouvez demander à un collègue de passer en revue
                votre code. Cette approche très utile vous permet d&apos;assurer que votre code répond aux standards
                de qualité de votre équipe. Votre collègue pourra alors commenter votre code et vous demander des
                modifications si nécessaire.
            </p>
            <p>
                Pour accéder à l&apos;outil de revue de code, vous pouvez cliquer sur 
                l&apos;onglet <em>Files changed</em> lorsque vous êtes sur la page de votre <em>pull request</em>.
                Vous verrez alors les modifications apportées à la branche à fusionner. Vous pouvez écrire vos 
                commentaires de la façon suivante:
            </p>
            <ul>
                <li>
                    En cliquant sur le bouton <IC>+</IC> à côté de la ligne de code que vous voulez commenter.
                </li>
                <li>
                    En cliquant et glissant sur le bouton <IC>+</IC> pour écrire un commentaire sur plusieurs 
                    lignes de code.
                </li>
                <li>
                    En cliquant sur la bulle <em>Comment on this file</em> pour écrire un commentaire général
                    sur le fichier.
                </li>
            </ul>
            <p>
                Si vous retournez dans l&apos;onglet <em>Conversation</em>, vous pourrez aussi écrire des 
                commentaires généraux sur la <em>pull request</em>. Vous pourrez aussi voir les commentaires
                de vos collègues et y répondre.
            </p>
        </section>
    </>;
}
