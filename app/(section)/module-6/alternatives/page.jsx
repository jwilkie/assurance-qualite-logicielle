/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Techniques alternatives",
    description: "Présentation de techniques de débogage alternative.",
    keywords: ["rubber duck", "carnard en platisque", "review", "revue", "testing", "test unitaire"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Introduction</h2>
            <p>
                On passe parfois de nombreuses heures à déboguer du code sans succès. C&apos;est ici que certaines techniques alternatives peuvent 
                être utile. Ces techniques sortent de l&apos;ordinaire et nous oblige à réfléchir de façon un peu différente, ce qui est souvent 
                une bonne façon de trouver une solution à un problème. Cette page en décrit quelques.
            </p>
        </section>

        <section>
            <h2>Revue de code</h2>
            <p>
                Si vous travaillez avec un collègue, il peut être intéressant de lui faire réviser votre code. Le but n&apos;est pas nécessairement 
                que votre collègue trouve le bogue, mais qu&apos;il vous donne ses commentaires sur la qualité du code en général. Souvent, lorsque 
                quelqu&apos;un investigue notre code, il fournira des commentaires remettant en question certaines parties de code et ce remue-méninges 
                peut parfois nous mettre sur la bonne piste pour régler nos problèmes.
            </p>
        </section>

        <section>
            <h2>Canard en plastique</h2>
            <p>
                Cette technique, aussi appelé le <em>Rubber ducky</em>, est un peu bizarre. Une bonne façon de trouver une solution à un problème 
                est simplement d&apos;expliquer le problème et ce que vous faites présentement pour essayer de le régler à quelqu&apos;un. Très souvent, le
                simple fait de décrire le problème à une autre personne nous permet de le décortiquer et de trouver nous-même une solution.
            </p>
            <p>
                En fait, la présence d&apos;une autre personne pour nous écouter est totalement inutile pour cette technique. En effet, c&apos;est le 
                principe d&apos;expliquer et de décortiquer qui nous permet de trouver notre solution. On appelle donc cette technique 
                le <em>Carnard en plastique</em> puisque plusieurs programmeurs expliquait leur problème à un objet non animé, soit leur petit 
                canard jaune de bain.
            </p>
            <p>
                Si vous doutez de l&apos;existance de cette technique, allez voir sa page Wikipédia. Ça existe pour vrai!
            </p>
            <p>
                <a target="_blank" rel="noopener noreferrer" href="https://fr.wikipedia.org/wiki/M%C3%A9thode_du_canard_en_plastique">
                    Méthode du canard en plastique
                </a>
            </p>
        </section>

        <section>
            <h2>Testing</h2>
            <p>
                Cette méthode très différente fait l&apos;objet d&apos;un cours complet. Il n&apos;y a donc définitivement pas assez de place sur cette page 
                pour vous l&apos;expliquer en détail. En résumé, cette méthode vise généralement à créer ce qu&apos;on appelle des tests unitaires, des 
                tests d&apos;intégration et des tests de système. Ces tests sont des blocs de codes qui sera exécuté pour automatiquement tester 
                votre programme. Souvent, les tests sont fait avant même que le code du programme ne soit écrit, ce qui nous permet de facilement
                identifier les problèmes lorsqu&apos;on développe.
            </p>
            <p>
                Cette méthode change considérablement notre façon de programmer. Elle oblige le programmeur à se poser des questions d&apos;avance sur 
                ce qu&apos;il s&apos;attends de son code. Bien que cette méthode rajoute un peu de temps au développement initial d&apos;un programme, il en 
                facile énormément la maintenance et permet facilement de trouver de nombreux bogues avant même d&apos;exécuter votre programme.
            </p>
        </section>
    </>;
}
