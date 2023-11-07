<script lang="ts">
	import "@picocss/pico";
	export let data;
</script>


<table>
	<thead>
		<tr>
			<th><strong>Shortener</strong></th>
			<th><strong>Count</strong></th>
		</tr>
	</thead>
	<tbody>
		{#each data.links as link}
		<tr><td><a href="https://rcc.lol/{link[0]}">{link[0]}</a></td><td>{link[1]}</td></tr>
			
		{/each}
	</tbody>
</table>