
export type NavItem = {
    label: string;
    routing?: string;
}

export const NAV_ITEMS: NavItem[] = [
    {
        label: "Home",
        routing: "/",
    },
    {
        label: "O nas",
        routing: "/",
    },
    {
        label: "Cennik",
        routing: "#pricing",
    },
    {
        label: "Zapisy",
        routing: "/",
    },
    {
        label: "Kontakt",
        routing: "/",
    },
]