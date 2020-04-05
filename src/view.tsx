import { createElement, ForsteriComponent } from "forsteri"

export const state = {
        message: "Forsteri Element!"
    },
    view: ForsteriComponent<typeof state> = ({ state: { message }, set }) => (
        <section>
            <style>
                {`
                * {
                    font-family: "Helvetica"
                }
            `}
            </style>
            <h1 style={{ color: "blue" }}>{message}</h1>
            <p>Hello World</p>
            <input
                type="text"
                onInput={(event) => {
                    set("message", event.target.value)
                }}
            />
        </section>
    )

export default view
