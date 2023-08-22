import BorderedBox from '@/components/BorderedBox'
import ColoredBox from '@/components/ColoredBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Organisation dans le cloud",
    description: "Présentation des outils cloud pour organiser nos données et nos projets sur le web.",
    keywords: ["cloud", "organisation", "donnée", "one drive", "google drive"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Mise en situation</h2>
            <p>
                Voici une mise en situation qui arrive malheureusement beaucoup trop fréquemment:
            </p>
            <BorderedBox>
                <p>
                    Jonathan est un étudiant en programmation informatique. La mi-session approche rapidement et il doit remettre 3 gros 
                    projets la semaine prochaine. Heureusement, Jonathan est un bon étudiant et il a déjà complété la plupart de ses projets. 
                    Il ne lui reste qu'à faire quelques modifications et à les soumettre.
                </p>
                <p>
                    Durant une pause lors d'un de ses cours, Jonathan sort de la classe pour aller se chercher à manger. En se levant, il 
                    s'accroche sur le bureau, faisant tomber sa bouteille d'eau qui se déverse complètement sur son ordinateur portable.
                    Après plusieurs tests, Jonathan doit se rendre à l'évidence, l'ordinateur est complètement inutilisable et les données 
                    sur son disque dur sont toutes corrompues. Tous les projets de Jonathan était sur ce disque dur et il doit maintenant 
                    les refaire en une moins d'une semaine s'il veut bien passer ses cours.
                </p>
            </BorderedBox>
            <p>
                Vous pensez que ce genre de situation n'arrive qu'aux autres, mais je peux vous confirmer personnellement que ce n'est pas le
                cas. Des accidents arrivent sans cesse et comme professeur, je vois ce genre de situation plusieurs fois par année chez mes 
                étudiants.
            </p>
            <p>
                Comment pouvont nous prévenir ou mitiger les problèmes causés par ce genre d'accident.
            </p>
        </section>

        <section>
            <h2>Backups</h2>
            <p>
                La solution à tous nos problèmes: les backups. Se créer des copies de nos fichiers et travaux pour être certain qu'en cas 
                d'accident, nous puissions utiliser nos copies. Les copies doivent toutefois ne pas être sur le même ordinateur que 
                l'original. Vous pouvez les mettre sur des clé USB, des disques durs externe ou même d'autres ordinateur.
            </p>
            <p>
                Le seul problème des backups, c'est que vous devez généralement le faire par vous-même. Il existe certains logiciels pour 
                automatiser le tout, mais vous devez apprendre à les utiliser. De plus, si vous faites vos copies une fois par jour, il est 
                quand même possible que vous perdiez le travail d'une journée complète en cas d'accident. Heureusement, vous avez aujourd'hui
                des outils qui peuvent prévenir ces problèmes.
            </p>
        </section>

        <section>
            <h2>Sauvegarde sur le web</h2>
            <p>
                Les services cloud (info-nuagique) d'aujourd'hui nous permette de sauvegarder des fichiers directement sur le web. Vous 
                gardez une copie sur votre ordinateur, mais une copie est automatiquement sauvegardé et mise à jour sur des serveurs dans 
                l'Internet. Puisque vous êtes presque toujours connecté à l'Internet, les copies sont toujours à jour. De plus, plusieurs 
                logiciels vous permettront de faire ces copies automatiquement.
            </p>
            <p>
                Voici une liste des outils cloud que je vous suggère d'utiliser. Choisissez-en un et utilisez-le. Si vous en avez plusieurs, 
                celà peut vous causer des problèmes si vous ne les gérez pas bien.
            </p>
            <ul>
                <li>
                    <strong>One Drive</strong>
                    <p>
                        C'est le service de sauvegarde de fichier cloud de Microsoft. Il s'intègre merveilleusement bien avec Windows. Si 
                        utilisez un ordinateur Windows, je vous recommande fortement de l'utiliser. Il est déjà installer sur les ordinateurs
                        Windows par défaut. Vous n'avez qu'à vous créer un compte, si ce n'est pas déjà fait, et vous pourrez l'utiliser.
                        L'intégration de OneDrive sur Windows est intéressante puisque vous l'utiliserez directement dans l'explorateur de 
                        fichier, de la même façon que pour vos fichiers normalement. Vous pouvez aussi y accéder à partir d'un portail web.
                    </p>
                </li>
                <li>
                    <strong>iCloud</strong>
                    <p>
                        C'est l'équivalent de One Drive, mais pour les utilisateurs d'ordinateur ayant MacOS. Il vient aussi par défaut avec 
                        les ordinateurs et téléphone de Apple. Si vous avez un ordinateur avec MacOS, c'est une très bonne option. Vous aurez
                        probablement un peu de configuration à faire pour sauvegarder des fichiers autres que les photos et vidéos, mais rien 
                        de trop compliqué. Encore une fois, vous avez aussi accès à un portail web.
                    </p>
                </li>
                <li>
                    <strong>Google Drive</strong>
                    <p>
                        C'est le service de sauvegarde de données en ligne de Google. Il est très utilisé par les travailleurs en 
                        administration pour son partage facile de documents textes ou de feuilles de calculs. Si vous téléchargez cette 
                        application, vous pouvez choisir quels dossiers vous voulez automatiquement copier sur le cloud. Vous avez aussi un 
                        portail web pour voir vos fichiers sauvegardés.
                    </p>
                </li>
            </ul>
            <p>
                Ces trois solutions fonctionnent sur tous les types d'ordinateur. Ce sont définitivement les plus connues, mais il en existe 
                plusieurs autres. Si vous préférez en utiliser un autre, c'est tout à fait correct. Tant que vos fichiers sont 
                automatiquement copié sur le web et qu'ils sont accessible en cas d'accident, c'est parfait!
            </p>

            <ColoredBox title="Attention">
                En tant qu'enseignant, nous ne donnerons pas de temps supplémentaire aux étudiants si un accident survient et que vous perdez 
                des données. Il est votre responsabilité d'utiliser les systèmes cloud pour créer des copies de vos fichier. Soyez prudent et
                prévoyant!
            </ColoredBox>
        </section>
    </>;
}
