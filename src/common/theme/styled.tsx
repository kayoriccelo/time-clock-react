const fontFamily = 'Roboto, sans-serif'
const fontFamilyMono = 'Roboto mono, sans-serif'
const boxShadow = '0.32rem 0.32rem 0.275rem -0.520rem green'

const backgroundLight = 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
const primaryLight = 'rgba(0, 110, 156, 0.69)'
const successLight = '#0abb87'
const warningLight = '#ffde26'
const infoLight = '#5d78ff'
const dangerLight = '#f95454'
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
        style: {
            backgroundColor: 'rgb(241, 245, 249)'
        }
    },
    components: {
        core: {
            slogan: {
                style: {
                    background: backgroundLight,
                    color: 'white'
                }
            },
            title: {
                style: {
                    fontFamily,
                    borderBottom: '1px solid #1e1e2d',
                }
            },
            breadcrumb: {
                style: {
                    color: 'rgb(28, 30, 39)',
                    fontSize: '0.7rem',
                    fontFamily,
                },
                label: {
                    hover: {
                        style: {
                            color: '#0000007d',
                        }
                    }

                }
            },
            drawer: {
                style: {
                    backgroundColor: 'white',
                    boxShadow
                },
                title: {
                    style: {
                        fontFamily,
                        background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
                        color: 'white'
                    }
                }
            },
            menu: {
                style: {
                    fontFamily
                },
                button: {
                    style: {
                        borderRight: '0.20rem solid #6e6e6e1f',
                        borderBottom: '0.20rem solid #6e6e6e1f',
                        color: 'rgba(103, 103, 103, 0.90)',
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: '#eeeded81',
                            boxShadow: '0.430rem 0.430rem 0.350rem -0.5rem #202a39',
                            color: '#1e1e2d'
                        }
                    }
                },
                link: {
                    style: {
                        borderRight: '0.20rem solid #6e6e6e1f',
                        borderBottom: '0.20rem solid #6e6e6e1f',
                        color: 'rgba(103, 103, 103, 0.90)',
                        '&:hover': {
                            backgroundColor: '#eeeded81',
                            boxShadow: '0.430rem 0.430rem 0.350rem -0.5rem #202a39',
                            color: '#1e1e2d'
                        }
                    }
                }
            },
            submenu: {
                style: {
                    fontFamily,
                    borderRight: '0.15rem solid #6e6e6e1f',
                    borderBottom: '0.15rem solid #6e6e6e1f',
                    color: 'rgba(103, 103, 103, 0.90)',
                    '&:hover': {
                        backgroundColor: '#eeeded81',
                        boxShadow: '0.430rem 0.430rem 0.350rem -0.5rem #202a39',
                        color: '#1e1e2d',
                    }
                }
            },
            button: {
                style: {
                    fontFamily: fontFamilyMono,
                    fontWeight: 600
                },
                primary: {
                    style: {
                        backgroundColor: primaryLight,
                        color: 'white'
                    },
                    outline: {
                        style: {
                            border: `0.05rem solid ${primaryLight}`,
                            color: primaryLight
                        }
                    }
                },
                secondary: {
                    style: {
                        color: 'white'
                    },
                    outline: {
                        style: {
                            border: `0.05rem solid ${secondaryLight}`,
                            color: secondaryLight
                        }
                    }
                },
                success: {
                    style: {
                        backgroundColor: successLight,
                        color: 'white'
                    },
                    outline: {
                        style: {
                            border: `0.05rem solid ${successLight}`,
                            color: successLight
                        }
                    }
                },
                warning: {
                    style: {
                        backgroundColor: warningLight,
                        color: '#886402'
                    },
                    outline: {
                        style: {
                            border: `0.05rem solid ${warningLight}`,
                            color: warningLight
                        }
                    }
                },
                danger: {
                    style: {
                        backgroundColor: dangerLight,
                        color: 'white'
                    },
                    outline: {
                        style: {
                            border: `0.05rem solid ${dangerLight}`,
                            color: dangerLight
                        }
                    }
                },
                hover: {
                    style: {
                        opacity: '0.7'
                    }
                }
            },
            input: {
                style: {
                    border: 'none',
                    borderBottom: '2px solid #c0c0c0',
                },
                '&:focus-visible': {
                    borderBottom: '2px solid #000000;',
                }
            },
            box: {
                style: {}
            },
            badge: {
                style: {
                    fontWeight: 600,
                    fontFamily: fontFamilyMono,
                },
                warning: {
                    style: {
                        backgroundColor: 'rgba(255,184,34,.1)',
                        color: '#ffb822'
                    }
                },
                success: {
                    style: {
                        backgroundColor: 'rgba(10,187,135,.1)',
                        color: '#0abb87'
                    }
                },
                danger: {
                    style: {
                        backgroundColor: 'rgb(253 57 57 / 10%)',
                        color: '#f95454'
                    }
                },
                info: {
                    style: {
                        backgroundColor: 'rgba(93,120,255,.1)',
                        color: '#5d78ff'
                    }
                }
            },
            label: {
                style: {},
                title: {
                    style: {
                        fontFamily
                    }
                },
                value: {
                    style: {
                        fontFamily
                    }
                }
            },
            tab: {
                nav: {
                    style: {
                        fontFamily: fontFamilyMono,
                        color: 'rgba(151, 150, 150, 0.9)',
                        borderBottom: '0.15rem solid transparent',
                        transition: '0.6s',
                        margin: '0 0.1rem',
                        '&:hover': {
                            backgroundColor: '#eeeded81',
                            borderBottom: '0.15rem solid rgba(151, 150, 150, 0.9)',
                            boxShadow: '0.430rem 0.430rem 0.350rem -0.5rem #202a39',
                        },
                        backgroundColor: 'white',
                        boxShadow
                    },
                    active: {
                        style: {
                            fontWeight: 'bold',
                            color: '#1b1b1cc5',
                            borderBottom: '0.15rem solid #1b1b1cc5'
                        }
                    },
                    group: {
                        style: {
                            backgroundColor: 'white',
                            boxShadow
                        }    
                    }
                },
                group: {
                    style: {}
                },
            },
            search: {
                style: {
                    borderBottom: '2px solid rgba(151, 150, 150, 0.9)',
                    '&:focus': {
                        border: 'none',
                        borderBottom: '2px solid black'
                    }
                }
            },
            table: {
                style: {
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: '4px',
                        background: backgroundLight
                    },
                },
                content: {
                    style: {
                        backgroundColor: 'white',
                        boxShadow
                    }
                },
                head: {
                    row: {
                        style: {
                            fontFamily,
                            color: 'white',
                            background: 'black',
                        }
                    },
                    column: {
                        style: {
                            fontFamily: fontFamilyMono,
                        }
                    }
                },
                body: {
                    style: {
                        backgroundColor: 'white'
                    },
                    row: {
                        style: {
                            fontFamily
                        },
                        nthChild: {
                            style: {
                                backgroundColor: '#f3fcf0'
                            }
                        }
                    },
                    column: {
                        style: {
                            fontFamily,
                        }
                    }
                }
            },
            pagination: {
                style: {
                    boxShadow: '-4rem 0.32rem 0.275rem -0.5rem #202a39',
                },
                group: {
                    style: {
                        backgroundColor: 'white',
                    }
                },
                button: {
                    style: {
                        backgroundColor: 'black',
                        color: '#ffffff',
                    },
                    disabled: {
                        style: {
                            backgroundColor: '#00000094',
                        }
                    }
                },
                input: {
                    style: {
                        backgroundCcolor: 'white',
                        color: 'black',
                        border: '1px solid gray',
                    }
                },
                select: {
                    style: {}
                },
                option: {
                    style: {}
                }
            },
            modal: {
                style: {
                    backgroundColor: '#0000008c',
                },
                container: {
                    style: {
                        backgroundColor: 'white',
	                    boxShadow: '0.150rem 0.150rem 0.300rem -0.120rem #5c9e5492',
                    },
                },
                header: {
                    style: {
                        background: backgroundLight,
                        color: 'white',
                        fontFamily
                    },
                    close: {
                        style: {
                            color: 'white',
                        }
                    }
                },
                body: {
                    style: {
                        borderBottomColor: '#00000030'
                    }
                }
            },
            sweetalert: {
                style: {
                    backgroundColor: '#0000008c',
                },
                container: {
                    style: {
                        backgroundColor: 'white',
                    },
                },
                title: {
                    style: {}
                },
                body: {
                    style: {}
                }
            }
        },
        layout: {
            container: {
                style: {
                    background: 'rgb(241, 245, 249)'
                }
            },
            main: {
                style: {}
            },
            header: {
                style: {
                    background: backgroundLight,
                    boxShadow: '0.438rem 0.438rem 0.375rem -0.5rem #202a39',
                    borderBottom: '0.063rem solid #202a39',
                    color: 'white',
                    fontFamily,
                }
            },
            sideBar: {
                style: {
                    backgroundColor: 'white',
                    color: 'rgb(28, 30, 39)',
                    boxShadow
                }
            },
            content: {
                style: {
                    '&::-webkit-scrollbar-thumb': {
                        borderRadius: '4px',
                        background: backgroundLight
                    }
                }
            },
            footer: {
                style: {
                    background: backgroundLight,
                    color: 'white',
                    fontSize: '0.8rem',
                    fontFamily
                }
            },
        },
        screen: {
            detail: {
                style: {},
                screen: {
                    style: {}
                },
                header: {
                    style: {
                        boxShadow,
                        backgroundColor: 'white',
                    }
                },
                actions: {
                    style: {
                        boxShadow
                    },
                    group: {
                        style: {
                            backgroundColor: 'white',
                        }
                    }
                },
                content: {
                    style: {}
                },
            },
            list: {
                style: {},
                header: {
                    style: {
                        backgroundColor: 'white',
                        boxShadow
                    }
                },
                search: {
                    style: {}
                },
                action: {
                    style: {}
                },
                content: {
                    style: {
                        boxShadow,
                        backgroundColor: 'white',
                    }
                },
                footer: {
                    style: {}
                }
            },
            form: {
                style: {},
                screen: {
                    style: {}
                },
                header: {
                    style: {
                        boxShadow,
                        backgroundColor: 'white',
                    }
                },
                actions: {
                    style: {
                        boxShadow
                    },
                    group: {
                        style: {
                            backgroundColor: 'white',
                        }
                    }
                },
                content: {
                    style: {
                        boxShadow,
                        backgroundColor: 'white',
                    }
                },
            }
        },
    },
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
