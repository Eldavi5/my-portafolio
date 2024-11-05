import React, { createContext, useState } from 'react';

export const colorPalettes = {
    professional: {
        background: '#F5F5F5',
        primary: '#0D47A1',
        secondary: '#1976D2',
        text: '#212121',
    },
    dark: {
        background: '#212121',
        primary: '#BB86FC',
        secondary: '#03DAC6',
        text: '#FFFFFF',
    },
    light: {
        background: '#FFFFFF',
        primary: '#6200EE',
        secondary: '#03DAC6',
        text: '#000000',
    },
    neutral: {
        background: '#FAFAFA',
        primary: '#607D8B',
        secondary: '#CFD8DC',
        text: '#37474F',
    },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [palette, setPalette] = useState('professional');

    const handlePaletteChange = (paletteName) => {
        setPalette(paletteName);
    };

    const colors = colorPalettes[palette];

    return (
        <ThemeContext.Provider value={{ colors, handlePaletteChange }}>
            {children}
        </ThemeContext.Provider>
    );
};
