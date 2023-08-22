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
            <h2>Discussion sur le bon code source</h2>
            <ol>
                <li>
                    Formez des équipes de 3 à 5 personnes.
                </li>
                <li>
                    Discutez avec vos coéquipiers de qu'est-ce qu'un bon code source selon vous.
                </li>
                <li>
                    Partagez vos réponses avec l'enseignant et le reste du groupe.
                </li>
            </ol>
        </section>
        
        <section>
            <h2>Discussion sur les bénéfices</h2>
            <ol>
                <li>
                    Mettez-vous dans les mêmes équipes qu'à la discussion précédante.
                </li>
                <li>
                    En fonction des réponses trouvées lors de la dernière discussion, discutez avec vos coéquipiers de ce que vous pensez
                    gagner comme bénéfice à écrire un bon code source.
                </li>
                <li>
                    Partagez vos réponses avec l'enseignant et le reste du groupe.
                </li>
            </ol>
        </section>
    </>;
}
