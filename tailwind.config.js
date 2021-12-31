module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Barlow: ["Barlow", "sans-serif"],
                "Barlow-Condensed": ["Barlow Condensed", "sans-serif"],
            },
            colors: {
                "grayish-blue": {
                    100: "hsl(207, 33%, 95%)",
                    200: "hsl(231, 7%, 65%)",
                    800: "hsl(230, 11%, 40%)",
                    900: "hsl(230, 29%, 20%)",
                },
                buttonred: "hsl(0, 100%, 68%)",
            },
        },
    },
    plugins: [],
};
