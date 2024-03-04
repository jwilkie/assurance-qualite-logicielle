/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Outils",
    description: "Outils d'intelligence artificielle pour la programmation.",
    keywords: ["ia", "ai", "copilot", "GPT", "outils"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>ChatGPT</h2>
            <p>
                Pour ce cours, nous utiliserons l&apos;outil ChatGPT. Cet outil est basé sur le modèle d&apos;intelligence artificielle GPT3.5. Cet
                outil est gratuit à condition de créer un compte sur la plateforme de OpenAI, le développeur de ce modèle. Vous pouvez le
                faire en vous rendant à la page suivante:
            </p>
            <p>
                <a href="https://chat.openai.com/auth/login" target="_blank">ChatGPT Sign up</a>
            </p>
            <p>
                Cet outil est intéressant pour générer du code ou déboguer du code. Il nous permet de poser des questions à l&apos;intelligence
                artificielle et celui-ci nous répondra par une génération de texte et/ou de code.
            </p>
        </section>

        <section>
            <h2>Autres outils</h2>
            <p>
                GitHub Copilot, un autre outil basé sur le même modèle, peut aussi être utilisé pour nous aider. Cet outil est spécialisé
                dans la génération de code et s&apos;intègre facilement dans plusieurs environnement de développement, tel que Visual Studio
                Code. Le seul problème: cet outil est payant. En tant qu&apos;étudiant, vous pouvez y avoir accès gratuitement, mais il vous
                n&apos;y aurez pas nécessairement accès sur le marché du travail.
            </p>
            <p>
                D&apos;autres intelligences artificielles comme Llama et Gemini peuvent être utilisé, mais sont un peu moins populaire en ce
                moment.
            </p>
        </section>

        <section>
            <h2>Inconvénients</h2>
            <p>
                L&apos;utilisation de ChatGPT ainsi que de nombreux autres LLM ont de nombreux inconvénients. Assurez-vous de bien les comprendre
                avant d&apos;utiliser ce genre d&apos;outil.
            </p>
            <ul>
                <li>
                    Les générations de ChatGPT ne sont pas nécessairement vrai. La génération est basé sur des statistiques et n&apos;est
                    aucunement validé ou testé. Le texte ou code généré peut être complètement faux. Assurez-vous de bien comprendre le
                    texte et code généré pour vous assurez qu&apos;il est bien vrai et valide.
                </li>
                <li>
                    Les connaissances de ChatGPT dépendent des données avec lesquels il a été entraîné. Au moment de l&apos;écriture de cette
                    page, la version 3.5 de ChatGPT a été entraîné jusqu&apos;en janvier 2022. Bref, toutes technologies, événements,
                    documentations ou autres données sortient après cette date ne font pas partie de sa banque de connaissance.
                </li>
                <li>
                    Quand vous utilisez ChatGPT, toutes les données, questions et code que vous envoyez à l&apos;outil peut être garder, analysé,
                    utilisé et vendu par le propriétaire de l&apos;intelligence artificielle. Assurez-vous de ne jamais envoyer de données
                    confidentielles ou de code privée. Ne pas respecter certaines de ces clauses pourrait vous causer des problèmes du côté
                    de la justice.
                </li>
                <li>
                    Exécuter un modèle d&apos;intelligence artificielle comme ChatGPT demande une quantité phénoménale de processeurs graphique
                    pour s&apos;exécuter dans un délais résonnable. Par le fait même, il demande beaucoup d&apos;énergie. Ces technologies ne sont
                    donc pas les plus écologique.
                </li>
                <li>
                    Il peut être facile de prendre le réflexe de simplement copier et coller la génération de ChatGPT sans comprendre ce que
                    cela fait. Ce genre de comportement rend notre cerveau plus paresseux et nous empêche d&apos;apprendre correctement.
                    Assurez-vous de bien comprendre les générations de cet outil et essayez de trouver une solution à vos problèmes par
                    vous-même avant d&apos;utiliser l&apos;intelligence artificielle.
                </li>
            </ul>
            <p>
                Le but n&apos;est pas de vous dissuader d&apos;utiliser ce genre d&apos;outil, mais plutôt de l&apos;utiliser lorsque nécessaire et d&apos;être critique 
                de leurs réponses.
            </p>
        </section>
    </>;
}
