
export interface IDrawer {
    submenus?: any,
    titleMenu?: string,
    open: boolean,
    handleOpen: (open: boolean) => void,
}
