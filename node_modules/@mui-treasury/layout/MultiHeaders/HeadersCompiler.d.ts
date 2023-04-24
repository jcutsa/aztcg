import { ClippableElement, HeaderBuilder } from "../Header/HeaderBuilder";
import { Responsive } from "../utils/types";
export declare const HeadersCompiler: (headers: (HeaderBuilder | undefined)[]) => {
    getClippedHeight(sidebarId: ClippableElement): {
        totalHeight: Responsive<string | number>;
        diffHeight: Responsive<string | number>;
    };
    getAllHeight(): {
        totalHeight: Responsive<string | number>;
        diffHeight: Responsive<string | number>;
    };
};
