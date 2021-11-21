import MenuItemProps from "../objects/MenuItemProps";

export default function MenuItem(props: MenuItemProps) {
    let className: string = "menu-item " + (props.active ? "menu-item-highlighted" : "");
    return <a href={props.info.link}>
        <span className={className}>{props.info.name}</span>
    </a>
}