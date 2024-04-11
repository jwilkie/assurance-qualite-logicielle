/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Hébergement web",
    description: "Présentation des options de GitHub pour héberger un site web.",
    keywords: ["git", "serveur", "github", "hébergement", "statique", "web"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Site web sur GitHub</h2>
            <p>
                Vous avez toujours rêvé d&apos;avoir votre propre site web? GitHub vous offre la possibilité d&apos;héberger un site web
                gratuitement en utilisant GitHub Pages. GitHub Pages est un service qui permet d&apos;héberger un site web statique en
                utilisant le dépôt GitHub de votre projet. Cela signifie que vous pouvez créer un site web en utilisant du HTML, CSS et
                JavaScript et le publier sur GitHub pour que tout le monde puisse le voir. C&apos;est une excellente option pour les
                projets open source qui veulent avoir une vitrine en ligne.
            </p>
            <p>
                Pour utiliser l&apos;hébergement sur GitHub, vous devez toutefois respecter certaine conditions:
            </p>
            <ul>
                <li>
                    Votre site web doit être statique. Cela signifie que vous ne pouvez pas utiliser de base de données ou de serveur
                    pour générer les pages de votre site web. Vous devez donc utiliser du HTML, CSS et JavaScript pour créer votre site
                    web.
                </li>
                <li>
                    Votre site web doit être public. Cela signifie que tout le monde peut voir votre site web et son code. Si vous avez
                    des informations sensibles, il est recommandé de ne pas utiliser GitHub Pages.
                </li>
            </ul>
            <p>
                Pour héberger votre site web sur GitHub Pages, vous pouvez suivre les étapes au lien suivant:
            </p>
            <p>
                <a target="_blank" href="https://pages.github.com/">GitHub Pages</a>
            </p>
        </section>

        <section>
            <h2>Autres hébergements</h2>
            <p>
                Plusieurs autres services d&apos;hébergement existent pour héberger un site web. La plupart vont utiliser vos 
                répertoires Git pour déployer votre site web automatiquement à chaque fois que vous poussez du code sur votre dépôt.
                Voici une liste de quelques services d&apos;hébergement populaires qui sont gratuit:
            </p>
            <ul>
                <li>
                    <a target="_blank" href="https://www.netlify.com/">Netlify</a>
                </li>
                <li>
                    <a target="_blank" href="https://render.com/">Render</a>
                </li>
                <li>
                    <a target="_blank" href="https://vercel.com/">Vercel</a>
                </li>
            </ul>
            <p>
                Vous pouvez voir comment faire de l&apos;hébergement sur ces services en consultant leur documentation respective.
            </p>
        </section>
    </>;
}
