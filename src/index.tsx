import { registerComponent } from "forsteri"

import { Title, props as TitleProps } from "./title"
import { Detail } from "./detail"
import { Link, props as LinkProps } from "./link"

registerComponent("app-title", Title, {}, TitleProps)
registerComponent("app-detail", Detail)
registerComponent("app-link", Link, {}, LinkProps)