import { h, ForsteriComponent } from "forsteri"

export const props = ["href", "standalone"],
    Link: ForsteriComponent<{}, typeof props> = (
        _,
        { href = "/", standalone = false }
    ) => {
        return (
            <fragment>
                <link rel="stylesheet" href="/components/link.css" />
                {standalone ? (
                    <fragment>
                        <link rel="stylesheet" href="/components/link.css" />
                        <style>{`
                        :host {
                            margin: 60px auto 0 auto;
                        }

                        #link { 
                            font-size: 21px;
                        }
                    `}</style>
                    </fragment>
                ) : (
                    <fragment />
                )}
                <a id="link" href={href}>
                    <children />
                </a>
            </fragment>
        )
    }

export default Link
