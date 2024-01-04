import IC from "@/components/InlineCode";

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Code source dans le cloud",
    description: "Instruction de bonnes pratiques pour conserver le code dans les services clouds.",
    keywords: ["cloud", "organisation", "code", "donnée", "one drive", "google drive", "icloud"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Conséquences</h2>
            <p>
                Mettre le code source dans le cloud peut avoir quelques conséquences. En effet, certains langages de 
                programmations et certaines plateformes utilisent des techniques qui peuvent rendre le travail sur le cloud plus 
                problématique. Entre autre, certaines plateformes utilisent des gestionnaires de paquets, technologie qui force 
                le téléchargement de librairies de code externe qui crée généralement des erreurs de synchronisation avec les 
                services de cloud.
            </p>
            <p>
                Pour les petits projets simples, vous pouvez simplement mettre le code dans votre service cloud. Si votre projet 
                est un peu plus complexe, je vous recommande donc une certaine approche pour éviter d&apos;avoir des problèmes.
            </p>
        </section>

        <section>
            <h2>Éviter le cloud</h2>
            <p>
                Pour les projets où vous ne voulez pas utiliser le cloud directement, vous devrez porter certaines attentions. 
                En effet, si vous avez installé un service cloud, une bonne partie de votre ordinateur sera automatiquement 
                sauvegardé et synchronisé dans le cloud. Il faut donc trouver un espace sur votre ordinateur qui ne sera pas 
                touché.
            </p>
            <p>
                Les dossiers du bureau (desktop), des images et vidéos ainsi que des documents généraux sont généralement 
                automatiquement ajouté au cloud. À moins de le désactiver, vous devez donc les éviter. Je vous recommande donc 
                de vous créer un dossier pour vos projets scolaires spéciaux dans le répertoire de votre utilisateur sur votre 
                ordinateur. Sur Windows, vous pouvez créer le dossier <IC>École</IC> dans <IC>C:\Users\&lt;nom_utilisateur&gt;\</IC>.
            </p>
            <p>
                Ce dossier ne devrait pas être mis sur le cloud par défaut.
            </p>
        </section>

        <section>
            <h2>Backup</h2>
            <p>
                Si votre projet n&apos;est pas sur le cloud, il n&apos;a probablement pas de backup. Je vous recommande donc de le copier 
                sur votre service de cloud de temps en temps. Assurez-vous toutefois de ne pas travailler sur la version qui est 
                sur le cloud pour éviter les problèmes de synchronisation. Une bonne approche est la suivante:
            </p>
            <p>
                Si vous voulez travailler sur votre projet, allez le chercher dans votre service cloud et copier le dans votre 
                dossier de travail (ex: <IC>C:\Users\&lt;nom_utilisateur&gt;\École\</IC>). Lorsque vous avez fini de travailler 
                sur le projet, sauvegarder-le et remplacer sa version dans le cloud par la nouvelle version sur laquelle vous 
                venez de travailler.
            </p>
            <p>
                Bref, vous travaillez toujours dans le dossier qui n&apos;est pas dans le cloud et vous sauvegardez toujours votre 
                projet dans le cloud lorsque vous avez terminé.
            </p>
        </section>
    </>;
}
