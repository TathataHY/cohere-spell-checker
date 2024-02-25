<script>
  import SubmitIcon from "../icons/SubmitIcon.svelte";
  export let handleClick;
</script>

<button
  on:click={handleClick}
  type="button"
  class="py-2 px-4 flex justify-center items-center bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
>
  <SubmitIcon />
  Fix it!
</button>
