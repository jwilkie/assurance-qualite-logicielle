import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Installations",
    description: "Démonstration de l'installation de Git sur Windows.",
    keywords: ["git", "installation", "organisation", "version", "revenir", "équipe", "projet"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Installateur de Git</h2>
            <p>
                L&apos;installation de Git est vraiment simplifié par un installateur très complet. Ceci étant dit, même si on peut avoir 
                tendance à cliquer sur <em>Next</em> sans trop lire ce que l&apos;installateur fait, il est quand même intéressant de comprendre
                ce qui ce passe.
            </p>
            <p>
                Vous pouvez trouver l&apos;installateur au lien ci-dessous. Assurez-vous de choisir la 
                version <em>64-bit Git for Windows Setup</em> ou autre si vous avez des besoins spéciaux.
            </p>
            <p>
                <a href="https://git-scm.com/download/win" target="_blank">Installateur Git</a>
            </p>
        </section>

        <section>
            <h2>Étapes de l&apos;installation</h2>
            <p>
                Voici la marche à suivre pour bien installer Git et comprendre ce que son installateur fait:
            </p>
            <ol>
                <li>
                    Exécuter l&apos;installateur de Git téléchargé au lien ci-dessus.
                </li>
                <li>
                    Accepter la licence <em>Open Source</em> de Git en cliquant <em>Next</em>.
                </li>
                <li>
                    Lorsqu&apos;on vous demande de sélectionner ce que vous voulez installer, garder les éléments de base. Celà vous 
                    installera, entre autres, <strong>Git Bash</strong>, un terminal spécialisé pour Git que nous utiliserons parfois.
                </li>
                <li>
                    Lorsqu&apos;on vous demande de choisir l&apos;éditeur de code par défaut de Git, choisir Visual Studio Code (ne pas choisir
                    la version <em>Insiders</em> si elle est disponible).
                </li>
                <li>
                    Lorsqu&apos;on vous demande d&apos;ajuster le nom de la branche initiale d&apos;un répertoire Git, indiquer que vous voulez le 
                    surcharger pour le nom <em>main</em>. Nous parlerons en plus grand détail de cette option un peu plus tard, mais en 
                    faisant celà, il sera plus facile de vous connecter avec les serveurs Git.
                </li>
                <li>
                    Lorsqu&apos;on vous demande d&apos;ajuster l&apos;environnement <em>PATH</em>, choisir l&apos;option recommandé par Git.
                </li>
                <li>
                    Lorsqu&apos;on vous demande de configurer OpenSSH, une suite de cryptographie pour la sécurisation des programmes 
                    informatiques, choisir l&apos;option <em>Use bundled OpenSSH</em>.
                </li>
                <li>
                    Lorsqu&apos;on vous demande de choisir la librairie utilisé pour le HTTPS, sélectionner OpenSSL.
                </li>
                <li>
                    Lorsqu&apos;on vous demande de configurer la conversion des fins de lignes, choisir l&apos;option sélectionner par défaut dans 
                    l&apos;installateur.
                </li>
                <li>
                    Lorsqu&apos;on vous demande de configurer le terminal Git Bash, choisir l&apos;option sélectionner par défaut dans l&apos;installateur.
                </li>
                <li>
                    Lorsqu&apos;on vous demande de choisir le comportement de la commande <IC>git pull</IC>, sélectionner <em>Fast-forward 
                    or merge</em>.
                </li>
                <li>
                    Lorsqu&apos;on vous demande de choisir un logiciel d&apos;aide pour l&apos;authentification, choisir <em>Git Credential Manager</em>.
                </li>
                <li>
                    Lorsqu&apos;on vous demande quelles options supplémentaires vous voulez activer, choisir les options sélectionnées par 
                    défaut dans l&apos;installateur.
                </li>
                <li>
                    Lorsqu&apos;on vous demande si vous voulez activer des options expérimentales, n&apos;en choisisser aucune. Nous voulons avoir 
                    une installation de Git sans bogues ou problèmes.
                </li>
                <li>
                    Cliquer sur le bouton <em>Install</em> pour installer Git et attendre que l&apos;installation se termine.
                </li>
                <li>
                    Décocher les cases à cocher et cliquer sur le bouton <em>Finish</em> lorsque l&apos;installation est complétée.
                </li>
            </ol>
            <p>
                Si vous avez des questions sur certaines étapes de l&apos;installation, n&apos;hésitez pas à contacter votre professeur pour qu&apos;il 
                vous explique ce qui se passe.
            </p>
        </section>
    </>;
}
