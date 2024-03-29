import ColoredBox from '@/components/ColoredBox'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Introduction",
    description: "Introduction à l'intelligence artificielle pour la programmation.",
    keywords: ["ia", "ai", "copilot", "GPT", "outils"],
    group: "notes"
}

export default function Page() {
    return <>
        <p>
            Qu&apos;on le veuille ou non, l&apos;intelligence artificielle fait aujourd&apos;hui partie de nos vies. De nombreux champs d&apos;expertise ont
            vu leur milieu changer très rapidement avec l&apos;arrivée de nouvelles technologies. Le développement informatique fait aussi
            partie de ces milieux de travail qui ont vécu et verront plusieurs changement dans les prochaines années.
        </p>
        <p>
            Il est difficile de savoir exactement l&apos;impact de l&apos;intelligence artificielle sur notre profession, mais une chose est certaine,
            celle-ci pourra définitivement être utilisé comme outil de développement.
        </p>

        <section>
            <h2>Historique</h2>
            <p>
                Le gros développement de l&apos;intelligence artificielle qui nous touche ont fait surface avec une technologie appelé
                les <em>Large Language Models</em> ou LLM. Ce genre de moteur d&apos;intelligence artificiel a été popularisé par le fameux
                ChatGPT (OpenAI), mais on a vu rapidement plusieurs autres alternatives, tel que Llama (Meta) et Gemini (Google). À la base,
                ce type d&apos;intelligence artificielle sert principalement à générer du texte dans différents langages.
            </p>
            <p>
                Ces intelligence artificielle fonctionnent de façon très intéressante. Elles essaient de prédire les mots d&apos;une réponse à
                à une question que l&apos;utilisateur demande. Elles sont entraîné sur des quantités phénoménales de données sur le web pour
                être capable d&apos;en faire ainsi.
            </p>
            <p>
                À première vue, ce genre d&apos;intelligence artificielle ne semble pas toucher notre milieu de travail... jusqu&apos;à ce qu&apos;on se
                rappelle que nos langages de programmation sont aussi une forme de texte avec laquelle les LLM peuvent s&apos;entraîner. Puisque
                certaines de ces intelligences artificielles ont été entraîné sur du code en ligne, elles peuvent être utilisé pour
                générer du code source dans différents langages de programmation. On pourra donc les utiliser pour générer une partie de
                notre code ou encore pour essayer d&apos;identifier certains des problèmes dans notre programmation.
            </p>
        </section>

        <section>
            <h2>Utilisation en programmation</h2>
            <p>
                Les LLM pourront être utilisé pour générer du code ou pour identifier des problèmes dans le code efficacement. Elles auront
                donc assurément leur place dans le milieu. Ceci étant dit, ces technologies ont leurs lots de problèmes et d&apos;inconvénients.
                Assurez-vous de bien comprendre ces points négatifs pour être en mesure de bien utiliser ces outils.
            </p>
            <ColoredBox title="Attention">
                <p>
                    L&apos;utilisation de l&apos;intelligence artificielle générative, comme les LLM, est très controversée dans le milieu scolaire et
                    académique. En effet, de nombreux étudiants l&apos;utilise pour générer leur travaux sans avoir à faire beaucoup de travail ce
                    qui déplait énormément aux professeurs et aux employeurs.
                </p>
                <p>
                    Le but de l&apos;école est d&apos;apprendre et de comprendre le matériel. Si les étudiants utilisent l&apos;intelligence artificielle 
                    pour générer leurs travaux, ils n&apos;apprennent pas, ne prennent pas d&apos;expérience et risque fortement de ne pas comprendre 
                    le matériel. De ce fait, les employeurs ne sont pas satisfait de nombreux gradués puisqu&apos;ils n&apos;ont pas les compétences 
                    nécessaires.
                </p>
                <p>
                    Soyez des étudiants et futurs employés modèles:
                </p>
                <ul>
                    <li>
                        Demander à votre enseignant ou superviseur si vous pouvez utiliser l&apos;intelligence artificielle. Utiliser 
                        l&apos;intelligence artificielle uniquement si vous y êtes autorisé.
                    </li>
                    <li>
                        Ne pas copier la génération d&apos;une intelligence artificielle. Approprier et modifier la génération à vos besoins.
                    </li>
                    <li>
                        Bien comprendre la génération de l&apos;intelligence artificielle. Ne jamais utiliser une génération que vous ne 
                        comprenez pas ou partiellement pas.
                    </li>
                </ul>
            </ColoredBox>
        </section>
    </>;
}
