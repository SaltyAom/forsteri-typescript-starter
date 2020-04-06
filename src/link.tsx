import { createElement, ForsteriComponent } from "forsteri"

export const props = ["title", "href", "standalone"],
    Link: ForsteriComponent<{}, typeof props> = (
        _,
        { title = "", href = "/", standalone = false }
    ) => {
        if(standalone)
            return (
                <section>
                    <link rel="stylesheet" href="/components/link.css" />
                    <style>{`
                        #link { 
                            font-size: 21px;
                            margin: 60px 0 0 0;
                        }
                    `}</style>
                    <a id="link" href={href}>
                        {title}
                    </a>
                </section>
            )

        return (
            <section>
                <link rel="stylesheet" href="/components/link.css" />
                <a id="link" href={href}>
                    {title}
                </a>
            </section>
        )
    }

export default Link
