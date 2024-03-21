/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction Git",
    description: "Introduction à Git, l'outil de versionnage le plus utilisé dans le domaine de la programmation informatique.",
    keywords: ["git", "organisation", "version", "revenir", "équipe", "projet"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Système de versionnage</h2>
            <p>
                Un système de versionnage est un système permettant de gérer les différentes versions du code d&apos;une application. En général, ce 
                système garde les données du code source dans le cloud ou sur un serveur privé. En gros, nous l&apos;utilisons comme un endroit pour 
                sauvegarder notre code source, un peu comme si nous le sauvegardions dans OneDrive ou Google Drive, mais avec le bénéfice de garder 
                l&apos;information des différentes versions.
            </p>
            <p>
                Comme discuté dans le cours précédant, il est très utile de garder plusieurs version d&apos;un code source. En effet, il arrive 
                fréquement d&apos;écraser du code en pensant qu&apos;il était inutile pour finalement se rendre compte qu&apos;on en a encore besoin. Parfois, 
                quelques <kbd>Ctrl</kbd> + <kbd>Z</kbd> (Undo) peuvent régler le problème, mais si le changement est plus ancien, cela peut causer 
                des problèmes. Un autre cas typique est que certains logiciels supportes plusieurs version fonctionnelles d&apos;un logiciel en même 
                temps. Par exemple, dans plusieurs cas, des logiciels ont une version stable et une version ayant les dernières fonctionnalitées, 
                mais contenant potentiellement des bogues.
            </p>
            <p>
                Un autre avantage des systèmes de versioning est la possibilité de coopération. Sur le marché du travail, la coopération pour le 
                développement d&apos;un projet est nécessaire, surtout si le projet tend à grossir. Pour résoudre les conflits que cela peut occasionner, 
                les gestionnaires de version permette entres autres aux développeurs de travailler sur des versions parallèles du même logiciel qui 
                pourront être combinées quand les programmeurs seront prêt.
            </p>
        </section>
        <section>
            <h2>Versionnage avec Git</h2>
            <p>
                Git est présentement le système de versioning le plus utilisé par les développeurs. C&apos;est donc celui que l&apos;on utilisera dans 
                ce cours. Bien que très complexe, il bénificie de 
                plusieurs outils pour simplifier son utilisation. Initialement, Git a été développé par Linus Torvalds, le créateur de 
                Linux, pour pouvoir gérer les différentes versions de linux facilement. Une lecture 
                de <a href="https://en.wikipedia.org/wiki/Git" target="_blank">l&apos;article Wikipedia</a> en anglais est 
                une lecture intéressante et amusante si vous en avez le temps.
            </p>
            <p>
                Comme mentionné dans le cours précédant, les systèmes de versionnage utilisent généralement un serveur de versionnage. C&apos;est 
                aussi le cas de Git. Ceci étant dit, pour communiquer avec ce serveur Git, nous aurons besoin d&apos;un client Git sur notre 
                ordinateur. Ce client Git est un petit logiciel qui nous permettra d&apos;utiliser des commandes pour faire du versionnage et 
                éventuellement envoyer et recevoir des données aux serveurs de versionnage. Dans ce module, nous nous concentrerons sur 
                l&apos;utilisation de base du client Git. Nous verrons comment utiliser et communiquer avec les serveurs Git plus tard.
            </p>
        </section>
    </>;
}
