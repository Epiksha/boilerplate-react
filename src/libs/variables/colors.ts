interface IColors {
    [key: string]: {
        hex: string;
        varReference: string;
    }
}

export const Colors: IColors = {
    "Primary": {
        hex: "#4A3277",
        varReference: "$color-1",
    },
    "Primary Active": {
        hex: "#8f72c5",
        varReference: "$color-2",
    },
    "Outline": {
        hex: "#7deba0",
        varReference: "$color-3",
    },
}