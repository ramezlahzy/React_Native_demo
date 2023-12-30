import { extendTheme } from "native-base";
const newColorTheme = {
    brand: {
        main: "#4154F1",
        heading: "#012970",
        normal: "#212529",
        highlight: "#717ff5",
        muted: "#6c757d",
        primary: "#0d6efd",
        white: "#ffffff",
        grey: "#a8aaaa",
        light_grey: "#f5f5f5",
        black: "#464343",
        danger: 'rgb(220, 38, 38)'
    },
};

const newFontTheme = {
    Karla: {
        100: {
            normal: "Karla-Light",
            italic: "Karla-LightItalic",
        },
        200: {
            normal: "Karla-Light",
            italic: "Karla-LightItalic",
        },
        300: {
            normal: "Karla-Light",
            italic: "Karla-LightItalic",
        },
        400: {
            normal: "Karla-Regular",
            italic: "Karla-Italic",
        },
        500: {
            normal: "Karla-Medium",
        },
        600: {
            normal: "Karla-Medium",
            italic: "Karla-MediumItalic",
        },
        // Add more variants
        700: {
            normal: 'Karla-Bold',
        },
        800: {
            normal: 'Karla-Bold',
            italic: 'Karla-BoldItalic',
        },
        900: {
            normal: 'Karla-Bold',
            italic: 'Karla-BoldItalic',
        },
    }
}

const theme = extendTheme({
    colors: newColorTheme,
    fontConfig: newFontTheme,
    fonts: {
        regular: "Karla-Regular",
        medium: "Karla-Medium",
        bold: "Karla-Bold",
    },
});
export default theme;