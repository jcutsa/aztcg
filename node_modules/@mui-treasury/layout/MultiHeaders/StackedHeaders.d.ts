import { HeaderConfig } from "../Header/HeaderBuilder";
export declare const StackedHeaders: (configs: (HeaderConfig | undefined)[]) => {
    totalHeight: string | number;
    diffHeight: string;
};
