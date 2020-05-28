import React from 'react';
import { createIconSetFromFontello } from '@expo/vector-icons';
import fontelloConfig from '../../assets/fonts/config.json';

const FontIcon = createIconSetFromFontello(fontelloConfig, 'Resenha');

//console.log(FontIcon)
const ResenhaIcon = ({ 
    name,
    color,
    size, 
    style,
}) => (
    <FontIcon 
        style={style}
        name={name} 
        size={size} 
        color={color} 
    />
);

export default ResenhaIcon;