/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Ressources",
    description: "Présentation des sources et ressources intéressante sur le sujet de la programmation éco-responsable.",
    keywords: ["écologie", "gaz à effet de serre", "co2", "green", "vert", "source", "ressources", "outils"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Sources</h2>
            <p>
                Ce module à nécessité de nombreuses recherches et lectures. Si vous voulez avoir un peu plus d&apos;information, veuillez
                consulter les publications et les sites web suivants:
            </p>
            <ul>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://curiosum.com/blog/green-coding-software-development-energy-efficient-programming-languages">
                        Green Software Development
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://unfccc.int/fr/node/13249">
                        ICT Sector Helping to Tackle Climate Change
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer" href="https://greensoftware.foundation/">
                        Green Software Foundation
                    </a>
                </li>
            </ul>
        </section>

        <section>
            <h2>Autres ressources</h2>
            <p>
                Voici quelques autres ressources et outils qui peuvent être utile si la programmation éco-responsable vous intéresse:
            </p>
            <ul>
                <li>
                    <a target="_blank" rel="noopener noreferrer"  href="https://greenframe.io/">
                        GreenFrame
                    </a> - Une application pour aider à diminuer l&apos;emprunte écologique d&apos;un site web.
                </li>
                <li>
                    <a target="_blank" rel="noopener noreferrer"  href="https://survey.stackoverflow.co/2023/">
                        2023 Developer Survey
                    </a> - Compilation des statistiques du site web Stack Overflow dans le but d&apos;évaluer les tendances du marché.
                </li>
            </ul>
        </section>
    </>;
}
