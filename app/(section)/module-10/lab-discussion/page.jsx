/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Laboratoire - Discussion",
    description: "Présentation du laboratoire de la discussion sur l'organisation et la bonne écriture de code source.",
    keywords: ["organisation", "code", "propre"],
    group: "labs"
}

export default function Page() {
    return <>
        <section>
            <h2>Discussion sur le versionnage</h2>
            <ol>
                <li>
                    Formez des équipes de 3 à 5 personnes.
                </li>
                <li>
                    Discuter avec vos coéquipiers de ce que vous considérez un avantage du versionnage.
                </li>
                <li>
                    Partagez vos réponses avec l&apos;enseignant et le reste du groupe.
                </li>
            </ol>
        </section>
        
        <section>
            <h2>Discussion sur le travail d&apos;équipe en programmation</h2>
            <ol>
                <li>
                    Mettez-vous dans les mêmes équipes qu&apos;à la discussion précédante.
                </li>
                <li>
                    Discuter avec vos coéquipiers des défis qui vous attendent lors du travail d&apos;équipe en programmation.
                </li>
                <li>
                    En fonction des réponses trouvées lors de la dernière discussion, discutez avec vos coéquipiers des bénéfices de 
                    l&apos;utilisation d&apos;un logiciel de versionnage pour le travail d&apos;équipe.
                </li>
                <li>
                    Partagez vos réponses avec l&apos;enseignant et le reste du groupe.
                </li>
            </ol>
        </section>
    </>;
}
