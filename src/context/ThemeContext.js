import React, { createContext, useState } from 'react';

const colorPalettes = {
    neon: {
        background: '#0D0D0D',
        primary: '#00FFFF',
        secondary: '#FF00FF',
        text: '#FFFFFF',
    },
    space: {
        background: '#1A1A2E',
        primary: '#E94560',
        secondary: '#0F3460',
        text: '#FFFFFF',
    },
    techGreen: {
        background: '#091E42',
        primary: '#00FF85',
        secondary: '#008F5E',
        text: '#FFFFFF',
    },
    purpleMystic: {
        background: '#2A1A5E',
        primary: '#DA22FF',
        secondary: '#4B0082',
        text: '#FFFFFF',
    },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [palette, setPalette] = useState('neon');

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
