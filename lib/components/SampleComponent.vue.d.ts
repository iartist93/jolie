declare const _default: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    show: import("@vue/composition-api").Ref<boolean>;
    toggleShow: () => void;
}> & import("@vue/composition-api").Data, {}, {}, {
    headingText: {
        type: StringConstructor;
        default: string;
    };
    bodyText: {
        type: StringConstructor;
        default: string;
    };
}, {
    headingText: string;
    bodyText: string;
} & {}> & Omit<import("vue").VueConstructor<import("vue").default>, never> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{
    headingText: string;
    bodyText: string;
} & {}, import("@vue/composition-api").ShallowUnwrapRef<{
    show: import("@vue/composition-api").Ref<boolean>;
    toggleShow: () => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {
    headingText: string;
    bodyText: string;
} & {}, {
    headingText: string;
    bodyText: string;
}, true>);
export default _default;
