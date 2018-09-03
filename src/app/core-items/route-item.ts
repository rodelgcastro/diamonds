export interface RouteItem {
    title: string;
    icon: string;
    class?: string;
    path?: string;
    children?: RouteItem[];
    disabled?: boolean;
    opened?: boolean;
}