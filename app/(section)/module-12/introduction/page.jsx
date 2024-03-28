import Image from 'next/image'

import gitServer from '@/public/img/git-server.svg'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction aux serveurs Git",
    description: "Présentation de l'utilisation d'un serveur Git et ses bonnes pratiques.",
    keywords: ["git", "repository", "push", "pull", "clone", "remote"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Code source dans le cloud</h2>
            <p>
                Un serveur d&apos;hébergement Git est un service en ligne qui nous permet de stocker notre code source dans le cloud. 
                Celà nous permet, entres autres, de partager notre code avec d&apos;autres développeurs, de contrôller ceux qui ont accès 
                au code, de suivre les modifications apportées au code, et de synchroniser notre code entre plusieurs ordinateurs.
            </p>
            <p>
                Le serveur Git gardera une copie stable et fonctionnelle de notre code source. Essentiellement, il fonctionne de la même 
                façon que notre répertoire Git local, mais il est accessible en ligne. Nous aurons donc des versions du code source en 
                développement sur nos ordinateurs locaux et une version stable du code source sur le serveur Git. Il est aussi possible de 
                stocker des versions expérimentales ou instables du code source sur le serveur Git, mais nous verrons comment le faire dans 
                un module subséquent.
            </p>
        </section>

        <section>
            <h2>Fonctionnement de base</h2>
            <p>
                À la base, un serveur d&apos;hébergement Git nous permettra de faire les opérations suivantes:
            </p>
            <ul>
                <li>
                    <strong>Connecter</strong> un répertoire Git local à un serveur Git en ligne. On appelle cette connexion 
                    un <strong>remote</strong>.
                </li>
                <li>
                    <strong>Cloner</strong> un répertoire Git sur notre ordinateur local. Ça nous permet de prendre un projet qui se trouve 
                    déjà sur un serveur Git et de copier son code sur notre ordinateur. Lorsqu&apos;on fait un clone, Git connecte 
                    automatiquement le répertoire local au serveur Git en ligne avec un remote.
                </li>
                <li>
                    <strong>Pousser</strong> notre code source sur le serveur Git en ligne. Ça nous permet de mettre à jour le code 
                    source sur le serveur Git avec les modifications que nous avons faites sur notre ordinateur. Essentiellement, tous les 
                    commits que nous avons fait sur notre répertoire local seront envoyés sur le serveur Git. Le répertoire local doit 
                    absolument être connecté au serveur Git en ligne avec un remote pour pouvoir effectuer cette opération.
                </li>
                <li>
                    <strong>Tirer</strong> le code source du serveur Git en ligne sur notre ordinateur. Ça nous permet de mettre à jour le 
                    code source sur notre ordinateur avec les modifications que d&apos;autres développeurs ont faites sur le serveur Git. 
                    Essentiellement, tous les commits que d&apos;autres développeurs ont fait sur le serveur Git seront téléchargés sur notre 
                    répertoire local. Le répertoire local doit absolument être connecté au serveur Git en ligne avec un remote pour pouvoir
                    effectuer cette opération.
                </li>
            </ul>
            <Image src={gitServer} alt="Schémas des actions de base avec un serveur Git" />
            <p>
                En général, au début d&apos;un projet, nous créerons le répertoire sur le serveur Git et nous connecterons notre répertoire 
                local au serveur à l&apos;aide d&apos;un remote. Par la suite, nous pousserons et tirerons notre code source du serveur Git 
                pour mettre à jour la version stable du code source en ligne et pour synchroniser notre code source avec les autres 
                développeurs.
            </p>
            <p>
                Si le projet existe déjà sur le serveur Git, nous clonerons le répertoire sur notre ordinateur au lieu de le créer et le 
                connecter.
            </p>
        </section>
    </>;
}
