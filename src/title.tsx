import { createElement, ForsteriComponent } from "forsteri"

export const props = ["title"],
    Title: ForsteriComponent<{}, typeof props> = (
        state,
        { title = "Forsteri" }
    ) => {
        return (
            <header>
                <link rel="stylesheet" href="/components/init.css" />
                <link rel="stylesheet" href="/components/title.css" />
                <h1 id="title">{title}</h1>
            </header>
        )
    }

export default Title
