import { h, ForsteriComponent } from "forsteri"

export const props = ["title"],
    Title: ForsteriComponent<{}, typeof props> = (
        { set },
        { title = "Forsteri" }
    ) => {
        return (
            <fragment>
                <link rel="stylesheet" href="/init.css" />
                <link rel="stylesheet" href="/components/title.css" />
                <h1 id="title">{title}</h1>
            </fragment>
        )
    }

export default Title
