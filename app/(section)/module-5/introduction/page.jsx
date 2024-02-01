import ColoredBox from '@/components/ColoredBox';

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction",
    description: "Introduction à la programmation éco-responsable et à son impact sur les boulversements climatiques.",
    keywords: ["écologie", "gaz à effet de serre", "co2", "green", "vert"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Statistiques</h2>
            <p>
                L'état de notre planète et la protection de son environnement est le travail de tous. Même en informatique, un domaine qui
                ne semble à première vu ne pas trop affecter l'environnement, nous avons un énorme rôle à jouer et vous serez des joueurs
                d'importance dans ce domaine.
            </p>
            <p>
                En 2016, les Nations Unis estimaient qu'environ 2% des émissions de gaz à effet de serre était causé par le domaine de
                l'information, des technologies et de la communications. Selon les estimés de 2016, à l'année 2030, environ 20% des gaz
                à effet de serre seront produit par ce domaine, notre domaine. Il y a toutefois un petit problème à propos de ces
                statistiques: elles ont été calculé avant la pandémie et avant la création ou la popularisation de technologies causant
                quelques problèmes, tel que l'intelligence artificielle avec large modèle de langage (LLM AI) et la chaîne de blocs
                (Blockchain). Bref, les estimés ne sont plus du tout les mêmes et bien qu'il manque d'étude récente sur le sujet, on estime
                maintenant que ce nombre sera beaucoup plus haut à moins de faire des changements dans notre façon de travailler.
            </p>
        </section>

        <section>
            <h2>Production de gaz à effet de serre</h2>
            <p>
                La production des gaz à effet de serre dans notre secteur vient majoritairement de 2 sources:
            </p>
            <ul>
                <li>La production de matériel informatique</li>
                <li>La consommation d'énergie</li>
            </ul>
            <p>
                La création de matériel informatique, tel que les puces, les processeurs et les batteries ont assurément un impact sur
                la production de gaz à effet de serre. Toutefois, en tant que développeur, il ne sera pas de notre tâche de régler ce
                problème. Nous pouvons toutefois travailler sur la consommation d'énergie. En effet, nous avons un contrôle direct sur
                la demande en électricité des ordinateurs de par notre façon d'écrire le code, de structurer nos applications et
                d'utiliser le matériel informatique.
            </p>
            <ColoredBox title="Énergie verte">
                <p>
                    Certains endroits dans le monde produise une énergie plus verte que d'autre. Par exemple, la province du Québec au
                    Canada produit une électricité presque 100% verte grace à son hydroélectricité. La majorité des États-Unis, quant à
                    eux produise encore beaucoup d'électricité en brûlant du pétrole, ce qui est une grande source de gaz à effet de
                    serre.
                </p>
                <p>
                    Dans ce module, nous ne tiendrons pas vraiment compte de cet aspect. Il est fréquent dans le domaine d'écrire
                    du code qui s'exécutera à un autre emplacement sur l'Internet. Il est donc possible que même si vous écriviez du
                    code ici, au Canada, que celui-ci soit exécuté sur un ordinateur à un autre endroit dans le monde où la production
                    d'électricité est bien différente que ce que l'on connait.
                </p>
            </ColoredBox>
        </section>

        <section>
            <h2>Approches à la programmation éco-responsable</h2>
            <p>
                La programmation éco-responsable, aussi appelé <em>Green Coding</em> en anglais, peut être approché de divers angles. 
                Il est de notre responsabilité en tant que programmeur et humain sur la planète terre d'investiguer ces différentes 
                approches pour essayer de diminuer notre émission de gaz à effet de serre.
            </p>
            <p>
                Nous verrons dans ce modules 3 différentes approches:
            </p>
            <ul>
                <li>
                    Approche fondamentale
                </li>
                <li>
                    Approche comportementale
                </li>
                <li>
                    Approche structurelle
                </li>
            </ul>
        </section>
    </>;
}
