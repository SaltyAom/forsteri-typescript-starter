import { h, ForsteriComponent } from "forsteri"

export const props = ["href", "standalone"],
    Link: ForsteriComponent<{}, typeof props> = (
        _,
        { href = "/", standalone = false }
    ) => {
        if (standalone)
            return (
                <fragment>
                    <link rel="stylesheet" href="/init.css" />
                    <link rel="stylesheet" href="/components/link.css" />
                    <style>{`
                        :host {
                            margin: 60px auto 0 auto;
                        }

                        #link { 
                            font-size: 21px;
                        }
                    `}</style>
                    <a id="link" href={href}>
                        <children />
                    </a>
                </fragment>
            )

        return (
            <fragment>
                <link rel="stylesheet" href="/components/link.css" />
                <a id="link" href={href}>
                    <children />
                </a>
            </fragment>
        )
    }

export default Link
