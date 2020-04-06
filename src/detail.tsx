import { createElement, ForsteriComponent } from "forsteri"

export const Detail: ForsteriComponent = () => (
    <section>
        <link rel="stylesheet" href="/components/init.css" />
        <link rel="stylesheet" href="/components/detail.css" />
        <p id="detail">
            Glad to see you~ To get started, edit{" "}
            <app-link title="src/index.tsx" link="/"></app-link>, save and reload.
        </p>
    </section>
)

export default Detail
