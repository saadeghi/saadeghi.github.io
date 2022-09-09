<script>
  import "../app.css"
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat+Alternates:wght@100;400;700&display=swap" rel="stylesheet" />
  <link rel="icon" type="image/x-icon" href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'><text x='0' y='14'>👨‍💻</text></svg>" />
</svelte:head>

<div class="mb-24 mt-6 flex flex-col items-center justify-center px-6">
  <div class="flex w-full max-w-4xl flex-col gap-36 print:gap-10">
    <slot />
  </div>
</div>
