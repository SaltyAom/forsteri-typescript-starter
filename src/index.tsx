import { registerComponent } from "forsteri"

import { Title, props as TitleProps } from "./title"
import { Detail } from "./detail"
import { Link, props as LinkProps } from "./link"

registerComponent({
    component: "app-title", 
    view: Title, 
    props: TitleProps
})

registerComponent({
    component: "app-detail", 
    view: Detail
})

registerComponent({
    component: "app-link", 
    view: Link, 
    props: LinkProps
})