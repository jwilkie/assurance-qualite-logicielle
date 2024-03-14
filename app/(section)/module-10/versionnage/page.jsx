import Image from 'next/image'
import versionnage from '@/public/img/versionnage.svg'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Versionnage du code source",
    description: "Présentation des méthode de conservation du code source et de son versionnage.",
    keywords: ["versionnage", "versioning", "git", "svn", "version"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Bénéfice du versionnage</h2>
            <p>
                Le versionnage du code source est une pratique essentielle pour tout programmeur. Pour ceux qui ne connaissent pas, le 
                versionnage est une méthode qui permet de conserver les différentes versions du code source d&apos;un projet. 
                Essentiellement, chaque fois qu&apos;un programmeur fait un changement notable au code source, une nouvelle version est 
                créée et on garde chacune de ces versions. Voici quelques bénéfices du versionnage:
            </p>
            <ul>
                <li>
                    Revenir à une version antérieur si jamais un problème survient.
                </li>
                <li>
                    Garder une trace des changements dans le code au fil du temps.
                </li>
                <li>
                    Faciliter le travail d&apos;équipe en permettant à plusieurs programmeur d&apos;avoir sa propre version du code source
                    et de la fusionner avec les autres.
                </li>
                <li>
                    Garder une version stable du code source en tout temps.
                </li>
            </ul>
        </section>

        <section>
            <h2>Fonctionnement générique du versionnage</h2>
            <p>
                Bien que les logiciels de versionnage diffèrent dans leur fonctionnement, ils ont tous une structure similaire. Ils 
                fonctionnent tous sensiblement de la façon suivante:
            </p>
            <Image src={versionnage} alt="Fonctionnement générique du versionnage" />
            <p>
                Dans le schémas ci-dessus, vous noterez le serveur de versionnage. Ce serveur de versionnage est en fait un endroit central 
                où l&apos;on garde toutes les versions du code source. Puisque le serveur est central, il peut garder la version stable du 
                code source ainsi que tous ses changements au fil du temps. Il nous permettra aussi de revenir à des versions antérieurs si 
                c&apos;est nécessaire.
            </p>
            <p>
                À la base chaque programmeur possède une copie du code source. Lorsqu&apos;un programmeur fait un changement, il fera un 
                <em>commit</em> pour envoyer ses changements au serveur de versionnage.  Lorsqu&apos;un programmeur veut récupérer les 
                changements des autres, il fera une mise à jour pour récupérer les changements des autres programmeurs.
            </p>
            <p>
                Si vous apprennez à utiliser un logiciel de versionnage, vous verrez qu&apos;il est facile d&apos;en utiliser un autre.
                Les concepts de base restent les mêmes.
            </p>
        </section>

        <section>
            <h2>Solution logicielle au versionnage</h2>
            <p>
                De nombreuses solutions logicielles existent pour le versionnage du code source. Parmi les plus populaires, on 
                retrouve <strong>SVN</strong>, <strong>Mercurial</strong>, <strong>Perforce</strong> et <strong>Subversion</strong>. C&apos;est 
                toutefois le logiciel <strong>Git</strong> qui est présentement le standard de l&apos;industrie. Le fait que son logiciel 
                de base est gratuit et que de nombreux serveurs d&apos;hébergement de code source 
                comme <strong>GitHub</strong> et <strong>GitLab</strong> le sont aussi en fait un choix très populaire.
            </p>
            <p>
                Dans les prochains modules, nous explorerons le fonctionnement de <strong>Git</strong> et de <strong>GitHub</strong> pour 
                faire le versionnage de votre code source et faciliter le travail d&apos;équipe.
            </p>
        </section>
    </>;
}
