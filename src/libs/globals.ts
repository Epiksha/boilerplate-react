// Breakpoints
interface IBreakpoints {
    mobile: number,
    tablet: number,
    desktop: number,
}

export const breakpoints: IBreakpoints = {
    mobile: 576,
    tablet: 768,
    desktop: 1200,
};

// Default Export
interface IGlobals {
    breakpoints: IBreakpoints,
}

const globals: IGlobals = {
    breakpoints,
};

export default globals;