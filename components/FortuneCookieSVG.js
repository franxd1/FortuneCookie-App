import React from 'react';
import Svg, { Path, Rect, Text } from 'react-native-svg';

const renderMessageLines = (message) => {
    if (!message) return [];

    const maxCharsPerLine = 18;
    const maxLines = 3;
    const words = message.split(' ');
    const lines = [];
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const testLine = currentLine ? currentLine + ' ' + word : word;

        if (testLine.length <= maxCharsPerLine) {
            currentLine = testLine;
        } else {
            lines.push(currentLine);
            currentLine = word;

            if (lines.length === maxLines - 1) {
                let remainingWords = words.slice(i + 1);
                let lastLine = currentLine;
                for (let w of remainingWords) {
                    const testLastLine = lastLine + ' ' + w;
                    if (testLastLine.length <= maxCharsPerLine - 3) {
                        lastLine = testLastLine;
                    } else {
                        lastLine += '...';
                        break;
                    }
                }
                lines.push(lastLine);
                break;
            }
        }
    }

    if (lines.length < maxLines && currentLine) {
        lines.push(currentLine);
    }

    return lines;
};

export default function FortuneCookieSVG({ open, message }) {
    const lines = renderMessageLines(message);

    const lineHeight = 28;
    const textBlockHeight = lines.length * lineHeight;
    const startY = 80 + (96 - textBlockHeight) / 2 + 20;

    return (
        <Svg width="320" height="320" viewBox="0 0 320 320">
            {open ? (
                <>
                    {/* Metade esquerda do biscoito aberto */}
                    <Path
                        d="M80 160 Q55 80 160 115 Q115 215 80 160"
                        fill="#e0a96d"
                        stroke="#a65f28"
                        strokeWidth="3"
                    />
                    {/* Metade direita do biscoito aberto */}
                    <Path
                        d="M240 160 Q265 80 160 115 Q205 215 240 160"
                        fill="#d8904f"
                        stroke="#a65f28"
                        strokeWidth="3"
                    />
                    {/* Papel da sorte */}
                    <Rect
                        x="80"
                        y="80"
                        width="160"
                        height="96"
                        rx="3"
                        fill="#fff"
                        stroke="#ccc"
                        strokeWidth="1.5"
                    />
                    {/* Linha de dobra do papel */}
                    <Path
                        d="M80 115 L240 115"
                        stroke="#eee"
                        strokeWidth="1.5"
                        strokeDasharray="3,3"
                    />
                    {/* Texto da sorte dividido em linhas */}
                    {lines.map((line, index) => (
                        <Text
                            key={index}
                            x="160"
                            y={startY + index * lineHeight}
                            fontSize="14"
                            fill="#333"
                            textAnchor="middle"
                            fontWeight="bold"
                        >
                            {line}
                        </Text>
                    ))}
                </>
            ) : (
                // Biscoito fechado
                <Path
                    d="M80 160 Q160 50 240 160 Q160 260 80 160"
                    fill="#e0a96d"
                    stroke="#a65f28"
                    strokeWidth="3"
                />
            )}
        </Svg>
    );
}
