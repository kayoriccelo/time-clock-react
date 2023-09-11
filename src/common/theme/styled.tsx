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

export const theme = {}

export const light = {
    background: {
        backgroundColor: 'rgb(241, 245, 249)'
    },
    slogan: {
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))', 
        color: 'white'
    },
    sideBar: {
        backgroundColor: 'white',
        color: 'rgb(28, 30, 39)',
        boxShadow: '0.438rem -0.538rem 0.400rem -0.625rem #797a7a'
    },
    menu: {
        fontFamily: fontFamily
    },
    submenu: {
        fontFamily: fontFamily
    },
    header: {
        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
        color: 'white',
        fontFamily: fontFamily,
    },
    title: {
        fontFamily: fontFamily,
    },
    breadcrumb: {
        color: 'rgb(28, 30, 39)',
        fontSize: '0.7rem',
        fontFamily: fontFamily,
    },
    footer: {
        background: 'linear-gradientk(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
        color: 'white',
        fontSize: '0.8rem',
        fontFamily: fontFamily
    },
    button: {
        primary: {
            backgroundColor: primaryLight,
            color: 'white',
            fontFamily: fontFamily
        },
        success: {
            backgroundColor: successLight,
            color: 'white',
            fontFamily: fontFamily
        },
        danger: {
            backgroundColor: dangerLight,
            color: 'white',
            fontFamily: fontFamily
        },
        hover: {
            background: '#71bc78a6'
        }
    },
    box:{

    },
    label: {
        title: {
            fontFamily: fontFamily
        },
        value: {
            fontFamily: fontFamily
        }
    },
    tab: {
        style: {

        },
        nav: {
            style: {
                fontFamily: fontFamily,
                borderBottom: '1px solid transparent',
                '&:hover': {
                    fontWeight: 600,
                    borderBottomWidth: '1px',
                    borderBottomStyle: 'solid',
                    borderBottomColor: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
                },
            },
            active: {
                fontWeight: 600,
                background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
                color: '#eeedede2'
            },
        },
        content: {
            backgroundColor: 'white'
        },
        group: {},
    },
    detail: {
        header: {},
        actions: {},
        content: {},
    },
    list: {
        backgroundColor: 'white',
        boxShadow: '0.338rem 0.338rem 0.275rem -0.5rem #202a39'
    }
}

// export const dark = {
//     background: `
//         background-color: rgb(21, 23, 30);
//     `,
//     sideBar: `
//         background-color: rgb(28, 30, 39);
//         color: #cdcccc;
//         font-family: ${fontFamily};
//         box-shadow: 0.438rem 0.438rem 0.375rem -0.5rem #202a39;
//         border-right: 0.063rem solid #202a39;
//     `,
//     header: `
//         background-color: rgb(28, 30, 39);
//         color: #cdcccc;
//         font-family: ${fontFamily};
//     `,
//     breadcrumb: `
//         background-color: rgb(28, 30, 39);
//         color: #cdcccc;
//         font-size: 0.9rem;
//         font-family: ${fontFamily};
//         box-shadow: 0.438rem 0.438rem 0.375rem -0.5rem #202a39;
//         border-bottom: 0.063rem solid #202a39;
//     `,
//     footer: `
//         background-color: rgb(28, 30, 39);
//         color: #cdcccc;
//         font-family: ${fontFamily};
//     `,
//     button: {
//         primary: `
//             background-color: ${primaryDark};
//             color: white;
//             font-family: ${fontFamily};
//         `,
//         success: `
//             background-color: ${successDark};
//             color: white;
//             font-family: ${fontFamily};
//         `,
//         hover: `
//         `
//     },
//     box: `
//         font-family: ${fontFamily};
//     `,
//     label: {
//         title: `
//             font-family: ${fontFamily};
//         `,
//         value: `
//             font-family: ${fontFamily};
//         `
//     },
//     tab: {
//         nav: ``,
//         content: ``,
//         group: ``,
//     },
//     list: {
//         style: ``,
//     }
// }
