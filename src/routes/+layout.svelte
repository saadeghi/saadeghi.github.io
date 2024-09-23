<script>
  import "../app.css";
</script>

<svelte:head>
  <!-- <link rel="preconnect" href="https://fonts.googleapis.com" /> -->
  <!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> -->
  <!-- <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat+Alternates:wght@100;700&display=swap" rel="stylesheet" /> -->
  <link
    rel="shortcut icon"
    type="image/x-icon"
    href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><text x='0' y='14'>👨‍💻</text></svg>"
  />
</svelte:head>

<div class="mx-6 my-24 print:my-0 flex flex-col items-center justify-center">
  <div
    class="flex w-full max-w-[100ch] print:max-w-none flex-col gap-32 leading-6 text-sm print:gap-10"
  >
    <slot />
  </div>
</div>
