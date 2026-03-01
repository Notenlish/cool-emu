<script lang="ts">
    import * as Accordion from "$lib/components/ui/accordion/index.js";
    import SimpleLink from "$lib/components/ui/SimpleLink/SimpleLink.svelte";
</script>

<section class="container mx-auto mt-12 flex flex-col items-center" id="faq">
    <h2 class="text-3xl text-center w-full font-bold mb-6">Got a Question?</h2>
    <Accordion.Root type="single" class="w-full sm:max-w-[70%]" value="">
        <Accordion.Item value="item-1">
            <Accordion.Trigger>How does this work?</Accordion.Trigger>
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    This website uses <SimpleLink
                        href="https://github.com/EmulatorJS/EmulatorJS"
                        target="_blank">EmulatorJS</SimpleLink
                    > for emulation of games on web. EmulatorJS runs RetroArch compiled
                    to webassembly, that way it is possible to emulate a variety
                    of systems on web.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
            <Accordion.Trigger
                >Why is emulation of [Insert Console Here] unsupported?</Accordion.Trigger
            >
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    More modern game consoles like PS2 or 3DS are unsupported
                    because they require hardware rendering and web browsers
                    don't supply the needed api's for higher end cores.
                </p>
                <p>
                    If it is an older console, it may be because it's more niche
                    and/or the core for it is not available on EmulatorJS. You
                    can <SimpleLink href="/contact">Contact Us</SimpleLink> in case
                    you want to request a spesific console to be added.
                </p>
            </Accordion.Content>
        </Accordion.Item>
        <!-- <Accordion.Item value="item-3">
            <Accordion.Trigger>Return Policy</Accordion.Trigger>
            <Accordion.Content class="flex flex-col gap-4 text-balance">
                <p>
                    We stand behind our products with a comprehensive 30-day
                    return policy. If you&apos;re not completely satisfied,
                    simply return the item in its original condition.
                </p>
                <p>
                    Our hassle-free return process includes free return shipping
                    and full refunds processed within 48 hours of receiving the
                    returned item.
                </p>
            </Accordion.Content>
        </Accordion.Item> -->
    </Accordion.Root>
</section>
