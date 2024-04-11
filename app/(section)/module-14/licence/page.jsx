import IC from '@/components/InlineCode'

/**
 * @type {import("next").Metadata}
 */
export const metadata = {
    title: "Licences logicielles",
    description: "Présentation des différents types de licences de logiciel existant présentement tout en mettant l'accent sur l'utilisation de licence à code source ouvert.",
    keywords: ["licence", "license", "open source", "source ouvert", "gnu gpl", "apache", "mozilla", "mit", "bsl", "unlicense", "creative common", "isc"],
    group: "notes"
}

export default function Page() {
    return <>
        <section>
            <h2>Travail créatif</h2>
            <p>
                Légalement, l&apos;écriture de code est vu comme un travail créatif. Cela signifie que le code source est protégé par 
                les lois sur le droit d&apos;auteur par défaut. Cependant, il est possible d&apos;indiquer que l&apos;on veut partager
                son code source avec d&apos;autres personnes en utilisant une licence logicielle. Une licence logicielle est un contrat
                qui indique les conditions d&apos;utilisation du code source. Généralement, vous trouverez ces licences dans un fichier
                texte nommé <IC>LICENSE</IC> à la racine des projets. Ces licences indiquent comment vous pouvez utiliser le code source
                et quelles sont les conditions pour le réutiliser. Assurez-vous de bien lire et comprendre la licence avant 
                d&apos;utiliser le code source d&apos;un projet pour ne pas avoir de répercussions légales.
            </p>
            <p>
                En bref, si vous trouver du code qui ne possède pas de licence, vous ne pouvez pas l&apos;utiliser. Si vous trouvez
                du code avec une licence, vous devez respecter les conditions de sa licence pour l&apos;utiliser.

            </p>
        </section>

        <section>
            <h2>Les populaires</h2>
            <p>
                Il existe déjà de nombreuses licences logicielles bien connu pour le domaine du logiciel libre. Si vous créez un nouveau
                projet et que vous voulez partager votre code source, il est recommandé d&apos;utiliser une licence existante plutôt que
                de payer un avocat pour en créer une nouvelle. Voici quelques licences populaires:
            </p>

            <h3>GNU GPL v3.0</h3>
            <p>
                La licence publique générale GNU (GNU GPL) est une licence copyleft qui garantit que le code source reste libre et ouvert
                pour tous. Si vous utilisez un code source sous cette licence, vous devez aussi partager votre code source sous la même
                licence. C&apos;est une licence très restrictive, mais elle garantit que le code source reste libre et ouvert. Elle est 
                pratique pour les gros projets open source qui ne veulent pas être utilisé dans des projets commerciaux. 
            </p>
            <p>
                Les licences copyleft sont des licences qui garantissent que le code source reste libre et ouvert pour tous. Elles 
                obligent les utilisateurs à partager leur code source s&apos;ils utilisent du code source sous cette licence. Le GNU GPL
                est une licence copyleft très restrictive. Il existe toutefois des licences similaires moins restrictives comme la
                licence Mozilla Public License 2.0 ou la GNU LGPL v3.0.
            </p>
            <p>
                Le code source de ce site web utilise la licence GNU GPL v3.0.
            </p>

            <h3>MIT License</h3>
            <p>
                La licence MIT est une licence permissive qui permet de faire à peu près tout ce que vous voulez avec le code source
                tant que vous mentionnez l&apos;auteur original. Cette licence est simple et permissive, ce qui lui a value sa 
                popularité. Elle est pratique pour les petits projets open source qui autorise les projets commerciaux à l&apos;utiliser.
            </p>
            <p>
                D&apos;autres licences permissives populaires existent. La licence ISC est une licence très similaire au MIT et est 
                utilisé dans de nombreux projets avec Node.js. Nous avons aussi la licence Apache 2.0 qui est similaire, mais qui en
                étant plus détaillé et adapté pour les projets de plus grande envergure. La licence BSL 1.0 est aussi une licence 
                permissive qui est très similaire à la licence Apache 2.0.
            </p>

            <h3>The Unlicense</h3>
            <p>
                The Unlicense est une licence qui permet de libérer le code source dans le domaine public. Cela signifie que vous pouvez
                faire ce que vous voulez avec le code source sans aucune restriction. C&apos;est une licence très permissive qui est
                souvent utilisé par les programmeurs qui veulent libérer leur code source dans le domaine public sans y être attaché.
            </p>

            <h3>Creative Commons</h3>
            <p>
                Les licences Creative Commons sont des licences qui permettent de partager des oeuvres créatives comme des images, des
                vidéos, de la musique, du texte, etc. Il existe plusieurs types de licences Creative Commons qui permettent de définir 
                les conditions d&apos;utilisation de l&apos;oeuvre. Nous avons par exemple la licence CC-BY-SA-4.0 est plus restrictive,
                similaire à la licence GNU GPL, la licence CC-BY-4.0 qui est plus permissive, similaire à la licence MIT, et la licence
                CC0 qui permet de libérer l&apos;oeuvre dans le domaine public, comme The Unlicense.
            </p>
            <p>
                Les licences Creative Commons ne sont pas recommandé pour le code. Elles sont toutefois très utile pour la majorité des
                médias numériques. Vous risquez donc de les voir souvent dans les projets open source qui contiennent des images, des 
                vidéos ou de la musique.
            </p>
        </section>

        <section>
            <h2>Ajouter une licence à votre projet</h2>
            <p>
                Ajouter une licence à votre projet est très simple. Il suffit de créer un fichier texte nommé <IC>LICENSE</IC> à la racine
                de votre projet et d&apos;y copier le contenu de la licence que vous voulez utiliser. Assurez-vous de bien lire et 
                comprendre la licence que vous voulez utiliser avant de l&apos;ajouter à votre projet.
            </p>
            <p>
                Vous pouvez trouver le contenu des licences populaires sur des sites web comme celui-ci:
            </p>
            <p>
                <a target="_blank" href="https://choosealicense.com/">Choose a License</a>
            </p>
        </section>

        <section>
            <h2>Code source privée</h2>
            <p>
                Si vous ne voulez pas partager votre code source, vous n&apos;avez pas besoin d&apos;ajouter une licence à votre projet.
                Cependant, il est recommandé d&apos;ajouter un fichier texte nommé <IC>NOTICE</IC> à la racine de votre projet pour 
                indiquer que le code source est privé et qu&apos;il ne peut pas être réutilisé sans votre permission. 
            </p>
            <p>
                Pour les projets commerciaux de plus grande envergure, il est recommandé de consulter un avocat pour rédiger un contrat
                de licence sur mesure pour votre projet.
            </p>
        </section>
    </>;
}
