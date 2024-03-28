import ColoredBox from '@/components/ColoredBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Créer un compte GitHub",
    description: "Démonstration de la création d'un compte GitHub et d'un répertoire Git sur sa plateforme en ligne.",
    keywords: ["git", "github", "repository"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Introduction à GitHub</h2>

            <p>
                GitHub est un service en ligne qui nous permet d&apos;héberger nos projets Git. C&apos;est essentiellement un serveur Git,
                mais avec une interface web qui facilite son utilisation. Il possède aussi plusieurs autres fonctionnalités très utiles pour
                le développement de logiciels que nous apprendrons à utiliser durant les prochains modules.
            </p>
            <p>
                GitHub est, au moment de l&apos;écriture de ce module, le plus grand service d&apos;hébergement de code source au monde. Il
                héberge de nombreux projets <em>open source</em>, mais aussi un bon nombre de projets privées et commercial. Il est utilisé
                par des millions de développeurs à travers le monde pour collaborer sur des projets, partager du code, et apprendre de
                nouvelles technologies. Il est intéressant à utiliser pour nous puisqu&apos;il est gratuit pour les petits projets et les
                projets <em>open source</em>.
            </p>
            <p>
                GitHub existe depuis 2008 et a été racheté par Microsoft en 2018. Depuis, il a connu une croissance exponentielle. On peut
                y retrouver le code source de plusieurs projets populaires, tels que le noyau Linux, le navigateur Chromium, le framework
                JavaScript React, les spécifications des langages de programmations Python et C#, la suite cryptographique OpenSSL, le code
                source de Git lui-même et plusieurs autres.
            </p>
        </section>

        <section>
            <h2>Création d&apos; compte</h2>

            <p>
                Pour commencer à utiliser GitHub, il faut d&apos;abord créer un compte. Voici les étapes à suivre pour créer un compte:
            </p>
            <ol>
                <li>
                    Aller sur la page de <a href="https://github.com/signup">création de compte de GitHub</a>.
                </li>
                <li>
                    Entrez votre adresse courriel, un mot de passe et un nom d&apos;utilisateur.
                    <ul>
                        <li>
                            Vous pouvez utiliser votre adresse courriel personnelle ou celle du collège. GitHub permet d&apos;utiliser
                            plusieurs adresses courriel pour un seul compte.
                        </li>
                        <li>
                            Assurez-vous de choisir un mot de passe sécuritaire. GitHub vous donnera des indications sur la force de votre
                            mot de passe. Un piratage de votre compte GitHub peut avoir de graves conséquences sur votre réputation en tant
                            que programmeur et sur les projets pour lesquels vous contribuez.
                        </li>
                        <li>
                            Rappellez-vous bien de vos informations de connexion. Vous en aurez besoin pour vous connecter à GitHub et
                            comme c&apos;est un outil que vous utiliserez souvent, il est important de ne pas les oublier.
                        </li>
                        <li>
                            Vous n&apos;avez pas besoin de sélectionner l&apos;option de recevoir des courriels de GitHub.
                        </li>
                    </ul>
                </li>
                <li>
                    Compléter les tests pour prouver que vous n&apos;êtes pas un robot.
                </li>
                <li>
                    Utiliser le code qui vous est envoyé par courriel pour valider votre adresse courriel et votre compte.
                </li>
            </ol>
            <p>
                Une fois toutes les informations entrées et validées, vous serez redirigé vers la page principale de votre compte GitHub. 
                Cette page contient une quantité phénoménale d&apos;informations et de fonctionnalités. Nous allons explorer les plus 
                importantes durant les prochains modules.
            </p>
        </section>

        <section>
            <h2>Créer un répertoire </h2>
            <p>
                La fonctionnalités de base de GitHub est d&apos;héberger des répertoires Git. Nous allons donc commencer par apprendre 
                comment créer un répertoire sur GitHub. Pour commencer, il est important de comprendre qu&apos;un répertoire sur GitHub est 
                un espace de stockage pour un projet Git. Par défaut, il ne contient aucun code source, mais il peut en contenir si vous
                poussez des modifications. Pour l&apos;instant, nous allons simplement créer un répertoire vide. Nous apprendrons comment
                ajouter du code source dans un répertoire un peu plus tard.
            </p>
            <p>
                Voici les étapes à suivre pour créer un répertoire sur GitHub:
            </p>
            <ol>
                <li>
                    Connectez-vous à votre compte GitHub et rendez-vous sur la page principale de votre compte.
                </li>
                <li>
                    Cliquez sur le bouton vert <em>Create repository</em> pour créer un nouveau répertoire.
                </li>
                <li>
                    Entrez un nom pour votre répertoire. Ce nom doit être unique parmi tous vos répertoires sur GitHub. Il est aussi    
                    recommandé de choisir un nom qui décrit bien le contenu du répertoire.
                </li>
                <li>
                    Entrez une description pour votre répertoire. Cette description est optionnelle, mais elle est très utile lorsque vous 
                    avez de nombreux répertoires sur votre compte.
                </li>
                <li>
                    Choisissez si votre répertoire sera public ou privé. Les répertoires publics sont visibles par tout le monde et peuvent 
                    être clonés par n&apos;importe qui. Les répertoires privés sont visibles seulement par vous et les personnes que vous
                    autorisez. Dans un cadre scolaire, il est préférable de choisir un répertoire privé pour protéger votre code source.
                </li>
                <li>
                    Cliquer sur le bouton vert <em>Create repository</em> pour créer le répertoire.
                </li>
            </ol>

            <p>
                Une fois le formulaire complété, vous serez redirigé vers la page principale de votre répertoire. Cette page contient
                plusieurs informations, dont l&apos;adresse URL du répertoire que nous utiliseront un peu plus loin dans le module.
            </p>

            <ColoredBox title="Attention">
                À moins que votre enseignant vous demande le contraire, pour tout projet scolaire, vous devez choisir un répertoire privé. 
                Cela protégera votre code source et vous évitera des problèmes de plagiat. Malheureusement, plusieurs étudiants ont déjà
                eu des problèmes de fraude scolaire parce qu&apos;il partageait involontairement leur code source sur un répertoire public.
                Faites attention à ce que celà ne vous arrive pas.
            </ColoredBox>
        </section>

        <section>
            <h2>Compétiteurs</h2>

            <p>
                GitHub n&apos;est pas le seul service d&apos;hébergement Git en ligne. Il existe plusieurs autres services qui offrent des
                fonctionnalités similaires. Les plus populaires sont:
            </p>

            <ul>
                <li>
                    <strong>GitLab</strong> - Un service d&apos;hébergement Git en ligne qui offre des fonctionnalités similaires à
                    GitHub. Il est open source et peut être auto-hébergé. C&apos;est le compétiteur le plus direct de GitHub.
                </li>
                <li>
                    <strong>Bitbucket</strong> - Un service d&apos;hébergement Git en ligne offert par Atlassian. Il est souvent utilisé
                    par les équipes qui utilisent les autres produits d&apos;Atlassian, tels que Jira et Confluence.
                </li>
                <li>
                    <strong>Gitea</strong> - Un service d&apos;hébergement Git en ligne open source qui peut être auto-hébergé. Il est
                    très léger et rapide, mais offre moins de fonctionnalités que les autres services.
                </li>
            </ul>

            <p>
                Si vous voulez essayer une alternative à GitHub qui possède des fonctionnalités similaires, je vous recommande d&apos;essayer
                GitLab. Il est gratuit et offre des fonctionnalités très intéressantes pour les projets open source et les projets privés.
            </p>
        </section>
    </>;
}
