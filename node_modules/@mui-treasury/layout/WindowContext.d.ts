import React from "react";
export declare const WindowProvider: React.Provider<{
    iWindow: (Window & typeof globalThis) | undefined;
    iDocument: Document | undefined;
}>;
export declare const WindowConsumer: React.Consumer<{
    iWindow: (Window & typeof globalThis) | undefined;
    iDocument: Document | undefined;
}>;
export declare const useWindowCtx: () => {
    iWindow: (Window & typeof globalThis) | undefined;
    iDocument: Document | undefined;
};
