interface NavLinkProps {
    href: string;
    title: string;
    isOrange: boolean;
}

export const NavLink = (props: NavLinkProps) => {
    let { href, title, isOrange } = props;
    return(
        <a href={ href } className={isOrange ? "nav-link active": "nav-link"}>{title}</a>
    );
};