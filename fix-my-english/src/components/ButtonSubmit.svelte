<script>
  import { spellChecker } from "../services/ia";
  import Submit from "./buttons/Submit.svelte";
  import Loading from "./buttons/Loading.svelte";
  import Response from "./Response.svelte";

  let promise = null;
  let phrase = "";
  let response = "";

  async function handleClick() {
    phrase = document.getElementById("phrase").value;

    try {
      promise = spellChecker(phrase);
      response = await promise;
    } catch (error) {
      console.error("Error:", error);
    } finally {
      promise = null;
    }
  }
</script>

{#if promise === null}
  <Submit {handleClick} />
{:else}
  <Loading />
{/if}

<Response {response} />

<style></style>
