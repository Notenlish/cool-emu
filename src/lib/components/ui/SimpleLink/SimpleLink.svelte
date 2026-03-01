<script lang="ts">
    // Incredibly simple link component. for astro.
    import { cn } from "$lib/utils";

    interface Props {
        href: string;
        target?: "_blank" | "_parent" | "_self" | "_top" | null | undefined;
        class?: string | null | undefined;
        children?: any;
    }
    const { href, target, class: className, children }: Props = $props();
</script>

<a {href} class={cn(className, "simplelink")} {target}>{@render children?.()}</a
>
