const fontFamily = ''
const fontSize = ''

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
            font-size: ${fontSize};
            font-family: ${fontFamily};
            box-shadow: 0.438rem 0.438rem 0.375rem -0.625rem #797a7a;
        `,
        header: `
            background-color: #1e1e2d;
            color: white;
            font-size: ${fontSize};
            font-family: ${fontFamily};
        `,
        breadcrumb: `
            background-color: white;
            color: rgb(28, 30, 39);
            font-size: 0.9rem;
            font-family: ${fontFamily};
            box-shadow: 0.438rem 0.438rem 0.375rem -0.625rem #797a7a;
        `,
        footer: `
            background-color: #1e1e2d;
            color: white;
            font-size: 0.8rem;
            font-family: ${fontFamily};  
        `,
        button: {
            primary: `
                background-color: ${primaryLight};
                color: white;
                font-size: ${fontSize};
                font-family: ${fontFamily};
            `,
            success: `
                background-color: ${successLight};
                color: white;
                font-size: ${fontSize};
                font-family: ${fontFamily};
            `,
            danger: `
                background-color: ${dangerLight};
                color: white;
                font-size: ${fontSize};
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
            font-size: ${fontSize};
            font-family: ${fontFamily};
            box-shadow: 0.438rem 0.438rem 0.375rem -0.5rem #202a39;
            border-right: 0.063rem solid #202a39;
        `,
        header: `
            background-color: rgb(28, 30, 39);
            color: #cdcccc;
            font-size: ${fontSize};
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
            font-size: ${fontSize};
            font-family: ${fontFamily};
        `,
        button: {
            primary: `
                background-color: ${primaryDark};
                color: white;
                font-size: ${fontSize};
                font-family: ${fontFamily};
            `,
            success: `
                background-color: ${successDark};
                color: white;
                font-size: ${fontSize};
                font-family: ${fontFamily};
            `,
            hover: `
            `
        }
    }
}


export const rows = {

}


export const cols = {

}