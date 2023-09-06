const fontFamily = 'Roboto, sans-serif'

const primaryLight = ''
const successLight = ''
const warningLight = ''
const infoLight = ''
const dangerLight = ''
const secondaryLight = ''
const neutralLight = ''

const primaryDark = ''
const successDark = ''
const warningDark = ''
const infoDark = ''
const dangerDark = ''
const secondaryDark = ''
const neutralDark = ''


export const theme = {
    light: {
        background: `
            background-color: rgb(241, 245, 249);
        `,
        sideBar: `
            background-color: white;
            color: rgb(28, 30, 39);
            box-shadow: 0.438rem 0.438rem 0.375rem -0.625rem #797a7a;
        `,
        menu: `
            font-family: ${fontFamily};
        `,
        submenu: `
            font-family: ${fontFamily};
        `,
        header: `
            background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
            color: white;
            font-family: ${fontFamily};
        `,
        title: `
            font-family: ${fontFamily};
        `,
        breadcrumb: `
            color: rgb(28, 30, 39);
            font-size: 0.7rem;
            font-family: ${fontFamily};
        `,
        footer: `
            background: linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25));
            color: white;
            font-size: 0.8rem;
            font-family: ${fontFamily};  
        `,
        button: {
            primary: `
                background-color: ${primaryLight};
                color: white;
                font-family: ${fontFamily};
            `,
            success: `
                background-color: ${successLight};
                color: white;
                font-family: ${fontFamily};
            `,
            danger: `
                background-color: ${dangerLight};
                color: white;
                font-family: ${fontFamily};
            `,
            hover: `
                background: rgba(3, 250, 176, 0.253);
            `
        }
    },
    dark: {
        background: `
            background-color: rgb(21, 23, 30);
        `,
        sideBar: `
            background-color: rgb(28, 30, 39);
            color: #cdcccc;
            font-family: ${fontFamily};
            box-shadow: 0.438rem 0.438rem 0.375rem -0.5rem #202a39;
            border-right: 0.063rem solid #202a39;
        `,
        header: `
            background-color: rgb(28, 30, 39);
            color: #cdcccc;
            font-family: ${fontFamily};
        `,
        breadcrumb: `
            background-color: rgb(28, 30, 39);
            color: #cdcccc;
            font-size: 0.9rem;
            font-family: ${fontFamily};
            box-shadow: 0.438rem 0.438rem 0.375rem -0.5rem #202a39;
            border-bottom: 0.063rem solid #202a39;
        `,
        footer: `
            background-color: rgb(28, 30, 39);
            color: #cdcccc;
            font-family: ${fontFamily};
        `,
        button: {
            primary: `
                background-color: ${primaryDark};
                color: white;
                font-family: ${fontFamily};
            `,
            success: `
                background-color: ${successDark};
                color: white;
                font-family: ${fontFamily};
            `,
            hover: `
            `
        },
        box: `
            font-family: ${fontFamily};
        `
    }
}
