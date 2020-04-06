import { h, ForsteriComponent } from "forsteri"

export const Detail: ForsteriComponent = () => (
    <fragment>
        <link rel="stylesheet" href="/init.css" />
        <link rel="stylesheet" href="/components/detail.css" />
        <p id="detail">
            Glad to see you~ To get started, edit{" "}
            <app-link href="/">src/index.tsx</app-link>, save and reload.
        </p>
    </fragment>
)

export default Detail
