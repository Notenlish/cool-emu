<script lang="ts">
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";

  let { crumbs }: { crumbs: { link: string; text: string }[] } = $props();
</script>

<Breadcrumb.Root>
  <Breadcrumb.List>
    {#each crumbs as e,i}
      <Breadcrumb.Item>
        <Breadcrumb.Link href={e.link}>{e.text}</Breadcrumb.Link>
      </Breadcrumb.Item>
      {#if i < crumbs.length - 1}
        <Breadcrumb.Separator />
      {/if}
    {/each}
  </Breadcrumb.List>
</Breadcrumb.Root>
