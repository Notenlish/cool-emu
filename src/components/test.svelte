<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion/index.js";
  import SimpleLink from "$lib/components/ui/SimpleLink/SimpleLink.svelte";
</script>

<section
  id="faq"
  class="sm:container sm:mx-auto px-2 mt-12 flex flex-col items-center mb-12 sm:mb-12"
>
  <h2 class="text-2xl sm:text-3xl text-center w-full font-bold mb-6">
    Got a Question?
  </h2>
  <Accordion.Root type="single" class="w-full sm:max-w-[70%]" value="">
    <Accordion.Item value="item-1">
      <Accordion.Trigger>How does this work?</Accordion.Trigger>
      <Accordion.Content class="flex flex-col gap-4 text-balance">
        <p>
          This website uses <SimpleLink
            href="https://github.com/EmulatorJS/EmulatorJS"
            target="_blank">EmulatorJS</SimpleLink
          > for emulation of games on web. EmulatorJS runs RetroArch compiled to
          webassembly, that way it is possible to emulate a variety of systems on
          web.
        </p>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
      <Accordion.Trigger
        >Why is emulation of [Insert Console Here] unsupported?</Accordion.Trigger
      >
      <Accordion.Content class="flex flex-col gap-4 text-balance">
        <p>
          More modern game consoles like PS2 or 3DS are unsupported because they
          require hardware rendering and web browsers don't supply the needed
          api's for higher end cores.
        </p>
        <p>
          If it is an older console, it may be because it's more niche and/or
          the core for it is not available on EmulatorJS. You can <SimpleLink
            href="/contact-us">Contact Us</SimpleLink
          > in case you want to request a spesific console to be added.
        </p>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item>
      <Accordion.Trigger>Is this vibe-coded?</Accordion.Trigger>
      <Accordion.Content class="flex flex-col gap-4 text-balance">
        <p>
          No. It is made with my own sweat and tears. I have the design files
          too
        </p>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
</section>
