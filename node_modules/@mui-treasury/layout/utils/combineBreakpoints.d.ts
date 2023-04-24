import { Breakpoint } from "@mui/system";
import { Responsive } from "./types";
export declare const sortBreakpoints: (breakpoints: Breakpoint[]) => Breakpoint[];
export declare const combineBreakpoints: (...args: (Responsive<any> | Breakpoint[])[]) => Breakpoint[];
